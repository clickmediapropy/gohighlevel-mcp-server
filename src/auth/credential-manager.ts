/**
 * Credential Manager for Multi-Tenant GoHighLevel MCP Server
 * Handles extraction, validation, and management of GHL credentials
 */

import { GHLConfig } from '../types/ghl-types';
import { GHLApiClient } from '../clients/ghl-api-client';

export interface GHLCredentials {
  apiKey?: string;
  locationId?: string;
  ghlApiKey?: string;
  ghlLocationId?: string;
}

export class CredentialManager {
  private static instance: CredentialManager;
  private clientCache: Map<string, GHLApiClient> = new Map();
  private defaultConfig: GHLConfig | null = null;

  private constructor() {
    this.initializeDefaults();
  }

  public static getInstance(): CredentialManager {
    if (!CredentialManager.instance) {
      CredentialManager.instance = new CredentialManager();
    }
    return CredentialManager.instance;
  }

  private initializeDefaults(): void {
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;
    const baseUrl = process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com';

    if (apiKey && locationId) {
      this.defaultConfig = {
        accessToken: apiKey,
        locationId: locationId,
        baseUrl: baseUrl,
        version: '2021-07-28'
      };
      
      process.stderr.write('[GHL MCP] Default credentials loaded from environment\n');
    } else {
      process.stderr.write('[GHL MCP] No default credentials in environment - multi-tenant mode only\n');
    }
  }

  /**
   * Extract credentials from request parameters
   * Supports both 'apiKey/locationId' and 'ghlApiKey/ghlLocationId' formats
   */
  public extractCredentials(params: any): GHLCredentials | null {
    const credentials: GHLCredentials = {};
    
    // Check for credentials in various formats
    if (params?.ghlApiKey || params?.apiKey) {
      credentials.apiKey = params.ghlApiKey || params.apiKey;
    }
    
    if (params?.ghlLocationId || params?.locationId) {
      credentials.locationId = params.ghlLocationId || params.locationId;
    }

    // Return null if no credentials found
    if (!credentials.apiKey && !credentials.locationId) {
      return null;
    }

    return credentials;
  }

  /**
   * Get or create a GHL API client based on credentials
   * Uses cache to avoid recreating clients for same credentials
   */
  public getClient(credentials?: GHLCredentials | null): GHLApiClient {
    // If no credentials provided, use default client
    if (!credentials || (!credentials.apiKey && !credentials.locationId)) {
      if (!this.defaultConfig) {
        throw new Error(
          'No credentials provided and no default credentials available. ' +
          'Please provide ghlApiKey and ghlLocationId in the request, ' +
          'or set GHL_API_KEY and GHL_LOCATION_ID environment variables.'
        );
      }
      return this.getOrCreateClient(this.defaultConfig);
    }

    // Build config from provided credentials
    const config: GHLConfig = {
      accessToken: credentials.apiKey || this.defaultConfig?.accessToken || '',
      locationId: credentials.locationId || this.defaultConfig?.locationId || '',
      baseUrl: process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com',
      version: '2021-07-28'
    };

    // Validate required fields
    if (!config.accessToken) {
      throw new Error('API key is required. Please provide ghlApiKey in the request.');
    }
    
    if (!config.locationId) {
      throw new Error('Location ID is required. Please provide ghlLocationId in the request.');
    }

    return this.getOrCreateClient(config);
  }

  /**
   * Get client from cache or create new one
   */
  private getOrCreateClient(config: GHLConfig): GHLApiClient {
    const cacheKey = `${config.accessToken}_${config.locationId}`;
    
    let client = this.clientCache.get(cacheKey);
    if (!client) {
      client = new GHLApiClient(config);
      this.clientCache.set(cacheKey, client);
      
      process.stderr.write(`[GHL MCP] Created new client for location: ${config.locationId}\n`);
    }
    
    return client;
  }

  /**
   * Clear client cache (useful for testing or memory management)
   */
  public clearCache(): void {
    this.clientCache.clear();
    process.stderr.write('[GHL MCP] Client cache cleared\n');
  }

  /**
   * Get cache size for monitoring
   */
  public getCacheSize(): number {
    return this.clientCache.size;
  }
}
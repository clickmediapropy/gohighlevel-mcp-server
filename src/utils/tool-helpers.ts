/**
 * Tool helper utilities for GoHighLevel MCP Server
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

/**
 * Add credential parameters to tool definitions
 * Allows passing API key and location ID per request
 */
export function addCredentialParametersToTools(tools: any[]): any[] {
  return tools.map(tool => {
    // Create a new tool definition with credential parameters
    const enhancedTool = { ...tool };
    
    // Ensure inputSchema exists and is properly typed
    if (!enhancedTool.inputSchema) {
      enhancedTool.inputSchema = {
        type: 'object',
        properties: {}
      };
    }
    
    // Add credential parameters to existing properties
    enhancedTool.inputSchema.properties = {
      ...enhancedTool.inputSchema.properties,
      ghlApiKey: {
        type: 'string',
        description: 'GoHighLevel API key (optional - uses default if not provided)'
      },
      ghlLocationId: {
        type: 'string', 
        description: 'GoHighLevel location ID (optional - uses default if not provided)'
      }
    };
    
    // Don't add credentials to required fields - they're optional
    // Keep existing required fields as-is
    
    return enhancedTool;
  });
}

/**
 * Extract and remove credentials from tool arguments
 * Returns credentials and cleaned arguments separately
 */
export function extractCredentialsFromArgs(args: any): {
  credentials: { ghlApiKey?: string; ghlLocationId?: string };
  cleanedArgs: any;
} {
  const { ghlApiKey, ghlLocationId, ...cleanedArgs } = args || {};
  
  const credentials: any = {};
  if (ghlApiKey) credentials.ghlApiKey = ghlApiKey;
  if (ghlLocationId) credentials.ghlLocationId = ghlLocationId;
  
  return {
    credentials,
    cleanedArgs
  };
}
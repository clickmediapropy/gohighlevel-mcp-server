# 🚀 GoHighLevel MCP Server - Cursor Setup Guide

## 📋 Prerequisites

Before setting up the ghlmcp2 MCP server in Cursor, ensure you have:

1. **GoHighLevel Account** with API access
2. **Private Integrations API Key** (not a regular API key)
3. **Location ID** from your GoHighLevel account
4. **Node.js 18+** installed on your system
5. **Cursor** installed and configured

## 🔑 Getting Your GoHighLevel Credentials

### Step 1: Get Your Private Integrations API Key

1. **Login to your GoHighLevel account**
2. **Navigate to Settings** → **Integrations** → **Private Integrations**
3. **Create New Private Integration:**
   - **Name**: `MCP Server Integration` (or your preferred name)
   - **Webhook URL**: Leave blank (not needed)
4. **Select Required Scopes** based on tools you'll use:
   - ✅ **contacts.readonly** - View contacts
   - ✅ **contacts.write** - Create/update contacts  
   - ✅ **conversations.readonly** - View conversations
   - ✅ **conversations.write** - Send messages
   - ✅ **opportunities.readonly** - View opportunities
   - ✅ **opportunities.write** - Manage opportunities
   - ✅ **calendars.readonly** - View calendars/appointments
   - ✅ **calendars.write** - Create/manage appointments
   - ✅ **locations.readonly** - View location data
   - ✅ **locations.write** - Manage location settings
   - ✅ **workflows.readonly** - View workflows
   - ✅ **campaigns.readonly** - View campaigns
   - ✅ **blogs.readonly** - View blog content
   - ✅ **blogs.write** - Create/manage blog posts
   - ✅ **users.readonly** - View user information
   - ✅ **custom_objects.readonly** - View custom objects
   - ✅ **custom_objects.write** - Manage custom objects
   - ✅ **invoices.readonly** - View invoices
   - ✅ **invoices.write** - Create/manage invoices
   - ✅ **payments.readonly** - View payment data
   - ✅ **products.readonly** - View products
   - ✅ **products.write** - Manage products

5. **Save Integration** and copy the generated **Private API Key**

### Step 2: Get Your Location ID

1. **Go to Settings** → **Company** → **Locations**
2. **Copy your Location ID** (it's a string like `abc123def456`)

## ⚙️ Cursor MCP Configuration

### Step 1: Update the MCP Configuration

The MCP configuration file has been created at `.cursor/mcp.json`. You need to update it with your actual credentials:

```json
{
  "mcpServers": {
    "ghlmcp2": {
      "command": "node",
      "args": ["/Users/nicodelgadob/Documents/development/mcp-servers/ghlmcp2/dist/server.js"],
      "env": {
        "GHL_API_KEY": "your_actual_private_integrations_api_key",
        "GHL_BASE_URL": "https://services.leadconnectorhq.com",
        "GHL_LOCATION_ID": "your_actual_location_id",
        "NODE_ENV": "production"
      }
    }
  }
}
```

### Step 2: Replace Placeholder Values

Replace the following placeholders in `.cursor/mcp.json`:

- `"your_actual_private_integrations_api_key"` → Your Private Integrations API Key
- `"your_actual_location_id"` → Your Location ID

### Step 3: Restart Cursor

After updating the configuration:

1. **Save the file**
2. **Restart Cursor** completely
3. **Open a new chat** to test the integration

## 🧪 Testing the Integration

### Test 1: Basic Connectivity

Ask Cursor to test the GoHighLevel connection:

```
"Test the GoHighLevel MCP server connection by listing available tools"
```

### Test 2: Contact Operations

Try a simple contact operation:

```
"Search for contacts in GoHighLevel with the tag 'VIP'"
```

### Test 3: Available Tools

Ask about available tools:

```
"What GoHighLevel tools are available through the MCP server?"
```

## 🛠️ Troubleshooting

### Common Issues

**1. "Server not found" error**
- Ensure the path to `server.js` is correct
- Verify Node.js is installed and accessible
- Check that the `dist` folder exists in the ghlmcp2 directory

**2. "Authentication failed" error**
- Verify you're using a Private Integrations API key (not regular API key)
- Check that the API key has the required scopes
- Ensure the Location ID is correct

**3. "Permission denied" error**
- Make sure the `server.js` file has execute permissions
- Check that Cursor has permission to access the file

**4. "Environment variables not found"**
- Verify all environment variables are set in the MCP configuration
- Check for typos in variable names

### Debug Commands

Run these commands in your terminal to debug:

```bash
# Test Node.js installation
node --version

# Test the server directly
cd /Users/nicodelgadob/Documents/development/mcp-servers/ghlmcp2
node dist/server.js

# Check file permissions
ls -la dist/server.js

# Test API connectivity (replace with your actual credentials)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://services.leadconnectorhq.com/locations/YOUR_LOCATION_ID
```

## 📚 Available Tools

The ghlmcp2 MCP server provides **269+ tools** across 19 categories:

### 🎯 Contact Management (31 Tools)
- `create_contact`, `search_contacts`, `get_contact`, `update_contact`
- `add_contact_tags`, `remove_contact_tags`, `get_contact_tasks`
- `create_contact_task`, `get_contact_notes`, `create_contact_note`

### 💬 Messaging & Conversations (20 Tools)
- `send_sms`, `send_email`, `search_conversations`
- `get_conversation`, `create_conversation`, `get_message`

### 💰 Sales & Revenue (10 Tools)
- `search_opportunities`, `create_opportunity`, `update_opportunity`
- `get_pipelines`, `add_opportunity_followers`

### 🗓️ Calendar & Appointments (14 Tools)
- `get_calendar_events`, `create_appointment`, `get_appointment`
- `get_free_slots`, `create_block_slot`

### 📧 Email Marketing (5 Tools)
- `get_email_campaigns`, `create_email_template`
- `get_email_templates`, `update_email_template`

### 🏢 Location Management (24 Tools)
- `search_locations`, `get_location`, `create_location`
- `get_location_tags`, `create_location_tag`

### 📱 Social Media Management (17 Tools)
- `search_social_posts`, `create_social_post`, `get_social_post`
- `get_social_accounts`, `upload_social_csv`

### 🛒 E-commerce (18 Tools)
- `ghl_create_shipping_zone`, `ghl_list_shipping_zones`
- `ghl_create_product`, `ghl_list_products`

### 💳 Payments Management (20 Tools)
- `list_orders`, `get_order_by_id`, `list_transactions`
- `list_subscriptions`, `create_coupon`

### 🧾 Invoices & Billing (39 Tools)
- `create_invoice`, `list_invoices`, `get_invoice`
- `create_estimate`, `list_estimates`

## 🎯 Usage Examples

### Customer Communication
```
"Search for contacts tagged 'VIP' who haven't been contacted in 30 days, then send them a personalized SMS about our new premium service offering"
```

### Sales Pipeline Management
```
"Create an opportunity for contact John Smith for our Premium Package worth $5000, add it to the 'Enterprise Sales' pipeline, and schedule a follow-up appointment for next Tuesday"
```

### Business Intelligence
```
"Get all invoices from the last quarter, analyze payment patterns, and create a report of our top-paying customers with their lifetime value"
```

### E-commerce Operations
```
"List all products with low inventory, create a restock notification campaign, and send it to contacts tagged 'inventory-manager'"
```

## 🔒 Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for all sensitive data
3. **Regular API key rotation** for security
4. **Monitor API usage** to avoid rate limits
5. **Implement proper error handling** and logging

## 📞 Support

If you encounter issues:

1. **Check the troubleshooting section** above
2. **Verify your credentials** are correct
3. **Test API connectivity** directly
4. **Check Cursor logs** for error messages
5. **Restart Cursor** after configuration changes

## 🚀 Next Steps

Once configured, you can:

1. **Explore all available tools** by asking Cursor
2. **Create custom workflows** combining multiple tools
3. **Automate repetitive tasks** in GoHighLevel
4. **Build AI-powered CRM operations** with Claude's assistance

---

**🎉 Congratulations! You've successfully configured the ghlmcp2 MCP server in Cursor!**

Now you have access to 269+ powerful GoHighLevel tools directly through Claude's AI assistance.

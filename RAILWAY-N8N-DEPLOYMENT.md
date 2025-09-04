# 🚀 Railway Deployment Guide for N8N Integration

## 📋 Prerequisites

1. **GitHub Account** - Your code needs to be in a GitHub repository
2. **Railway Account** - Sign up at [railway.app](https://railway.app)
3. **GoHighLevel API Key** - Get from your GoHighLevel account
4. **N8N Instance** - Either self-hosted or N8N Cloud

---

## 🚂 Part 1: Deploy to Railway

### Step 1: Prepare Your Repository

1. **Push to GitHub** (if not already done):
```bash
cd /Users/nicodelgadob/Documents/development/mcp-servers/ghlmcp2
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### Step 2: Deploy on Railway

1. **Go to [railway.app](https://railway.app) and sign in**

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account if not connected
   - Search and select your `ghlmcp2` repository

3. **Configure Environment Variables**:
   
   Click on your deployed service and go to "Variables" tab. Add these:

   ```
   GHL_API_KEY=your_actual_gohighlevel_api_key
   GHL_BASE_URL=https://services.leadconnectorhq.com
   GHL_LOCATION_ID=your_actual_location_id
   NODE_ENV=production
   PORT=8000
   ```

4. **Deploy**:
   - Railway will automatically detect Node.js and start building
   - Wait for the build to complete (usually 2-3 minutes)
   - Once deployed, you'll see a green checkmark

5. **Get Your Public URL**:
   - Go to "Settings" tab
   - Under "Domains", click "Generate Domain"
   - You'll get a URL like: `ghlmcp2-production.up.railway.app`
   - Save this URL - you'll need it for N8N!

### Step 3: Verify Deployment

Test these endpoints in your browser:

1. **Health Check**:
   ```
   https://your-app.up.railway.app/health
   ```
   Should return:
   ```json
   {
     "status": "healthy",
     "server": "ghl-mcp-server",
     "version": "1.0.0",
     "tools": { "total": 253 }
   }
   ```

2. **Tools List**:
   ```
   https://your-app.up.railway.app/tools
   ```
   Should return a list of all 253 GoHighLevel tools

3. **SSE Endpoint** (for MCP):
   ```
   https://your-app.up.railway.app/sse
   ```
   Should show SSE connection headers

---

## 🔧 Part 2: Configure N8N Integration

### Step 1: N8N Environment Setup

If self-hosting N8N, add this environment variable:
```bash
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

For N8N Cloud, this is already enabled.

### Step 2: Install Required N8N Nodes

1. Go to N8N Settings → Community Nodes
2. Install: `@n8n/n8n-nodes-langchain` (if not already installed)

### Step 3: Create N8N Workflow with MCP

1. **Create New Workflow** in N8N

2. **Add MCP Server Trigger** (if you want N8N to act as MCP server):
   - This makes N8N workflows available to MCP clients
   - Configure authentication (Bearer token recommended)

3. **Add MCP Client Tool** (to connect to your Railway server):
   ```
   Configuration:
   - Server URL: https://your-app.up.railway.app/sse
   - Authentication Method: None (or Bearer if you add auth)
   - Test Connection: Click to verify
   ```

4. **Add AI Agent Node**:
   - Choose your AI model (OpenAI, Claude, etc.)
   - Connect the MCP Client Tool to the Agent's tool input

5. **Example Workflow Structure**:
   ```
   [Webhook Trigger] → [AI Agent with MCP Tool] → [Response]
   ```

---

## 🤖 Part 3: Create N8N Chatbot for GoHighLevel

### Simple Chatbot Workflow

1. **Webhook Node** (Entry Point):
   - Creates an endpoint for your chatbot
   - Receives user messages

2. **AI Agent Node**:
   - Model: GPT-4 or Claude
   - System Message:
   ```
   You are a GoHighLevel assistant. You can:
   - Search and manage contacts
   - Handle conversations and messages
   - Manage calendars and appointments
   - Create blog posts
   - Manage opportunities
   Use the available MCP tools to interact with GoHighLevel.
   ```

3. **MCP Client Tool** (connected to Agent):
   - Server URL: `https://your-app.up.railway.app/sse`
   - This gives the AI access to all 253 GoHighLevel tools

4. **Response Node**:
   - Send the AI's response back via webhook

### Example User Interactions

Users can now chat with your bot:
```
User: "Create a contact for John Doe with email john@example.com"
Bot: "Contact created successfully with ID: xxx"

User: "Show me all contacts tagged with 'customer'"
Bot: "Found 15 contacts with 'customer' tag: [list]"

User: "Schedule an appointment for tomorrow at 2 PM"
Bot: "Appointment scheduled for [date] at 2:00 PM"
```

---

## 🔍 Troubleshooting

### Railway Issues

1. **Build Fails**:
   - Check Node version (requires >=18.0.0)
   - Verify all dependencies in package.json

2. **Server Crashes**:
   - Check environment variables are set correctly
   - View logs in Railway dashboard

3. **504 Gateway Timeout**:
   - Normal for SSE connections after idle time
   - N8N will reconnect automatically

### N8N Integration Issues

1. **MCP Tool Not Connecting**:
   - Verify URL includes `/sse` endpoint
   - Check CORS is enabled (it is by default)
   - Test the health endpoint first

2. **Tools Not Available to AI Agent**:
   - Ensure `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true`
   - Reconnect the MCP Client Tool to the Agent

3. **Slow Response Times**:
   - First request may be slow (cold start)
   - Consider upgrading Railway plan for better performance

---

## 💰 Railway Pricing

- **Free Tier**: $5 credit/month (enough for testing)
- **Hobby**: $5/month (good for production)
- **Pro**: $20/month (includes more resources)

Your MCP server is lightweight and should run fine on the Hobby plan.

---

## 🎯 Quick Test Commands

After deployment, test with curl:

```bash
# Health check
curl https://your-app.up.railway.app/health

# List all tools
curl https://your-app.up.railway.app/tools | jq '.tools[].name'

# Test SSE connection
curl -N -H "Accept: text/event-stream" \
  https://your-app.up.railway.app/sse
```

---

## 📚 Advanced N8N Workflows

### Multi-Channel Chatbot
Connect your GoHighLevel MCP to multiple channels:
- Telegram Bot
- WhatsApp (via Twilio)
- Slack
- Discord
- Web Widget

### Automation Examples
1. **Lead Qualification Bot**: Automatically qualify leads and update GoHighLevel
2. **Appointment Scheduler**: Book appointments via conversation
3. **Support Ticket Handler**: Create and manage support conversations
4. **Content Publisher**: Publish blog posts on schedule
5. **CRM Sync**: Sync contacts between GoHighLevel and other systems

---

## 🔐 Security Recommendations

1. **Add Bearer Authentication**:
   - Modify `http-server.ts` to require auth token
   - Set token in Railway environment variables
   - Configure same token in N8N MCP Client

2. **Rate Limiting**:
   - Consider adding rate limiting for production
   - Use Railway's built-in DDoS protection

3. **Monitoring**:
   - Set up Railway notifications for errors
   - Monitor usage in Railway dashboard

---

## ✅ Success Checklist

- [ ] Repository pushed to GitHub
- [ ] Railway project created and linked
- [ ] Environment variables configured
- [ ] Server deployed and accessible
- [ ] Health endpoint returns success
- [ ] N8N MCP Client Tool configured
- [ ] Test workflow created and working
- [ ] Chatbot responding to GoHighLevel queries

---

## 🆘 Need Help?

1. **Railway Support**: [railway.app/help](https://railway.app/help)
2. **N8N Community**: [community.n8n.io](https://community.n8n.io)
3. **GoHighLevel Docs**: [highlevel.com/docs](https://highlevel.com/docs)

Your GoHighLevel MCP Server is now ready to power intelligent chatbots through N8N! 🎉
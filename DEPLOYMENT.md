# 🚀 Deployment Guide

This guide will help you deploy the Second Brain Journal app to Vercel for production use.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- MongoDB Atlas account (free tier available)
- OpenAI API key
- (Optional) Google Cloud account for Speech-to-Text

## Step 1: Environment Variables Setup

### For the Frontend (Client)
Create these environment variables in your Vercel dashboard:

```env
VITE_API_URL=https://your-backend-url.vercel.app
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

### For the Backend (Server)
Create these environment variables in your Vercel dashboard:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/second-brain-journal
OPENAI_API_KEY=sk-...your-openai-api-key
PORT=7001
NODE_ENV=production
```

## Step 2: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
5. Get your connection string and add it to MONGO_URI

## Step 3: OpenAI API Setup

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an API key
3. Add it to your environment variables as OPENAI_API_KEY

## Step 4: Deploy to Vercel

### Option A: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration from `vercel.json`
6. Add your environment variables in the Vercel dashboard
7. Deploy!

### Option B: Deploy with Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Step 5: Update API URLs

After deploying your backend, update the frontend environment variable:
- `VITE_API_URL=https://your-actual-backend-url.vercel.app`

## Step 6: Testing

1. Visit your deployed frontend URL
2. Test creating a journal entry
3. Test the AI summarization feature
4. Test voice-to-text functionality

## Common Issues & Solutions

### Issue: 404 Not Found
- **Solution**: Check that your `vercel.json` is in the root directory
- **Solution**: Ensure all file paths in `vercel.json` are correct

### Issue: API calls failing
- **Solution**: Update `VITE_API_URL` to point to your deployed backend
- **Solution**: Check CORS settings in your Express server

### Issue: Database connection errors
- **Solution**: Verify your MongoDB Atlas connection string
- **Solution**: Check if your IP is whitelisted in MongoDB Atlas

### Issue: OpenAI API errors
- **Solution**: Verify your OpenAI API key is correct
- **Solution**: Check if you have credits in your OpenAI account

## Production Optimizations

1. **Enable compression** in your Express server
2. **Set up monitoring** with services like Sentry
3. **Add rate limiting** to prevent API abuse
4. **Implement caching** for frequently accessed data
5. **Add authentication** for user-specific journals

## Security Checklist

- [ ] Never commit `.env` files to Git
- [ ] Use strong, unique API keys
- [ ] Enable CORS only for your domain
- [ ] Implement rate limiting
- [ ] Validate all user inputs
- [ ] Use HTTPS for all communications

## Performance Tips

- [ ] Optimize images and assets
- [ ] Enable Vercel Analytics
- [ ] Use React.memo for expensive components
- [ ] Implement lazy loading for routes
- [ ] Compress API responses

Need help? Check the troubleshooting section in the main README or create an issue on GitHub.

# Deployment Guide for awrarisolution.com

## Replit Setup

1. Make sure your Replit environment has the following secrets set:
   - `PORT`: The port your application will run on (default: 3000)
   - `NODE_ENV`: Set to "production"
   - `DATABASE_URL`: Your PostgreSQL database URL
   - `SESSION_SECRET`: A secure random string for session management

2. In your Replit dashboard:
   - Go to "Settings" > "Custom Domain"
   - Click "Add custom domain"
   - Enter: awrarisolution.com
   - Follow Replit's instructions to verify domain ownership

## DNS Configuration

Configure your domain's DNS settings with your registrar:

1. Add an A Record:
   - Host: @ (or leave blank)
   - Value: Get this from Replit's custom domain settings
   - TTL: 3600 (or 1 hour)

2. Add a CNAME Record for www subdomain:
   - Host: www
   - Value: Your Replit app URL (e.g., your-app.repl.co)
   - TTL: 3600 (or 1 hour)

## SSL/HTTPS Setup

Replit handles SSL certificates automatically. Once your DNS propagates:
1. Verify that https://awrarisolution.com loads correctly
2. Verify that https://www.awrarisolution.com redirects properly

## Verification Steps

After deployment, verify:

1. Homepage loads at https://awrarisolution.com
2. All API endpoints are accessible
3. Authentication system works
4. Database connections are successful
5. Security headers are present:
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block

## Troubleshooting

If you encounter issues:

1. Check Replit logs for any server startup errors
2. Verify DNS propagation using `dig awrarisolution.com`
3. Ensure all environment variables are set correctly
4. Check that the database is accessible from Replit

## Maintenance

To update the deployed application:

1. Push changes to your Replit project
2. The server will automatically restart
3. Clear browser cache if needed
4. Monitor logs for any errors

For support contact: support@awrarisolution.com

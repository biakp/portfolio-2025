# Contact Form Backend Setup

Your portfolio now includes a fully functional contact form backend with multiple configuration options.

## Features

- ✅ Form validation (client and server-side)
- ✅ Email notifications with HTML templates
- ✅ Cyberpunk-styled success/error messages
- ✅ Loading states and animations
- ✅ Multiple email service integrations
- ✅ Webhook support for external services
- ✅ Fallback functionality (works without email config)

## Setup Options

### Option 1: Gmail Integration (Recommended for personal use)

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Configure Gmail settings in `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-email@gmail.com
   ```

3. Enable 2-Factor Authentication on your Gmail account

4. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### Option 2: SMTP (For hosting providers)

Configure your hosting provider's SMTP in `.env.local`:
```env
SMTP_HOST=mail.your-domain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@your-domain.com
SMTP_PASS=your-password
EMAIL_FROM=contact@your-domain.com
EMAIL_TO=your-email@gmail.com
```

### Option 3: External Webhook Services

For services like Formspree, EmailJS, or Zapier:

1. Update the contact form to use the webhook endpoint:
   ```typescript
   // In ContactSection.tsx, change the fetch URL to:
   const response = await fetch('/api/contact-webhook', {
   ```

2. Configure webhook URL in `.env.local`:
   ```env
   WEBHOOK_URL=https://formspree.io/f/your-form-id
   WEBHOOK_SECRET=optional-secret-key
   ```

### Option 4: Third-party Services

Popular alternatives:
- **Formspree**: Easy setup, free tier available
- **EmailJS**: Client-side email sending
- **Netlify Forms**: If hosting on Netlify
- **Vercel Contact Forms**: If hosting on Vercel

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out and submit the form
4. Check the browser console for logs
5. If email is configured, check your inbox

## Email Template

The system sends beautifully formatted emails with:
- Cyberpunk styling matching your portfolio
- Sender information
- Message content
- Timestamp
- Source identification

## Security Features

- Input validation and sanitization
- Rate limiting (can be added)
- CORS protection
- Environment variable protection
- XSS prevention

## Troubleshooting

### Form submits but no email received:
1. Check console logs for errors
2. Verify environment variables
3. Test email credentials
4. Check spam folder

### "Network error" message:
1. Check if development server is running
2. Verify API route is accessible at `/api/contact`
3. Check browser developer tools for 404/500 errors

### Gmail authentication issues:
1. Ensure 2FA is enabled
2. Use App Password, not regular password
3. Enable "Less secure app access" if needed (not recommended)

## Customization

The contact form can be customized by modifying:
- `src/app/api/contact/route.ts` - Backend logic
- `src/components/sections/ContactSection.tsx` - Frontend form
- Email templates in the API route
- Validation rules and error messages

## Production Deployment

Remember to:
1. Set environment variables in your hosting platform
2. Test email functionality in production
3. Monitor form submissions and logs
4. Consider adding rate limiting for security

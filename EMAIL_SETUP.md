# Email Setup for Contact Form

The contact form on the website uses Nodemailer to send emails. Follow the instructions below to configure the email service.

## Configuration

Create a `.env.local` file in the root directory of the project with the following variables:

```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_username
EMAIL_PASS=your_password
EMAIL_FROM=website@thefixclinic.com
EMAIL_TO=frontdesk@thefixclinic.com
```

## Recommended Email Service Providers

Here are some recommended email service providers you can use:

### SendGrid

1. Create an account at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Use the following settings:

```
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=your_sendgrid_api_key
```

### Gmail

1. Enable "Less secure app access" for your Gmail account (or use an App Password if you have 2FA enabled)
2. Use the following settings:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_password_or_app_password
```

### Mailgun

1. Create an account at [Mailgun](https://www.mailgun.com/)
2. Get your SMTP credentials
3. Use the following settings:

```
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_mailgun_smtp_username
EMAIL_PASS=your_mailgun_smtp_password
```

## Enabling Email Sending in Production

To enable actual email sending in production, edit the `pages/api/contact.ts` file and uncomment the email sending code:

```typescript
// Send email
// Uncomment this for production
await transporter.sendMail(mailOptions);

// Comment out this log in production
// console.log('Email would be sent with:', mailOptions);
```

## Testing

To test if your email configuration works:

1. Set up the environment variables
2. Submit the contact form on the website
3. Check if the email is received at the address specified in `EMAIL_TO`

If you're having issues, check the server logs for any error messages.

## Security Notes

- Never commit your `.env.local` file to the repository
- Use environment variables on your hosting platform for production
- Consider using email services that provide DKIM and SPF records to improve deliverability
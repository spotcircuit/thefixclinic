import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// For email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message, service } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    // Configure email transporter
    // In production, you'd use your own SMTP settings or a service like SendGrid
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'user',
        pass: process.env.EMAIL_PASS || 'password',
      },
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@thefixclinic.com',
      to: process.env.EMAIL_TO || 'frontdesk@thefixclinic.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service of Interest: ${service || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send email
    // Comment out actual email sending in development
    // For production, uncomment this
    /*
    await transporter.sendMail(mailOptions);
    */
    
    // For development, just log the email
    console.log('Email would be sent with:', mailOptions);
    
    // Return success
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
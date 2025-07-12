import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  // For Gmail (you'll need to set up environment variables)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });
  }
  
  // For other SMTP services (like hosting providers)
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return null;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Log the contact form data
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Try to send email if configured
    const transporter = createTransporter();
    
    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `Portfolio Contact: Message from ${name}`,
          text: `
Name: ${name}
Email: ${email}
Message: ${message}

Sent from: Portfolio Contact Form
Time: ${new Date().toLocaleString()}
          `,
          html: `
            <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e2e8f0; padding: 20px; border: 1px solid #6b7cff;">
              <h2 style="color: #6b7cff; border-bottom: 1px solid #6b7cff; padding-bottom: 10px;">New Portfolio Contact</h2>
              
              <div style="background: #1a1a2e; padding: 15px; margin: 20px 0; border-left: 3px solid #6b7cff;">
                <p><strong style="color: #6b7cff;">Name:</strong> ${name}</p>
                <p><strong style="color: #6b7cff;">Email:</strong> ${email}</p>
              </div>
              
              <div style="background: #1a1a2e; padding: 15px; margin: 20px 0;">
                <p style="color: #6b7cff; margin-bottom: 10px;"><strong>Message:</strong></p>
                <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #6b7cff;">
                <p style="color: #64748b; font-size: 12px;">
                  Sent from Portfolio Contact Form<br>
                  ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        
        return NextResponse.json(
          { 
            message: 'Message sent successfully! I\'ll get back to you soon.',
            success: true 
          },
          { status: 200 }
        );
        
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Still return success but log the email error
        return NextResponse.json(
          { 
            message: 'Message received successfully! I\'ll get back to you soon.',
            success: true,
            note: 'Email notification may be delayed'
          },
          { status: 200 }
        );
      }
    } else {
      // No email configuration, but still accept the message
      return NextResponse.json(
        { 
          message: 'Message received successfully! I\'ll get back to you soon.',
          success: true,
          note: 'Email configuration pending'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}

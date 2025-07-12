import { NextRequest, NextResponse } from 'next/server';

/**
 * Alternative contact form handler using external webhook services
 * This can be used with services like:
 * - Formspree (https://formspree.io/)
 * - Netlify Forms
 * - EmailJS
 * - Zapier Webhooks
 */

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

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Send to external webhook service if configured
    if (process.env.WEBHOOK_URL) {
      try {
        const webhookData = {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
          source: 'Portfolio Contact Form'
        };

        const webhookResponse = await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(process.env.WEBHOOK_SECRET && {
              'Authorization': `Bearer ${process.env.WEBHOOK_SECRET}`
            })
          },
          body: JSON.stringify(webhookData),
        });

        if (!webhookResponse.ok) {
          console.error('Webhook failed:', await webhookResponse.text());
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

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
    { message: 'Webhook contact API endpoint is working' },
    { status: 200 }
  );
}

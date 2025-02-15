import { MailService } from '@sendgrid/mail';
import { type InsertInquiry } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

// Use a generic noreply address for sending
const SENDER_EMAIL = 'noreply@businessawrari.com';
const NOTIFICATION_EMAIL = 'dagidessalegn@businessawrari.com';

export async function sendInquiryNotification(inquiry: InsertInquiry) {
  console.log('Attempting to send email notification for inquiry:', {
    name: inquiry.name,
    email: inquiry.email,
    service: inquiry.service
  });

  const emailContent = {
    to: NOTIFICATION_EMAIL,
    from: {
      email: SENDER_EMAIL,
      name: 'Awrari Business Solutions'
    },
    subject: 'New Contact Form Submission - Awrari Business Solutions',
    text: `
New Contact Form Submission

Contact Details:
---------------
Name: ${inquiry.name}
Email: ${inquiry.email}
${inquiry.company ? `Company: ${inquiry.company}\n` : ''}
Service Interest: ${inquiry.service}

Message:
--------
${inquiry.message}

---
Sent from Awrari Business Solutions Contact Form
    `,
    html: `
      <h2>New Contact Form Submission</h2>

      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${inquiry.name}</li>
        <li><strong>Email:</strong> ${inquiry.email}</li>
        ${inquiry.company ? `<li><strong>Company:</strong> ${inquiry.company}</li>` : ''}
        <li><strong>Service Interest:</strong> ${inquiry.service}</li>
      </ul>

      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${inquiry.message}</p>

      <hr>
      <p><em>Sent from Awrari Business Solutions Contact Form</em></p>
    `
  };

  try {
    console.log('Sending email to:', NOTIFICATION_EMAIL);
    await mailService.send(emailContent);
    console.log('Email notification sent successfully');
    return true;
  } catch (error: any) { // Type assertion to handle unknown error type
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error('SendGrid API response:', {
        status: error.response.status,
        body: error.response.body
      });
    }
    return false;
  }
}
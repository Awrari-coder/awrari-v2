import { MailService } from '@sendgrid/mail';
import { type InsertInquiry } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

const SENDER_EMAIL = 'noreply@awraribusinesssolution.replit.app';
const NOTIFICATION_EMAIL = 'dagidessalegn@businessawrari.com';

export async function sendInquiryNotification(inquiry: InsertInquiry) {
  const emailContent = {
    to: NOTIFICATION_EMAIL,
    from: SENDER_EMAIL,
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
    await mailService.send(emailContent);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}
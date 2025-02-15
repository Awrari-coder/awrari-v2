import { MailService } from '@sendgrid/mail';
import { type InsertInquiry } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const sgMail = new MailService();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Use the verified sender email for both sending and receiving
const VERIFIED_EMAIL = 'dagidessalegn@businessawrari.com';

export function sendInquiryNotification(inquiry: InsertInquiry): Promise<boolean> {
  const msg = {
    to: VERIFIED_EMAIL,
    from: VERIFIED_EMAIL,
    subject: 'New Contact Form Submission - Awrari Business Solutions',
    text: `
New inquiry from ${inquiry.name}
Email: ${inquiry.email}
${inquiry.company ? `Company: ${inquiry.company}\n` : ''}
Service: ${inquiry.service}

Message:
${inquiry.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
      <p><strong>Service:</strong> ${inquiry.service}</p>
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${inquiry.message}</p>
    `
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent successfully to', VERIFIED_EMAIL);
      return true;
    })
    .catch((error) => {
      console.error('SendGrid error:', {
        message: error.message,
        code: error.code,
        response: error.response?.body
      });
      return false;
    });
}
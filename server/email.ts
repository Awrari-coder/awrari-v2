import { MailService } from "@sendgrid/mail";
import { type InsertInquiry } from "@shared/schema";
import { log } from "./vite";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const sgMail = new MailService();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Use the verified sender email
const VERIFIED_EMAIL = "dagidessalegn@businessawrari.com";

export function sendInquiryNotification(
  inquiry: InsertInquiry,
): Promise<boolean> {
  const serviceLabels: Record<string, string> = {
    "digital-marketing": "Digital Marketing & Growth",
    "branding-design": "Branding & Creative Design",
    "web-ai-solutions": "Web & AI-Powered Solutions"
  };

  const msg = {
    to: VERIFIED_EMAIL,
    from: VERIFIED_EMAIL,
    subject: `New Contact Form Submission - ${inquiry.name}`,
    text: `
New inquiry from ${inquiry.name}
Email: ${inquiry.email}
${inquiry.company ? `Company: ${inquiry.company}\n` : ''}
Service: ${serviceLabels[inquiry.service] || inquiry.service}

Message:
${inquiry.message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>From:</strong> ${inquiry.name}</p>
          <p><strong>Email:</strong> ${inquiry.email}</p>
          ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
          <p><strong>Service:</strong> ${serviceLabels[inquiry.service] || inquiry.service}</p>
          <h3 style="color: #666;">Message:</h3>
          <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 3px;">${inquiry.message}</p>
        </div>
      </div>
    `
  };

  log('Attempting to send email notification:', {
    to: VERIFIED_EMAIL,
    from: msg.from,
    subject: msg.subject
  });

  return sgMail
    .send(msg)
    .then((response) => {
      const [firstResponse] = response;
      log("SendGrid API Response:", {
        statusCode: firstResponse?.statusCode,
        headers: firstResponse?.headers,
      });
      return true;
    })
    .catch((error) => {
      console.error("SendGrid error:", {
        message: error.message,
        code: error.code,
        response: error.response?.body,
      });

      // Log specific SendGrid error codes for debugging
      if (error.code === 401) {
        console.error("SendGrid authentication failed - check API key");
      } else if (error.code === 403) {
        console.error(
          "SendGrid authorization failed - sender email may not be verified",
        );
      }

      return false;
    });
}
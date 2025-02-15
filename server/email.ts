import { MailService } from "@sendgrid/mail";
import { type InsertInquiry } from "@shared/schema";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const sgMail = new MailService();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Use the verified sender email for both sending and receiving
const VERIFIED_EMAIL = "dagidessalegn@businessawrari.com";

export function sendInquiryNotification(
  inquiry: InsertInquiry,
): Promise<boolean> {
  const msg = {
    to: "dagidessalegn@businessawrari.com",
    from: "dagidessalegn@businessawrari.com",
    subject: "New Contact Form Submission - Awrari Business Solutions",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  //     text: `
  // New inquiry from ${inquiry.name}
  // Email: ${inquiry.email}
  // ${inquiry.company ? `Company: ${inquiry.company}\n` : ''}
  // Service: ${inquiry.service}

  // Message:
  // ${inquiry.message}
  //     `,
  //     html: `
  //       <h2>New Contact Form Submission</h2>
  //       <p><strong>From:</strong> ${inquiry.name}</p>
  //       <p><strong>Email:</strong> ${inquiry.email}</p>
  //       ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
  //       <p><strong>Service:</strong> ${inquiry.service}</p>
  //       <h3>Message:</h3>
  //       <p style="white-space: pre-wrap;">${inquiry.message}</p>
  //     `
  //   };

  //   console.log('Attempting to send email notification with config:', {
  //     to: VERIFIED_EMAIL,
  //     from: msg.from,
  //     subject: msg.subject

  return sgMail
    .send(msg)
    .then((response) => {
      const [firstResponse] = response;
      console.log("SendGrid API Response:", {
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

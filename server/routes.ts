import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { log } from "./vite";
import { sendInquiryNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    try {
      log("=== Starting new inquiry submission ===");
      log(`Request body: ${JSON.stringify(req.body, null, 2)}`);

      const inquiry = insertInquirySchema.parse(req.body);
      log(`Validation passed, processing inquiry from: ${inquiry.email}`);

      const sent = await sendInquiryNotification(inquiry);
      if (sent) {
        log('Email notification sent successfully');
        res.json({
          message: "Your message was received and sent successfully"
        });
      } else {
        log('Email notification failed');
        res.status(500).json({
          message: "Failed to send your message. Please try again later."
        });
      }
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessage = err.errors[0].message;
        log(`Validation error: ${errorMessage}`);
        res.status(400).json({ message: errorMessage });
      } else {
        log(`Unexpected error: ${err}`);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
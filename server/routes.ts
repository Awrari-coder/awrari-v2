import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { setupAuth } from "./auth";
import { log } from "./vite";
import { sendInquiryNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  app.get("/api/inquiries", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (err) {
      log(`Error fetching inquiries: ${err}`);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      log("=== Starting new inquiry submission ===");
      log(`Request body: ${JSON.stringify(req.body, null, 2)}`);

      const inquiry = insertInquirySchema.parse(req.body);
      log(`Validation passed, processing inquiry from: ${inquiry.email}`);

      const created = await storage.createInquiry(inquiry);
      log(`Successfully stored inquiry in database, ID: ${created.id}`);

      try {
        log('Initiating email notification process...');
        const emailSent = await sendInquiryNotification(inquiry);

        if (!emailSent) {
          log('Email notification failed - but inquiry was saved');
          return res.status(207).json({
            data: created,
            message: "Your message was saved but we couldn't send the email notification"
          });
        }

        log('Email notification sent successfully');
        res.json({
          data: created,
          message: "Your message was received and notification sent successfully"
        });
      } catch (emailError) {
        log(`Email sending error: ${emailError}`);
        res.status(207).json({
          data: created,
          message: "Your message was saved but there was an issue with the email notification"
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
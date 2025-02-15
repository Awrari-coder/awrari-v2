import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { setupAuth } from "./auth";
import { log } from "./vite";
import { sendInquiryNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);

  // Protected route - only accessible to authenticated users
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

  // Public route - accessible to everyone
  app.post("/api/inquiries", async (req, res) => {
    log(`Received inquiry submission: ${JSON.stringify(req.body)}`);

    try {
      const inquiry = insertInquirySchema.parse(req.body);
      log(`Validation passed for inquiry from ${inquiry.email}`);

      const created = await storage.createInquiry(inquiry);
      log(`Successfully created inquiry for ${created.email}`);

      // Send email notification
      const emailSent = await sendInquiryNotification(inquiry);
      if (!emailSent) {
        log('Failed to send email notification');
        // Don't return error to client, as the inquiry was still saved
      }

      res.json(created);
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessage = err.errors[0].message;
        log(`Validation error in inquiry submission: ${errorMessage}`);
        res.status(400).json({ message: errorMessage });
      } else {
        log(`Error creating inquiry: ${err}`);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
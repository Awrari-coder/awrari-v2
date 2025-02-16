import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.enum(["digital-marketing", "branding-design", "web-ai-solutions"], {
    errorMap: () => ({ message: "Please select a service" })
  })
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
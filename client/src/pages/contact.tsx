import ContactSection from "@/components/contact-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20"> {/* Adding padding to account for the fixed header */}
        <ContactSection />
      </div>
    </div>
  );
}

import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
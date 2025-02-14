import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MonitorSmartphone, BarChart3, Database, ArrowRight } from "lucide-react";
import { stagger, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Digital Marketing & Growth",
    description: "Boost your online presence with our comprehensive digital marketing solutions.",
    features: [
      "SEO Optimization & Analysis Reports",
      "Social Media Marketing & Advertising",
      "Community Management",
      "Email Marketing Campaigns",
      "Content Strategy & AI-Powered Blogging"
    ],
    cta: "Optimize My Digital Presence"
  },
  {
    icon: BarChart3,
    title: "Branding & Creative Design",
    description: "Create a memorable brand identity with our expert design services.",
    features: [
      "Graphic Design & Illustration",
      "Custom Brand Illustrations",
      "Professional Presentation Design",
      "Video Marketing & Production"
    ],
    cta: "Create My Brand Identity"
  },
  {
    icon: Database,
    title: "Web & AI-Powered Solutions",
    description: "Build powerful digital platforms with cutting-edge technology.",
    features: [
      "Website Design & Development",
      "E-Commerce Solutions",
      "AI & Chatbot Integration",
      "Digital Presence Optimization",
      "Smart Business Automation"
    ],
    cta: "Build My Website"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern age.
          </p>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
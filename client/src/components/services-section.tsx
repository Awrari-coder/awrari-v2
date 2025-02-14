import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Layers, Trophy, Rocket, ArrowRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const services = [
  {
    icon: Trophy,
    title: "Digital Marketing & Growth",
    description: "Boost your online presence with our comprehensive digital marketing solutions.",
    features: [
      "SEO Optimization & Analysis Reports",
      "Social Media Marketing & Advertising",
      "Community Management",
      "Email Marketing Campaigns",
      "Content Strategy & AI-Powered Blogging"
    ],
    cta: "Optimize My Digital Presence",
    href: "#contact",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="marketingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M10,30 Q50,10 90,30 T90,70 Q50,90 10,70 T10,30" 
              fill="url(#marketingGrad)" 
              className="text-primary"
        />
      </svg>
    )
  },
  {
    icon: Layers,
    title: "Branding & Creative Design",
    description: "Create a memorable brand identity with our expert design services.",
    features: [
      "Graphic Design & Illustration",
      "Custom Brand Illustrations",
      "Professional Presentation Design",
      "Video Marketing & Production"
    ],
    cta: "Create My Brand Identity",
    href: "#contact",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="brandingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="60" height="60" 
              transform="rotate(45 50 50)" 
              fill="url(#brandingGrad)" 
              className="text-primary"
        />
      </svg>
    )
  },
  {
    icon: Rocket,
    title: "Web & AI-Powered Solutions",
    description: "Build powerful digital platforms with cutting-edge technology.",
    features: [
      "Website Design & Development",
      "E-Commerce Solutions",
      "AI & Chatbot Integration",
      "Digital Presence Optimization",
      "Smart Business Automation"
    ],
    cta: "Build My Website",
    href: "#contact",
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <polygon points="50,10 90,50 50,90 10,50" 
                fill="url(#techGrad)" 
                className="text-primary"
        />
      </svg>
    )
  }
];

export default function ServicesSection() {
  const [, setLocation] = useLocation();

  const handleServiceClick = (href: string, service: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setLocation(`${href}?service=${encodeURIComponent(service)}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col group">
                <CardHeader className="flex-none">
                  <div className="relative h-32 flex items-center justify-center mb-4">
                    {service.bgPattern}
                    <service.icon className="w-16 h-16 text-primary relative z-10 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl text-center mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-center text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-auto group/btn"
                    onClick={() => handleServiceClick(service.href, service.title)}
                  >
                    <span className="mx-auto flex items-center gap-2">
                      {service.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
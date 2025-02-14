import { motion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart3, Palette, Code } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Digital Marketing & Growth",
      description: "Data-driven strategies to elevate your brand visibility and engagement.",
      features: [
        "SEO & Analytics",
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns"
      ],
      cta: "Start Growing",
      icon: BarChart3,
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
          <circle cx="50" cy="50" r="35" className="fill-primary/5" />
          <circle cx="50" cy="50" r="25" className="fill-primary/3" />
        </svg>
      )
    },
    {
      title: "Branding & Design",
      description: "Create a memorable brand identity that resonates with your audience.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Custom Graphics",
        "Marketing Materials"
      ],
      cta: "Build Your Brand",
      icon: Palette,
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="70" height="70" fill="url(#grad2)" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" className="fill-primary/5" transform="rotate(45 50 50)" />
          <rect x="35" y="35" width="30" height="30" className="fill-primary/3" transform="rotate(45 50 50)" />
        </svg>
      )
    },
    {
      title: "Web & AI Solutions",
      description: "Build powerful platforms with cutting-edge technology.",
      features: [
        "Custom Development",
        "AI Integration",
        "E-Commerce",
        "Cloud Solutions"
      ],
      cta: "Get Started",
      icon: Code,
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="url(#grad3)" />
          <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" className="fill-primary/5" />
          <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" className="fill-primary/3" />
        </svg>
      )
    }
  ];

  const handleContactClick = (service: string) => {
    setLocation(`/#contact?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideUp} className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to elevate your business
          </p>
        </motion.div>

        <motion.div 
          variants={stagger} 
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-32 relative -mt-2 mb-4 group">
                    <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                      {service.bgPattern}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-primary/80 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-4"
                    onClick={() => handleContactClick(service.title)}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
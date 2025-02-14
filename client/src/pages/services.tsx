import { motion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
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
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="45" className="fill-primary/10" />
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
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="10" y="10" width="80" height="80" className="fill-primary/10" transform="rotate(45 50 50)" />
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
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" className="fill-primary/10" />
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
                  <div className="h-32 relative -mt-2 mb-4">
                    <div className="absolute inset-0 opacity-75">
                      {service.bgPattern}
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
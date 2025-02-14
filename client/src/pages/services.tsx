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
      description: "Elevate your brand visibility and drive engagement through data-driven digital marketing strategies.",
      features: [
        "SEO & Analytics",
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "Performance Tracking"
      ],
      cta: "Start Growing",
      bgPattern: (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="45" className="fill-primary/10" />
        </svg>
      )
    },
    {
      title: "Branding & Creative Design",
      description: "Create a memorable brand identity that resonates with your audience and sets you apart.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Custom Graphics",
        "Marketing Materials",
        "Brand Guidelines"
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
      description: "Build powerful digital platforms with cutting-edge technology and AI integration.",
      features: [
        "Custom Development",
        "AI Integration",
        "E-Commerce",
        "Cloud Solutions",
        "Performance Optimization"
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
        className="container mx-auto px-4 py-20"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideUp} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to elevate your business
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-gray-600 text-lg">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={() => handleContactClick(service.title)}
                  className="mt-6"
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <Card className={`h-full relative overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <CardContent className="relative p-0 h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="absolute inset-0 w-full h-full opacity-75">
                    {service.bgPattern}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
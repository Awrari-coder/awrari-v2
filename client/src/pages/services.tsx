import { motion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, BarChart3, Database, ArrowRight, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: MonitorSmartphone,
      title: "Digital Marketing & Growth",
      description: "Boost your online presence with our comprehensive digital marketing solutions.",
      detailedDescription: "Our digital marketing experts leverage cutting-edge strategies to enhance your brand visibility and drive meaningful engagement. We combine data-driven insights with creative excellence to deliver results that matter.",
      features: [
        "SEO Optimization & Analysis Reports",
        "Social Media Marketing & Advertising",
        "Community Management",
        "Email Marketing Campaigns",
        "Content Strategy & AI-Powered Blogging"
      ],
      benefits: [
        "Increased online visibility",
        "Higher conversion rates",
        "Improved brand awareness",
        "Better customer engagement",
        "Data-driven decision making"
      ],
      cta: "Get Started with Digital Marketing",
      bgPattern: (
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" className="fill-primary/20" />
          <circle cx="50" cy="50" r="20" className="fill-primary/30" />
          <circle cx="50" cy="50" r="10" className="fill-primary/40" />
        </svg>
      )
    },
    {
      icon: BarChart3,
      title: "Branding & Creative Design",
      description: "Create a memorable brand identity with our expert design services.",
      detailedDescription: "Transform your brand with our creative design expertise. We craft unique visual identities that resonate with your audience and set you apart from the competition.",
      features: [
        "Brand Strategy Development",
        "Visual Identity Design",
        "Custom Brand Illustrations",
        "Professional Presentation Design",
        "Video Marketing & Production"
      ],
      benefits: [
        "Distinctive brand identity",
        "Professional market presence",
        "Consistent brand messaging",
        "Enhanced brand recognition",
        "Improved customer trust"
      ],
      cta: "Start Brand Transformation",
      bgPattern: (
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" className="fill-primary/20" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" className="fill-primary/30" transform="rotate(45 50 50)" />
          <rect x="40" y="40" width="20" height="20" className="fill-primary/40" transform="rotate(45 50 50)" />
        </svg>
      )
    },
    {
      icon: Database,
      title: "Web & AI-Powered Solutions",
      description: "Build powerful digital platforms with cutting-edge technology.",
      detailedDescription: "Leverage the power of modern web technologies and artificial intelligence to create exceptional digital experiences. Our solutions are built for performance, scalability, and innovation.",
      features: [
        "Custom Website Development",
        "E-Commerce Solutions",
        "AI & Chatbot Integration",
        "Digital Presence Optimization",
        "Smart Business Automation"
      ],
      benefits: [
        "Enhanced user experience",
        "Improved operational efficiency",
        "Scalable digital infrastructure",
        "Advanced analytics capabilities",
        "Future-proof technology stack"
      ],
      cta: "Build Your Digital Platform",
      bgPattern: (
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <polygon points="50,20 80,40 80,80 50,100 20,80 20,40" className="fill-primary/20" />
          <polygon points="50,30 70,45 70,75 50,90 30,75 30,45" className="fill-primary/30" />
          <polygon points="50,40 60,50 60,70 50,80 40,70 40,50" className="fill-primary/40" />
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
            Comprehensive digital solutions tailored to elevate your business in the modern age.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-block p-3 bg-primary/10 rounded-2xl">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-gray-600 text-lg">{service.detailedDescription}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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
                <CardContent className="p-6 aspect-square flex items-center justify-center">
                  {service.bgPattern}
                  <service.icon className="w-48 h-48 text-primary absolute" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
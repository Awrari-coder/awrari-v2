import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MonitorSmartphone, BarChart3, Database } from "lucide-react";
import { stagger, fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions that drive growth and efficiency."
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Make data-driven decisions with our advanced analytics and reporting solutions."
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description: "Scale your infrastructure with secure and reliable cloud computing services."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age.
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
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

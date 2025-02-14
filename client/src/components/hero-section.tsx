import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Awrari Business and Marketing Solutions
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-600 mb-8"
          >
            Transform your brand with cutting-edge digital solutions. From marketing to AI integration, we provide everything you need to grow and scale your business.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg">
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import AnimatedBackground from "./animated-background";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Crafting Digital Excellence, One Brand at a Time.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-600 mb-8"
          >
            Your all-in-one solution for Digital Marketing, Branding, Web Development, and AI-powered business transformation.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <span className="text-gray-600">✅ Proven Expertise</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-600">✅ Data-Driven Strategies</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-600">✅ Creative Excellence</span>
          </motion.div>

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
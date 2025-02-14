import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Awrari transformed our digital presence completely. Their strategic approach to marketing and web development helped us achieve a 150% increase in online leads.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFront Solutions",
  },
  {
    quote: "The AI-powered solutions implemented by Awrari streamlined our customer service operations, reducing response times by 60% while maintaining high satisfaction rates.",
    author: "Michael Rodriguez",
    role: "Operations Director",
    company: "Global Retail Corp",
  },
  {
    quote: "Their branding expertise helped us stand out in a crowded market. The new visual identity they created perfectly captures our company's values and vision.",
    author: "Emily Thompson",
    role: "Marketing Manager",
    company: "Innovate Labs",
  },
  {
    quote: "Working with Awrari was a game-changer for our business. Their data-driven approach to digital marketing delivered measurable results within months.",
    author: "David Park",
    role: "Founder",
    company: "StartUp Dynamics",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve their digital goals and transform their online presence.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={fadeIn}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="text-gray-600 mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

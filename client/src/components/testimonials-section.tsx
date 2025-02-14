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
    quote: "Awrari transformed our customer engagement strategy. Their innovative digital solutions helped us modernize our perks platform and increase user satisfaction by 85%.",
    author: "Samuel Dereb",
    role: "Marketing Director",
    company: "Universal Perks IT Solutions",
  },
  {
    quote: "The real estate market demands a strong digital presence, and Awrari delivered exactly that. Their web development and AI integration helped us streamline property listings and improve client interactions.",
    author: "Samuel Sholib",
    role: "CEO",
    company: "Elshadia Realestate Group",
  },
  {
    quote: "Our fashion brand needed a distinctive online identity, and Awrari exceeded our expectations. Their branding expertise and e-commerce solutions boosted our online sales significantly.",
    author: "Sarah Williams",
    role: "Creative Director",
    company: "Toggle and Wear Fashion Design",
  }
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
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped leading businesses transform their digital presence and achieve remarkable growth.
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
                    <Card className="h-full hover:shadow-lg transition-shadow">
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
                          <p className="text-sm text-primary font-medium">
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
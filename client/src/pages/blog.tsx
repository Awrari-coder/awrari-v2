import { motion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "10 Digital Transformation Trends Reshaping Business in 2025",
      date: "February 14, 2025",
      readTime: "5 min read",
      excerpt: "Discover the latest digital transformation trends that are revolutionizing how businesses operate. From AI integration to cloud solutions, learn what's driving change in today's digital landscape.",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format",
    },
    {
      title: "Maximizing ROI with Data-Driven Marketing Strategies",
      date: "February 12, 2025",
      readTime: "7 min read",
      excerpt: "Learn how to leverage data analytics and AI to create marketing campaigns that deliver measurable results. Explore real-world case studies and practical implementation strategies.",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
    },
    {
      title: "The Essential Guide to Modern Branding in the Digital Age",
      date: "February 10, 2025",
      readTime: "6 min read",
      excerpt: "Navigate the complexities of building a strong brand identity in today's digital world. From visual design to voice and tone, discover what makes brands stand out.",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&auto=format",
    },
    {
      title: "AI-Powered Customer Service: The Future of Business Communication",
      date: "February 8, 2025",
      readTime: "4 min read",
      excerpt: "Explore how artificial intelligence is transforming customer service operations. Learn about chatbots, automation, and maintaining the human touch in digital interactions.",
      category: "AI Solutions",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format",
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <motion.div 
        className="container mx-auto px-4 py-12"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={slideUp} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Latest Insights & Industry Trends
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with our latest thoughts on digital transformation, marketing strategies, and business innovation.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{post.category}</span>
                    <Button variant="ghost" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
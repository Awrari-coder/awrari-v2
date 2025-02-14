import { motion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "@/lib/animations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const sections = [
    {
      title: "Digital Marketing & Growth",
      icon: "📈",
      items: [
        "SEO Optimization – Rank higher on search engines and drive organic traffic",
        "SEO Analysis Reports – Gain insights into your website's performance",
        "Social Media Optimization (SMO) – Engage with your audience",
        "Social Media Advertising – Drive targeted traffic",
        "Community Management – Build and nurture a loyal customer base",
        "Email Marketing – Create high-converting email campaigns",
        "Content Strategy – Develop a winning content plan",
        "Automated Blog Services – Let AI handle your blog updates"
      ]
    },
    {
      title: "Branding & Creative Design",
      icon: "🎨",
      items: [
        "Graphic Design & Illustration – Stunning visuals that bring your brand to life",
        "Custom Illustration – Unique artwork tailored to your brand identity",
        "Presentation Design – Professionally designed slides",
        "Video Marketing – High-quality video production"
      ]
    },
    {
      title: "Web & AI-Powered Solutions",
      icon: "🌐",
      items: [
        "Website Design & Development – Custom-built, high-performance websites",
        "E-Commerce Development – Scalable online stores with payment integration",
        "AI Integration – Smart automation for increased efficiency",
        "AI Voice & Chatbot Integration – Automated customer support",
        "Digital Presence Optimization – Comprehensive brand visibility"
      ]
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
            Unlock Your Business Potential with Our Digital Solutions
          </h1>
          <p className="text-xl text-gray-600">
            In today's fast-paced world, your business needs more than just an online presence—it needs to stand out, engage, and grow.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="space-y-12">
          {sections.map((section, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{section.icon}</span>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">🔹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="font-bold mb-2">✅ Clarity</p>
              <p>We simplify digital solutions, making them easy to understand and implement.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="font-bold mb-2">✅ Excellence</p>
              <p>Every project is executed with precision and high-quality standards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="font-bold mb-2">✅ Certainty</p>
              <p>We provide results-driven strategies that ensure success.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

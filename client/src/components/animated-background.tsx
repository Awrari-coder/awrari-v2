import { motion } from "framer-motion";
import {
  SiGoogleanalytics,
  SiAdobecreativecloud,
  SiOpenai,
  SiAmazon,
  SiGooglecloud,
  SiFacebook,
  SiLinkedin,
  SiMailchimp,
  SiShopify,
  SiWordpress,
  SiWix,
  SiGithub,
  SiAsana,
  SiTrello,
  SiHubspot
} from "react-icons/si";

const icons = [
  SiGoogleanalytics,
  SiAdobecreativecloud,
  SiOpenai,
  SiAmazon,
  SiGooglecloud,
  SiFacebook,
  SiLinkedin,
  SiMailchimp,
  SiShopify,
  SiWordpress,
  SiWix,
  SiGithub,
  SiAsana,
  SiTrello,
  SiHubspot
];

// Create 20 random icon positions focused more in the center area
const iconElements = Array.from({ length: 20 }, (_, i) => ({
  Icon: icons[i % icons.length],
  position: {
    // Position icons in a wider area around the content
    x: 20 + Math.random() * 60, // position between 20-80% of width
    y: 10 + Math.random() * 80, // position between 10-90% of height
    scale: 0.6 + Math.random() * 0.4, // Slightly larger icons
  },
  duration: 6 + Math.random() * 8, // Even faster animations for more dynamic feel
  delay: Math.random() * -15,
}));

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {iconElements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/5"
          style={{
            left: `${item.position.x}%`,
            top: `${item.position.y}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 3, -3, 0],
            scale: [item.position.scale, item.position.scale * 1.15, item.position.scale],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: item.delay,
          }}
        >
          <item.Icon 
            className={`w-12 h-12 md:w-16 md:h-16 ${
              index % 2 === 0 ? "text-primary/[0.07]" : "text-primary/[0.05]"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
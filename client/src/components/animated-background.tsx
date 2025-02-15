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

// Create 20 random icon positions
const iconElements = Array.from({ length: 20 }, (_, i) => ({
  Icon: icons[i % icons.length],
  position: {
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
  },
  duration: 20 + Math.random() * 30,
  delay: Math.random() * -30,
}));

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {iconElements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/5"
          style={{
            left: `${item.position.x}%`,
            top: `${item.position.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            scale: [item.position.scale, item.position.scale * 1.2, item.position.scale],
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
              index % 2 === 0 ? "text-primary/[0.03]" : "text-primary/[0.02]"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
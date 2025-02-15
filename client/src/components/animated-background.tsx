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

// Create shapes for background
const shapes = [
  // Circle
  <circle cx="10" cy="10" r="8" className="fill-current" />,
  // Square
  <rect width="16" height="16" x="2" y="2" className="fill-current" />,
  // Triangle
  <polygon points="10,2 18,18 2,18" className="fill-current" />,
  // Pentagon
  <polygon points="10,2 18,8 15,18 5,18 2,8" className="fill-current" />,
  // Hexagon
  <polygon points="10,2 18,7 18,15 10,20 2,15 2,7" className="fill-current" />
];

// Create a mix of icons and shapes with strategic positioning
const elements = [
  ...Array.from({ length: 15 }, (_, i) => ({
    type: 'icon',
    Icon: icons[i % icons.length],
    x: 15 + (i % 5) * 20, // Evenly space horizontally
    y: 20 + Math.floor(i / 5) * 25, // Evenly space vertically
    scale: 0.7 + Math.random() * 0.3,
    rotate: Math.random() * 20 - 10 // Slight random rotation
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    type: 'shape',
    shape: shapes[i % shapes.length],
    x: 10 + (i % 3) * 30, // Different spacing for shapes
    y: 30 + Math.floor(i / 3) * 20,
    scale: 0.5 + Math.random() * 0.2,
    rotate: Math.random() * 30 - 15
  }))
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -8, 0],
            x: [0, 5, 0],
            rotate: [item.rotate, item.rotate + 5, item.rotate],
            scale: [
              item.scale,
              item.scale * 1.1,
              item.scale
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        >
          {item.type === 'icon' ? (
            <item.Icon 
              className={`w-12 h-12 md:w-16 md:h-16 text-primary 
                ${index % 2 === 0 ? 'opacity-[0.12]' : 'opacity-[0.08]'}`}
            />
          ) : (
            <svg 
              viewBox="0 0 20 20" 
              className={`w-8 h-8 md:w-12 md:h-12 text-primary
                ${index % 2 === 0 ? 'opacity-[0.10]' : 'opacity-[0.08]'}`}
            >
              {item.shape}
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
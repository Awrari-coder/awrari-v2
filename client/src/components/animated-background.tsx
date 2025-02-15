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

// Create a mix of icons and shapes with their starting positions
const elements = [
  ...Array.from({ length: 15 }, (_, i) => ({
    type: 'icon',
    Icon: icons[i % icons.length],
    initialY: 100 + Math.random() * 50, // Start below viewport
    x: 10 + Math.random() * 80,
    scale: 0.6 + Math.random() * 0.4,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    type: 'shape',
    shape: shapes[i % shapes.length],
    initialY: 100 + Math.random() * 50, // Start below viewport
    x: 10 + Math.random() * 80,
    scale: 0.4 + Math.random() * 0.3,
    duration: 12 + Math.random() * 18,
    delay: Math.random() * -20
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
            top: `${item.initialY}%`,
          }}
          animate={{
            y: [0, `-${item.initialY + 20}%`], // Move up by more than 100% to ensure elements go off-screen
            rotate: [0, item.type === 'shape' ? 180 : 0], // Rotate shapes but not icons
            scale: [
              item.scale,
              item.scale * (item.type === 'shape' ? 1.3 : 1.15),
              item.scale
            ],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: item.delay,
            times: [0, 1], // Smooth upward motion
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
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
import type { IconType } from 'react-icons';

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

type AnimatedElement = {
  type: 'icon' | 'shape';
  Icon?: IconType;
  shape?: JSX.Element;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  delay: number;
};

// Create a mix of icons and shapes with strategic positioning
const elements: AnimatedElement[] = [
  // Icons spread across the hero section
  ...Array.from({ length: 15 }, (_, i) => ({
    type: 'icon' as const,
    Icon: icons[i % icons.length],
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
    scale: 0.6 + Math.random() * 0.3,
    rotate: Math.random() * 360,
    delay: i * 0.2
  })),
  // Shapes spread across the hero section
  ...Array.from({ length: 10 }, (_, i) => ({
    type: 'shape' as const,
    shape: shapes[i % shapes.length],
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
    scale: 0.4 + Math.random() * 0.2,
    rotate: Math.random() * 360,
    delay: (i + 15) * 0.2
  }))
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary"
          initial={{ 
            opacity: 0,
            x: `${item.x}%`,
            y: `${item.y}%`,
            scale: 0,
            rotate: item.rotate - 20
          }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            y: [
              `${item.y}%`,
              `${item.y - 2}%`,
              `${item.y + 2}%`,
              `${item.y - 1}%`,
              `${item.y - 5}%`
            ],
            x: [
              `${item.x}%`,
              `${item.x + 2}%`,
              `${item.x - 2}%`,
              `${item.x + 1}%`,
              `${item.x}%`
            ],
            rotate: [
              item.rotate - 20,
              item.rotate,
              item.rotate + 10,
              item.rotate - 10,
              item.rotate
            ],
            scale: [0, item.scale, item.scale * 1.1, item.scale, 0],
          }}
          transition={{
            duration: 20,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 10,
            ease: "easeInOut",
          }}
        >
          {item.type === 'icon' && item.Icon ? (
            <item.Icon 
              className={`w-12 h-12 md:w-16 md:h-16 text-primary 
                ${index % 2 === 0 ? 'opacity-[0.08]' : 'opacity-[0.06]'}`}
            />
          ) : (
            <svg 
              viewBox="0 0 20 20" 
              className={`w-8 h-8 md:w-12 md:h-12 text-primary
                ${index % 2 === 0 ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}
            >
              {item.shape}
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
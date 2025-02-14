import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12"
};

export default function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        viewBox="0 0 160 40"
        className={cn("text-primary", sizeClasses[size])}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Digital Wave Background */}
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="circle-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Background Wave Pattern */}
        <path
          d="M10 25C15 25 15 15 20 15C25 15 25 25 30 25C35 25 35 15 40 15"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          fill="none"
        />

        {/* Main Icon */}
        <g transform="translate(5, 5)">
          {/* Outer Circle */}
          <circle
            cx="20"
            cy="15"
            r="15"
            fill="url(#circle-gradient)"
            className="transform origin-center transition-transform group-hover:scale-105"
          />

          {/* Inner Elements */}
          <path
            d="M12 15C16 15 16 8 20 8C24 8 24 15 28 15C32 15 32 8 36 8"
            className="stroke-primary"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          <circle
            cx="20"
            cy="15"
            r="8"
            className="fill-primary/10"
          />

          <circle
            cx="20"
            cy="15"
            r="4"
            className="fill-primary/20"
          />
        </g>

        {/* Text */}
        <text
          x="50"
          y="25"
          className="fill-current font-bold text-2xl"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Awrari
        </text>

        {/* Tagline */}
        <text
          x="51"
          y="35"
          className="fill-current text-[10px] font-medium opacity-75"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Digital Solutions
        </text>
      </svg>
    </div>
  );
}
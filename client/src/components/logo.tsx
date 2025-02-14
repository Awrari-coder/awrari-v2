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
        viewBox="0 0 120 40"
        className={cn("text-primary", sizeClasses[size])}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract Digital Wave Shape */}
        <path
          d="M20 30C12 30 8 25 8 20C8 15 12 10 20 10C28 10 32 15 32 20C32 25 28 30 20 30Z"
          className="fill-primary"
          fillOpacity="0.2"
        />
        <path
          d="M20 26C14 26 12 23 12 20C12 17 14 14 20 14C26 14 28 17 28 20C28 23 26 26 20 26Z"
          className="fill-primary"
          fillOpacity="0.4"
        />
        <path
          d="M20 22C17 22 16 21 16 20C16 19 17 18 20 18C23 18 24 19 24 20C24 21 23 22 20 22Z"
          className="fill-primary"
        />
        
        {/* Awrari Text */}
        <text
          x="45"
          y="26"
          className="fill-current font-bold text-[18px]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Awrari
        </text>
      </svg>
    </div>
  );
}

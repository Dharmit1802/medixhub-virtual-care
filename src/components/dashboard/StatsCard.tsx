
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  "relative overflow-hidden rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800",
        glass: "glass-card",
        colored: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    positive?: boolean;
  };
  variant?: "default" | "glass" | "colored";
  className?: string;
  color?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon,
  trend,
  variant,
  className,
  color = "bg-medical-500",
}: StatsCardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant }),
        variant === "colored" && color,
        "card-hover",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={cn(
            "text-sm font-medium",
            variant === "colored" ? "text-white/90" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </h3>
          {description && (
            <p className={cn(
              "mt-1 text-xs",
              variant === "colored" ? "text-white/80" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
          {trend && (
            <p className={cn(
              "mt-2 text-xs font-medium flex items-center gap-1",
              trend.positive ? "text-success" : "text-danger",
              variant === "colored" && (trend.positive ? "text-white" : "text-white")
            )}>
              {trend.positive ? "↑" : "↓"} {Math.abs(trend.value)}%
              <span className={variant === "colored" ? "text-white/70" : "text-muted-foreground"}>vs last month</span>
            </p>
          )}
        </div>
        <div className={cn(
          "rounded-lg p-2",
          variant === "colored" ? "bg-white/20" : "bg-medical-100 dark:bg-medical-900/30"
        )}>
          {icon}
        </div>
      </div>
      
      {/* Decorative elements */}
      {variant === "colored" && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        </>
      )}
    </div>
  );
}

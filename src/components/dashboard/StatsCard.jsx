
import { React } from "react";
import { cn } from "@/lib/utils";

// Replace TypeScript interface with JSDoc comment
/**
 * @typedef {Object} StatsCardProps
 * @property {string} title
 * @property {string|number} value
 * @property {React.ReactNode} icon
 * @property {{value: number, positive: boolean}} [trend]
 * @property {string} [className]
 */

/**
 * @param {StatsCardProps} props 
 */
export function StatsCard({ title, value, icon, trend, className }) {
  return (
    <div className={cn("stats-card", className)}>
      <div className="flex justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="bg-primary/10 p-2 rounded-lg">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <span
            className={cn(
              "text-xs font-medium",
              trend.positive ? "text-green-500" : "text-red-500"
            )}
          >
            {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
          </span>
          <span className="ml-1 text-xs text-muted-foreground">from last month</span>
        </div>
      )}
    </div>
  );
}

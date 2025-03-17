import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function EmergencyStatus({ className }) {
  // Simulation data for emergency room status
  const [waitTime, setWaitTime] = useState(42);
  const [occupancy, setOccupancy] = useState(68);
  const [patientsPredicted, setPatientsPredicted] = useState(14);
  const [trend, setTrend] = useState("increasing");

  // Simulate changing data
  useEffect(() => {
    const interval = setInterval(() => {
      // Random fluctuations
      setWaitTime((prev) =>
        Math.max(10, Math.min(120, prev + Math.floor(Math.random() * 11) - 5))
      );
      setOccupancy((prev) =>
        Math.max(30, Math.min(95, prev + Math.floor(Math.random() * 7) - 3))
      );
      setPatientsPredicted((prev) =>
        Math.max(5, Math.min(30, prev + Math.floor(Math.random() * 5) - 2))
      );

      const trends = ["increasing", "decreasing", "stable"];
      setTrend(trends[Math.floor(Math.random() * 3)]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border",
        occupancy >= 80
          ? "border-red-300 dark:border-red-900"
          : occupancy >= 50
          ? "border-amber-300 dark:border-amber-900"
          : "border-green-300 dark:border-green-900",
        className
      )}
    >
      <div
        className={cn(
          "py-3 px-4 text-white font-medium flex items-center justify-between",
          occupancy >= 80
            ? "bg-danger"
            : occupancy >= 50
            ? "bg-warning"
            : "bg-success"
        )}
      >
        <span>Emergency Room Status</span>
        <span className={cn("text-xs px-2 py-0.5 rounded-full", "bg-white/30")}>
          Live
        </span>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Wait Time</p>
            <p className="text-xl font-bold">{waitTime} min</p>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">Occupancy</p>
            <p className="text-xl font-bold">{occupancy}%</p>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">Incoming</p>
            <p className="text-xl font-bold">{patientsPredicted}</p>
            <p className="text-xs text-muted-foreground">patients predicted</p>
          </div>
        </div>

        <div className="rounded-lg p-3 bg-gray-50 dark:bg-gray-900">
          <p className="text-sm font-medium">AI Prediction:</p>
          <p className="text-xs text-muted-foreground">
            {trend === "increasing"
              ? "Patient volume is expected to increase in the next 2 hours. Consider allocating additional staff."
              : trend === "decreasing"
              ? "Patient volume is expected to decrease. Current staffing should be sufficient."
              : "Patient volume is expected to remain stable."}
          </p>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const generateWeekSchedule = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);

  return days.map((day, index) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + index);

    const dateStr = date.getDate().toString().padStart(2, "0");
    const eventCount = Math.floor(Math.random() * 4) + (index < 5 ? 2 : 0);

    const events = [];

    for (let i = 0; i < eventCount; i++) {
      const hour = 9 + Math.floor(Math.random() * 8);
      const minute = Math.random() > 0.5 ? "00" : "30";
      const eventTypes = ["appointment", "meeting", "break"];
      const type = eventTypes[Math.floor(Math.random() * (i === 0 ? 1 : 3))];

      events.push({
        id: `event-${index}-${i}`,
        title:
          type === "appointment"
            ? "Patient Visit"
            : type === "meeting"
            ? "Staff Meeting"
            : "Lunch Break",
        time: `${hour}:${minute}`,
        type,
        patientName:
          type === "appointment"
            ? [
                "Emma Watson",
                "James Smith",
                "Lisa Brown",
                "Michael Davis",
                "Sarah Johnson",
              ][Math.floor(Math.random() * 5)]
            : undefined,
      });
    }

    events.sort((a, b) => {
      const timeA = a.time.split(":").map(Number);
      const timeB = b.time.split(":").map(Number);

      if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];
      return timeA[1] - timeB[1];
    });

    return {
      date: dateStr,
      dayName: day,
      events,
    };
  });
};

export function DoctorSchedule() {
  const [weekSchedule, setWeekSchedule] = useState(generateWeekSchedule());
  const [currentWeek, setCurrentWeek] = useState(0);

  const goToPreviousWeek = () => {
    setCurrentWeek((prev) => prev - 1);
    setWeekSchedule(generateWeekSchedule());
  };

  const goToNextWeek = () => {
    setCurrentWeek((prev) => prev + 1);
    setWeekSchedule(generateWeekSchedule());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">
          Weekly Schedule
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousWeek}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">Week {currentWeek + 1}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextWeek}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-2">
        {weekSchedule.map((day) => (
          <div key={day.dayName} className="min-w-24 w-full">
            <div className="text-center mb-2">
              <p className="text-xs font-medium text-muted-foreground">
                {day.dayName}
              </p>
              <p className="text-sm font-bold">{day.date}</p>
            </div>

            <div className="space-y-1.5">
              {day.events.length === 0 ? (
                <div className="bg-gray-50 dark:bg-gray-900 rounded p-2 text-center">
                  <p className="text-xs text-muted-foreground">No events</p>
                </div>
              ) : (
                day.events.map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      "rounded-md p-2 text-xs",
                      event.type === "appointment"
                        ? "bg-medical-100 dark:bg-medical-900/30 text-medical-800 dark:text-medical-200"
                        : event.type === "meeting"
                        ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    )}
                  >
                    <p className="font-medium">{event.time}</p>
                    <p className="font-medium truncate">{event.title}</p>
                    {event.patientName && (
                      <p className="text-xs truncate opacity-80">
                        {event.patientName}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

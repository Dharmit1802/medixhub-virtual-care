
import { Calendar, Clock, User, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  time: string;
  date: string;
  location: string;
  status: "upcoming" | "completed" | "cancelled";
  type: string;
}

interface AppointmentsListProps {
  appointments: Appointment[];
  title?: string;
  className?: string;
  limit?: number;
}

export function AppointmentsList({
  appointments,
  title = "Upcoming Appointments",
  className,
  limit = 5,
}: AppointmentsListProps) {
  const displayAppointments = appointments.slice(0, limit);

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      
      <div className="space-y-3">
        {displayAppointments.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-6">
            No appointments found
          </p>
        ) : (
          displayAppointments.map((appointment) => (
            <div 
              key={appointment.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm px-4 py-3 transition-all hover:shadow-md card-hover"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-2 h-10 rounded-full",
                    appointment.status === "upcoming" ? "bg-medical-500" : 
                    appointment.status === "completed" ? "bg-success" : "bg-gray-300"
                  )} />
                  <div>
                    <p className="font-medium">{appointment.patientName}</p>
                    <p className="text-xs text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <div className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  appointment.status === "upcoming" ? "bg-medical-100 text-medical-700" : 
                  appointment.status === "completed" ? "bg-green-100 text-green-700" : 
                  "bg-gray-100 text-gray-700"
                )}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </div>
              </div>
              
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>Dr. {appointment.doctorName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{appointment.location}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {appointments.length > limit && (
        <button className="text-sm text-medical-500 hover:text-medical-600 hover:underline w-full text-center py-2">
          View all appointments
        </button>
      )}
    </div>
  );
}

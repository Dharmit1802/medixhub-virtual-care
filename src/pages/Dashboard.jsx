import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard.jsx";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";
import { DoctorSchedule } from "@/components/dashboard/DoctorSchedule";
import { EmergencyStatus } from "@/components/dashboard/EmergencyStatus";
import {
  CalendarCheck,
  Users,
  Building2,
  Stethoscope,
  BedDouble,
  FileBarChart,
  Activity,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard({ userRole = "admin" }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const sampleAppointments = [
      {
        id: "1",
        patientName: "Emily Johnson",
        doctorName: "Robert Chen",
        time: "09:00 AM",
        date: "Today, Jun 15",
        location: "Room 305",
        status: "upcoming",
        type: "General Checkup",
      },
      {
        id: "2",
        patientName: "Michael Smith",
        doctorName: "Sarah Williams",
        time: "10:30 AM",
        date: "Today, Jun 15",
        location: "Room 210",
        status: "upcoming",
        type: "Cardiology",
      },
      {
        id: "3",
        patientName: "Jessica Brown",
        doctorName: "David Kim",
        time: "01:15 PM",
        date: "Tomorrow, Jun 16",
        location: "Room 102",
        status: "upcoming",
        type: "Dermatology",
      },
      {
        id: "4",
        patientName: "Daniel Lee",
        doctorName: "Robert Chen",
        time: "11:00 AM",
        date: "Jun 17",
        location: "Room 305",
        status: "upcoming",
        type: "Neurology",
      },
      {
        id: "5",
        patientName: "Olivia Garcia",
        doctorName: "Sarah Williams",
        time: "03:30 PM",
        date: "Jun 17",
        location: "Room 210",
        status: "upcoming",
        type: "Pediatrics",
      },
      {
        id: "6",
        patientName: "William Davis",
        doctorName: "David Kim",
        time: "09:45 AM",
        date: "Jun 18",
        location: "Room 102",
        status: "upcoming",
        type: "Orthopedics",
      },
    ];

    setAppointments(sampleAppointments);
  }, []);

  const renderAdminDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Patients"
          value="12,543"
          icon={<Users className="h-5 w-5 text-medical-500" />}
          trend={{ value: 8, positive: true }}
          variant="glass"
        />
        <StatsCard
          title="Daily Appointments"
          value="142"
          icon={<CalendarCheck className="h-5 w-5 text-medical-500" />}
          trend={{ value: 5, positive: true }}
          variant="glass"
        />
        <StatsCard
          title="Available Doctors"
          value="38"
          icon={<Stethoscope className="h-5 w-5 text-medical-500" />}
          trend={{ value: 2, positive: false }}
          variant="glass"
        />
        <StatsCard
          title="Bed Occupancy"
          value="76%"
          icon={<BedDouble className="h-5 w-5 text-medical-500" />}
          trend={{ value: 12, positive: true }}
          variant="glass"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-4">
              <DoctorSchedule />
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Department Performance
              </h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <FileBarChart className="h-12 w-12 text-gray-300" />
                <span className="ml-2 text-muted-foreground">
                  Chart Placeholder
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <EmergencyStatus />

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-4">
              <AppointmentsList
                appointments={appointments}
                title="Today's Appointments"
                limit={3}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );

  const roleTitle = {
    admin: "Administrator Dashboard",
    doctor: "Doctor Dashboard",
    patient: "Patient Dashboard",
    staff: "Staff Dashboard",
  };

  const renderDashboard = () => {
    switch (userRole) {
      case "admin":
        return renderAdminDashboard();
      default:
        return renderAdminDashboard();
    }
  };

  return (
    <AppLayout userRole={userRole}>
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {roleTitle[userRole]}
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {renderDashboard()}
      </div>
    </AppLayout>
  );
}

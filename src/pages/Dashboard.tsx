import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
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
  Activity
} from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface DashboardProps {
  userRole?: 'admin' | 'doctor' | 'patient' | 'staff';
}

export default function Dashboard({ userRole = 'admin' }: DashboardProps) {
  // Sample data for appointments
  const [appointments, setAppointments] = useState<any[]>([]);
  
  useEffect(() => {
    // Simulate fetching appointments
    const sampleAppointments = [
      {
        id: '1',
        patientName: 'Emily Johnson',
        doctorName: 'Robert Chen',
        time: '09:00 AM',
        date: 'Today, Jun 15',
        location: 'Room 305',
        status: 'upcoming',
        type: 'General Checkup'
      },
      {
        id: '2',
        patientName: 'Michael Smith',
        doctorName: 'Sarah Williams',
        time: '10:30 AM',
        date: 'Today, Jun 15',
        location: 'Room 210',
        status: 'upcoming',
        type: 'Cardiology'
      },
      {
        id: '3',
        patientName: 'Jessica Brown',
        doctorName: 'David Kim',
        time: '01:15 PM',
        date: 'Tomorrow, Jun 16',
        location: 'Room 102',
        status: 'upcoming',
        type: 'Dermatology'
      },
      {
        id: '4',
        patientName: 'Daniel Lee',
        doctorName: 'Robert Chen',
        time: '11:00 AM',
        date: 'Jun 17',
        location: 'Room 305',
        status: 'upcoming',
        type: 'Neurology'
      },
      {
        id: '5',
        patientName: 'Olivia Garcia',
        doctorName: 'Sarah Williams',
        time: '03:30 PM',
        date: 'Jun 17',
        location: 'Room 210',
        status: 'upcoming',
        type: 'Pediatrics'
      },
      {
        id: '6',
        patientName: 'William Davis',
        doctorName: 'David Kim',
        time: '09:45 AM',
        date: 'Jun 18',
        location: 'Room 102',
        status: 'upcoming',
        type: 'Orthopedics'
      }
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
              <h3 className="text-lg font-semibold tracking-tight mb-4">Department Performance</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <FileBarChart className="h-12 w-12 text-gray-300" />
                <span className="ml-2 text-muted-foreground">Chart Placeholder</span>
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
  
  const renderDoctorDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="My Patients"
          value="124"
          icon={<Users className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Today's Appointments"
          value="8"
          icon={<CalendarCheck className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Completed Appointments"
          value="1,248"
          icon={<Activity className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <DoctorSchedule />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <AppointmentsList 
            appointments={appointments} 
            title="Upcoming Appointments"
          />
        </div>
      </div>
    </>
  );
  
  const renderPatientDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="Upcoming Appointments"
          value="2"
          icon={<CalendarCheck className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Prescriptions"
          value="5"
          icon={<FileBarChart className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Medical Records"
          value="12"
          icon={<Activity className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <AppointmentsList 
            appointments={appointments.slice(0, 3)} 
            title="My Appointments"
          />
          
          {/* Quick Actions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold tracking-tight mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-medical-100 hover:bg-medical-200 text-medical-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                Book Appointment
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                View Medical Records
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                Request Prescription
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                Contact Doctor
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold tracking-tight mb-4">Health Summary</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Activity className="h-12 w-12 text-gray-300" />
            <span className="ml-2 text-muted-foreground">Chart Placeholder</span>
          </div>
        </div>
      </div>
    </>
  );
  
  const renderStaffDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard 
          title="Today's Patients"
          value="87"
          icon={<Users className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Appointments"
          value="42"
          icon={<CalendarCheck className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
        <StatsCard 
          title="Available Rooms"
          value="14"
          icon={<Building2 className="h-5 w-5 text-medical-500" />}
          variant="glass"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <DoctorSchedule />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <AppointmentsList 
              appointments={appointments} 
              title="Today's Appointments"
              limit={4}
            />
          </div>
          
          <EmergencyStatus />
        </div>
      </div>
    </>
  );
  
  // Render the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch(userRole) {
      case 'admin':
        return renderAdminDashboard();
      case 'doctor':
        return renderDoctorDashboard();
      case 'patient':
        return renderPatientDashboard();
      case 'staff':
        return renderStaffDashboard();
      default:
        return renderAdminDashboard();
    }
  };
  
  const roleTitle = {
    admin: 'Administrator Dashboard',
    doctor: 'Doctor Dashboard',
    patient: 'Patient Dashboard',
    staff: 'Staff Dashboard'
  };
  
  return (
    <AppLayout userRole={userRole}>
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{roleTitle[userRole]}</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        
        {renderDashboard()}
      </div>
    </AppLayout>
  );
}

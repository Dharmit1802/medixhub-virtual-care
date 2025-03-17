
import { AppLayout } from "@/components/layout/AppLayout";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";

export default function Appointments({ userRole = 'doctor' }) {
  const [appointments, setAppointments] = useState([]);
  
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
        status: 'completed',
        type: 'Pediatrics'
      },
      {
        id: '6',
        patientName: 'William Davis',
        doctorName: 'David Kim',
        time: '09:45 AM',
        date: 'Jun 18',
        location: 'Room 102',
        status: 'completed',
        type: 'Orthopedics'
      },
      {
        id: '7',
        patientName: 'James Wilson',
        doctorName: 'Robert Chen',
        time: '02:00 PM',
        date: 'Jun 19',
        location: 'Room 305',
        status: 'cancelled',
        type: 'Cardiology'
      },
      {
        id: '8',
        patientName: 'Sophia Martinez',
        doctorName: 'Sarah Williams',
        time: '04:15 PM',
        date: 'Jun 20',
        location: 'Room 210',
        status: 'cancelled',
        type: 'Dermatology'
      }
    ];
    
    setAppointments(sampleAppointments);
  }, []);
  
  const upcomingAppointments = appointments.filter(app => app.status === 'upcoming');
  const completedAppointments = appointments.filter(app => app.status === 'completed');
  const cancelledAppointments = appointments.filter(app => app.status === 'cancelled');
  
  return (
    <AppLayout userRole={userRole}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
            <p className="text-muted-foreground mt-1">
              Manage and view all appointments
            </p>
          </div>
          
          <Button className="bg-medical-500 hover:bg-medical-600">
            <Calendar className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Appointments Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">
                    Upcoming ({upcomingAppointments.length})
                  </TabsTrigger>
                  <TabsTrigger value="completed">
                    Completed ({completedAppointments.length})
                  </TabsTrigger>
                  <TabsTrigger value="cancelled">
                    Cancelled ({cancelledAppointments.length})
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="mt-0">
                  <AppointmentsList 
                    appointments={upcomingAppointments} 
                    title="" 
                    limit={10}
                  />
                </TabsContent>
                
                <TabsContent value="completed" className="mt-0">
                  <AppointmentsList 
                    appointments={completedAppointments} 
                    title="" 
                    limit={10}
                  />
                </TabsContent>
                
                <TabsContent value="cancelled" className="mt-0">
                  <AppointmentsList 
                    appointments={cancelledAppointments} 
                    title="" 
                    limit={10}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

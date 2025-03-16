
import { AppLayout } from "@/components/layout/AppLayout";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmergencyStatus } from "@/components/dashboard/EmergencyStatus";
import { Badge } from "@/components/ui/badge";
import { Ambulance, BedDouble, Clock, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Patient {
  id: string;
  name: string;
  age: number;
  status: 'critical' | 'serious' | 'stable';
  arrivalTime: string;
  waitTime: number;
  triageScore: number;
  complaint: string;
}

export default function Emergency() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [beds, setBeds] = useState({
    total: 30,
    occupied: 22,
    available: 8,
    pending: 5
  });
  
  useEffect(() => {
    // Simulate fetching emergency room data
    const emergencyPatients = [
      {
        id: 'ER001',
        name: 'Thomas Wilson',
        age: 68,
        status: 'critical',
        arrivalTime: '10:15 AM',
        waitTime: 0,
        triageScore: 9.5,
        complaint: 'Chest pain, difficulty breathing'
      },
      {
        id: 'ER002',
        name: 'Sarah Johnson',
        age: 34,
        status: 'serious',
        arrivalTime: '10:30 AM',
        waitTime: 5,
        triageScore: 7.8,
        complaint: 'Severe abdominal pain'
      },
      {
        id: 'ER003',
        name: 'Michael Rodriguez',
        age: 42,
        status: 'serious',
        arrivalTime: '10:45 AM',
        waitTime: 15,
        triageScore: 7.2,
        complaint: 'Deep laceration on arm'
      },
      {
        id: 'ER004',
        name: 'Emily Davis',
        age: 22,
        status: 'stable',
        arrivalTime: '11:00 AM',
        waitTime: 25,
        triageScore: 5.6,
        complaint: 'High fever, sore throat'
      },
      {
        id: 'ER005',
        name: 'Robert Brown',
        age: 59,
        status: 'stable',
        arrivalTime: '11:15 AM',
        waitTime: 30,
        triageScore: 4.8,
        complaint: 'Persistent headache'
      },
      {
        id: 'ER006',
        name: 'James Taylor',
        age: 78,
        status: 'serious',
        arrivalTime: '11:30 AM',
        waitTime: 10,
        triageScore: 8.1,
        complaint: 'Fall, possible hip fracture'
      },
      {
        id: 'ER007',
        name: 'Sophia Martinez',
        age: 5,
        status: 'stable',
        arrivalTime: '11:45 AM',
        waitTime: 20,
        triageScore: 6.2,
        complaint: 'High fever, ear pain'
      }
    ] as Patient[];
    
    setPatients(emergencyPatients);
  }, []);
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'critical': return 'bg-red-500 hover:bg-red-600';
      case 'serious': return 'bg-orange-500 hover:bg-orange-600';
      case 'stable': return 'bg-green-500 hover:bg-green-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'critical': return <Badge className="bg-red-500">{status}</Badge>;
      case 'serious': return <Badge className="bg-orange-500">{status}</Badge>;
      case 'stable': return <Badge className="bg-green-500">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <AppLayout userRole="doctor">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Emergency Room</h1>
            <p className="text-muted-foreground mt-1">
              Monitor and manage emergency room status and patients
            </p>
          </div>
          
          <Button className="bg-medical-500 hover:bg-medical-600">
            <Ambulance className="h-4 w-4 mr-2" />
            Register New Patient
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 text-medical-500 mr-2" />
                Patient Count
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{patients.length}</div>
              <p className="text-muted-foreground text-sm">Current patients</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Critical: {patients.filter(p => p.status === 'critical').length}</span>
                  <span>Serious: {patients.filter(p => p.status === 'serious').length}</span>
                  <span>Stable: {patients.filter(p => p.status === 'stable').length}</span>
                </div>
                <Progress value={(patients.length / 15) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BedDouble className="h-5 w-5 text-medical-500 mr-2" />
                Bed Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{beds.available}</div>
              <p className="text-muted-foreground text-sm">Available beds</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Occupied: {beds.occupied}</span>
                  <span>Total: {beds.total}</span>
                  <span>Pending: {beds.pending}</span>
                </div>
                <Progress value={(beds.occupied / beds.total) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 text-medical-500 mr-2" />
                Avg. Wait Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18 min</div>
              <p className="text-muted-foreground text-sm">Current average</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Critical: 0 min</span>
                  <span>Serious: 10 min</span>
                  <span>Stable: 25 min</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Emergency Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">ID</th>
                      <th className="text-left py-3 px-4 font-medium">Patient</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Triage</th>
                      <th className="text-left py-3 px-4 font-medium">Wait</th>
                      <th className="text-left py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id} className="border-b">
                        <td className="py-3 px-4">{patient.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-xs text-muted-foreground">{patient.age} yrs - {patient.complaint}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{getStatusBadge(patient.status)}</td>
                        <td className="py-3 px-4">{patient.triageScore}</td>
                        <td className="py-3 px-4">{patient.waitTime} min</td>
                        <td className="py-3 px-4">
                          <Button size="sm" className={getStatusColor(patient.status)}>
                            Treat
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-0">
              <EmergencyStatus />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

import { AppLayout } from "@/components/layout/AppLayout";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ambulance, BedDouble, Clock, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { EmergencyStatus } from "@/components/dashboard/EmergencyStatus";

export default function Emergency() {
  const [patients, setPatients] = useState([]);
  const [beds, setBeds] = useState({
    total: 30,
    occupied: 22,
    available: 8,
    pending: 5,
  });

  useEffect(() => {
    const emergencyPatients = [
      {
        id: "ER001",
        name: "Thomas Wilson",
        age: 68,
        status: "critical",
        arrivalTime: "10:15 AM",
        waitTime: 0,
        triageScore: 9.5,
        complaint: "Chest pain, difficulty breathing",
      },
      {
        id: "ER002",
        name: "Sarah Johnson",
        age: 34,
        status: "serious",
        arrivalTime: "10:30 AM",
        waitTime: 5,
        triageScore: 7.8,
        complaint: "Severe abdominal pain",
      },
      {
        id: "ER003",
        name: "Michael Rodriguez",
        age: 42,
        status: "serious",
        arrivalTime: "10:45 AM",
        waitTime: 15,
        triageScore: 7.2,
        complaint: "Deep laceration on arm",
      },
      {
        id: "ER004",
        name: "Emily Davis",
        age: 22,
        status: "stable",
        arrivalTime: "11:00 AM",
        waitTime: 25,
        triageScore: 5.6,
        complaint: "High fever, sore throat",
      },
      {
        id: "ER005",
        name: "Robert Brown",
        age: 59,
        status: "stable",
        arrivalTime: "11:15 AM",
        waitTime: 30,
        triageScore: 4.8,
        complaint: "Persistent headache",
      },
      {
        id: "ER006",
        name: "James Taylor",
        age: 78,
        status: "serious",
        arrivalTime: "11:30 AM",
        waitTime: 10,
        triageScore: 8.1,
        complaint: "Fall, possible hip fracture",
      },
      {
        id: "ER007",
        name: "Sophia Martinez",
        age: 5,
        status: "stable",
        arrivalTime: "11:45 AM",
        waitTime: 20,
        triageScore: 6.2,
        complaint: "High fever, ear pain",
      },
    ];
    setPatients(emergencyPatients);
  }, []);

  return (
    <AppLayout userRole="doctor">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Emergency Room</h1>
          <Button className="bg-medical-500 hover:bg-medical-600">
            <Ambulance className="h-4 w-4 mr-2" /> Register New Patient
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Users className="h-5 w-5 text-medical-500 mr-2" /> Patient
                Count
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{patients.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <BedDouble className="h-5 w-5 text-medical-500 mr-2" /> Bed
                Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{beds.available}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Clock className="h-5 w-5 text-medical-500 mr-2" /> Avg. Wait
                Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18 min</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Emergency Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Patient</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b">
                      <td className="py-3 px-4">{patient.id}</td>
                      <td className="py-3 px-4">{patient.name}</td>
                      <td className="py-3 px-4">
                        <Badge
                          className={
                            patient.status === "critical"
                              ? "bg-red-500"
                              : patient.status === "serious"
                              ? "bg-orange-500"
                              : "bg-green-500"
                          }
                        >
                          {patient.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

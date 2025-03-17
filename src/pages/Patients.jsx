import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  Search,
  UserPlus,
  Phone,
  Mail,
  CalendarDays,
  Activity,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function Patients({ userRole = "doctor" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const patients = [
    {
      id: "P1001",
      name: "Emily Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      email: "emily.johnson@example.com",
      address: "123 Main St, Anytown, CA",
      lastVisit: "May 12, 2023",
      upcomingAppointment: "Jun 15, 2023 - 09:00 AM",
      bloodType: "A+",
      status: "active",
    },
    {
      id: "P1002",
      name: "Michael Smith",
      age: 42,
      gender: "Male",
      phone: "(555) 234-5678",
      email: "michael.smith@example.com",
      address: "456 Oak Ave, Somecity, CA",
      lastVisit: "Apr 28, 2023",
      upcomingAppointment: "Jun 15, 2023 - 10:30 AM",
      bloodType: "O-",
      status: "active",
    },
    {
      id: "P1003",
      name: "Jessica Brown",
      age: 29,
      gender: "Female",
      phone: "(555) 345-6789",
      email: "jessica.brown@example.com",
      address: "789 Pine Rd, Othercity, CA",
      lastVisit: "Jun 02, 2023",
      upcomingAppointment: "Jun 16, 2023 - 01:15 PM",
      bloodType: "B+",
      status: "active",
    },
    {
      id: "P1004",
      name: "Daniel Lee",
      age: 57,
      gender: "Male",
      phone: "(555) 456-7890",
      email: "daniel.lee@example.com",
      address: "101 Cedar Ln, Anycity, CA",
      lastVisit: "Mar 15, 2023",
      upcomingAppointment: "Jun 17, 2023 - 11:00 AM",
      bloodType: "AB-",
      status: "active",
    },
    {
      id: "P1005",
      name: "Olivia Garcia",
      age: 8,
      gender: "Female",
      phone: "(555) 567-8901",
      email: "garcia.parents@example.com",
      address: "222 Elm St, Anytown, CA",
      lastVisit: "May 30, 2023",
      upcomingAppointment: "Jun 17, 2023 - 03:30 PM",
      bloodType: "O+",
      status: "active",
    },
    {
      id: "P1006",
      name: "William Davis",
      age: 63,
      gender: "Male",
      phone: "(555) 678-9012",
      email: "william.davis@example.com",
      address: "333 Maple Dr, Somecity, CA",
      lastVisit: "Apr 05, 2023",
      bloodType: "A-",
      status: "inactive",
    },
    {
      id: "P1007",
      name: "Sophia Martinez",
      age: 27,
      gender: "Female",
      phone: "(555) 789-0123",
      email: "sophia.martinez@example.com",
      address: "400 Birch St, Anothercity, CA",
      lastVisit: "May 20, 2023",
      upcomingAppointment: "Jun 20, 2023 - 02:00 PM",
      bloodType: "B-",
      status: "active",
    },
    {
      id: "P1008",
      name: "James Wilson",
      age: 50,
      gender: "Male",
      phone: "(555) 890-1234",
      email: "james.wilson@example.com",
      address: "505 Palm Ave, Newcity, CA",
      lastVisit: "Feb 15, 2023",
      upcomingAppointment: "Jun 21, 2023 - 09:30 AM",
      bloodType: "O+",
      status: "active",
    },
  ];

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout userRole={userRole}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
            <p className="text-muted-foreground mt-1">
              Manage and view patient records
            </p>
          </div>

          <Button className="bg-medical-500 hover:bg-medical-600">
            <UserPlus className="h-4 w-4 mr-2" /> Add New Patient
          </Button>
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-500">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span>{patient.name}</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        {patient.id}
                      </span>
                    </div>
                    <div className="text-sm font-normal text-muted-foreground flex items-center gap-2">
                      <span>{patient.age} yrs</span>
                      <span>•</span>
                      <span>{patient.gender}</span>
                      <span>•</span>
                      <span>{patient.bloodType}</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>Last Visit: {patient.lastVisit}</span>
                  </div>
                  {patient.upcomingAppointment && (
                    <div className="flex items-center gap-2 text-medical-500">
                      <Clock className="h-4 w-4" />
                      <span>Next: {patient.upcomingAppointment}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        patient.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {patient.status.charAt(0).toUpperCase() +
                        patient.status.slice(1)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  FileBarChart,
  Activity,
  PlusCircle,
  FileClock,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Records({ userRole = "doctor" }) {
  const [records] = useState([
    {
      id: "MR1001",
      patientName: "Emily Johnson",
      doctorName: "Dr. Robert Chen",
      date: "Jun 15, 2023",
      type: "General Checkup",
      status: "completed",
      summary:
        "Regular health checkup. Blood pressure and cholesterol levels normal.",
    },
    {
      id: "MR1002",
      patientName: "Michael Smith",
      doctorName: "Dr. Sarah Williams",
      date: "Jun 14, 2023",
      type: "Cardiology",
      status: "completed",
      summary: "ECG performed. Results show normal heart rhythm.",
    },
    {
      id: "MR1003",
      patientName: "Jessica Brown",
      doctorName: "Dr. David Kim",
      date: "Jun 13, 2023",
      type: "Dermatology",
      status: "pending",
      summary: "Skin biopsy taken. Awaiting lab results.",
    },
    {
      id: "MR1004",
      patientName: "Daniel Lee",
      doctorName: "Dr. Robert Chen",
      date: "Jun 12, 2023",
      type: "Neurology",
      status: "in-progress",
      summary: "MRI scan scheduled. Initial consultation completed.",
    },
  ]);

  return (
    <AppLayout userRole={userRole}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Medical Records
            </h1>
            <p className="text-muted-foreground mt-1">
              View and manage patient medical records
            </p>
          </div>

          <Button className="bg-medical-500 hover:bg-medical-600">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Record
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-medical-500" />
                Total Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-sm text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-green-500" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,156</div>
              <p className="text-sm text-muted-foreground">
                92% completion rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileClock className="h-5 w-5 text-amber-500" />
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64</div>
              <p className="text-sm text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-medical-500" />
                In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-sm text-muted-foreground">Active cases</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{record.patientName}</h3>
                        <span className="text-xs text-muted-foreground">
                          {record.id}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            record.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : record.status === "pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {record.status.charAt(0).toUpperCase() +
                            record.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {record.type}
                      </p>
                      <p className="text-sm mt-2">{record.summary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{record.doctorName}</p>
                      <p className="text-xs text-muted-foreground">
                        {record.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

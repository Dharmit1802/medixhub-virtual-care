import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useState } from "react";
import { Users, Activity, DollarSign, TrendingUp } from "lucide-react";
import "chart.js/auto";
import { AppLayout } from "../components/layout/AppLayout";

export default function AIAnalysis() {
  const [data, setData] = useState({
    patients: 320,
    staff: 120,
    cost: 50000,
    efficiency: 87,
  });

  const patientData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patient Growth",
        data: [50, 80, 100, 130, 200, 250],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const staffData = {
    labels: ["Doctors", "Nurses", "Technicians", "Admin", "Support"],
    datasets: [
      {
        label: "Staff Count",
        data: [30, 40, 20, 15, 15],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#6366f1",
        ],
      },
    ],
  };

  const costData = {
    labels: ["Salaries", "Equipment", "Maintenance", "Other"],
    datasets: [
      {
        label: "Cost Breakdown",
        data: [25000, 15000, 5000, 5000],
        backgroundColor: ["#6366f1", "#ef4444", "#f59e0b", "#10b981"],
      },
    ],
  };

  return (
    <AppLayout>
      <div className="space-y-6 min-h-fit p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">
          AI-Driven Healthcare Analysis
        </h1>

        {/* Summary Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">Summary</h2>
          <p className="text-gray-600">
            This dashboard provides an overview of key metrics in our healthcare
            system, including patient growth, staff distribution, and cost
            breakdown.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="h-8 w-8 text-blue-500" />,
              title: "Patients",
              value: data.patients,
            },
            {
              icon: <Activity className="h-8 w-8 text-green-500" />,
              title: "Efficiency",
              value: `${data.efficiency}%`,
            },
            {
              icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
              title: "Total Cost",
              value: `$${data.cost}`,
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-red-500" />,
              title: "Staff Members",
              value: data.staff,
            },
          ].map((metric, index) => (
            <Card
              key={index}
              className="transition-transform transform hover:scale-105 shadow-lg border border-gray-200"
            >
              <CardHeader className="flex items-center">
                {metric.icon}
                <CardTitle className="ml-2 text-lg font-semibold text-gray-700">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-bold text-gray-900">
                {metric.value}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700">
                Patient Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Line
                data={patientData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                    tooltip: {
                      enabled: true,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700">
                Staff Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Pie
                data={staffData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                    tooltip: {
                      enabled: true,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700">
                Cost Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Bar
                data={costData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                    tooltip: {
                      enabled: true,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

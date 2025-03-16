
import { AppLayout } from "@/components/layout/AppLayout";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowDownUp, Check, CreditCard, Download, FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Bill {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  amount: number;
  insurance: string;
  coveragePercent: number;
  status: 'pending' | 'paid' | 'overdue' | 'processing';
  items: BillItem[];
}

interface BillItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export default function Billing() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Simulate fetching bills
    const sampleBills = [
      {
        id: 'INV-2023-001',
        patientName: 'James Wilson',
        patientId: 'P10045',
        date: 'Jun 15, 2023',
        amount: 1250.75,
        insurance: 'BlueCross Health',
        coveragePercent: 80,
        status: 'paid',
        items: [
          { description: 'General Consultation', quantity: 1, unitPrice: 150.00, total: 150.00 },
          { description: 'Blood Test Panel', quantity: 1, unitPrice: 275.50, total: 275.50 },
          { description: 'X-Ray Examination', quantity: 1, unitPrice: 325.25, total: 325.25 },
          { description: 'Medication', quantity: 2, unitPrice: 250.00, total: 500.00 }
        ]
      },
      {
        id: 'INV-2023-002',
        patientName: 'Emily Johnson',
        patientId: 'P10046',
        date: 'Jun 16, 2023',
        amount: 850.50,
        insurance: 'Aetna Insurance',
        coveragePercent: 70,
        status: 'pending',
        items: [
          { description: 'Emergency Room Visit', quantity: 1, unitPrice: 500.00, total: 500.00 },
          { description: 'CT Scan', quantity: 1, unitPrice: 350.50, total: 350.50 }
        ]
      },
      {
        id: 'INV-2023-003',
        patientName: 'Robert Chen',
        patientId: 'P10047',
        date: 'Jun 16, 2023',
        amount: 1755.25,
        insurance: 'MediCare Plus',
        coveragePercent: 90,
        status: 'processing',
        items: [
          { description: 'Cardiology Consultation', quantity: 1, unitPrice: 200.00, total: 200.00 },
          { description: 'Echocardiogram', quantity: 1, unitPrice: 425.25, total: 425.25 },
          { description: 'Stress Test', quantity: 1, unitPrice: 380.00, total: 380.00 },
          { description: 'Medical Supplies', quantity: 5, unitPrice: 150.00, total: 750.00 }
        ]
      },
      {
        id: 'INV-2023-004',
        patientName: 'Sarah Williams',
        patientId: 'P10048',
        date: 'Jun 17, 2023',
        amount: 625.50,
        insurance: 'United Healthcare',
        coveragePercent: 75,
        status: 'overdue',
        items: [
          { description: 'Follow-up Consultation', quantity: 1, unitPrice: 125.50, total: 125.50 },
          { description: 'Physical Therapy Session', quantity: 5, unitPrice: 100.00, total: 500.00 }
        ]
      },
      {
        id: 'INV-2023-005',
        patientName: 'Daniel Lee',
        patientId: 'P10049',
        date: 'Jun 18, 2023',
        amount: 1950.75,
        insurance: 'CIGNA Health',
        coveragePercent: 85,
        status: 'pending',
        items: [
          { description: 'Surgical Procedure', quantity: 1, unitPrice: 1500.00, total: 1500.00 },
          { description: 'Anesthesia', quantity: 1, unitPrice: 300.75, total: 300.75 },
          { description: 'Post-Op Medication', quantity: 1, unitPrice: 150.00, total: 150.00 }
        ]
      },
      {
        id: 'INV-2023-006',
        patientName: 'Olivia Garcia',
        patientId: 'P10050',
        date: 'Jun 19, 2023',
        amount: 475.25,
        insurance: 'Humana Insurance',
        coveragePercent: 65,
        status: 'paid',
        items: [
          { description: 'Pediatric Consultation', quantity: 1, unitPrice: 175.25, total: 175.25 },
          { description: 'Vaccination', quantity: 3, unitPrice: 100.00, total: 300.00 }
        ]
      }
    ] as Bill[];
    
    setBills(sampleBills);
  }, []);
  
  const filterBills = (status?: string) => {
    if (!status || status === 'all') return bills;
    return bills.filter(bill => bill.status === status);
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'paid': 
        return <Badge className="bg-green-500">Paid</Badge>;
      case 'pending': 
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'overdue': 
        return <Badge className="bg-red-500">Overdue</Badge>;
      case 'processing': 
        return <Badge className="bg-blue-500">Processing</Badge>;
      default: 
        return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <AppLayout userRole="doctor">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Billing & Payments</h1>
            <p className="text-muted-foreground mt-1">
              Manage patient invoices and payment information
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button className="bg-medical-500 hover:bg-medical-600">
              <CreditCard className="h-4 w-4 mr-2" />
              New Invoice
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$6,908.00</div>
              <p className="text-muted-foreground text-sm">Monthly revenue</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$2,826.25</div>
              <p className="text-muted-foreground text-sm">Awaiting payment</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Insurance Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">14</div>
              <p className="text-muted-foreground text-sm">Pending claims</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle>Invoices</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search invoices..." 
                  className="pl-8 w-full sm:w-[250px]" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">
                  All Invoices
                </TabsTrigger>
                <TabsTrigger value="pending">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="paid">
                  Paid
                </TabsTrigger>
                <TabsTrigger value="overdue">
                  Overdue
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">
                          <div className="flex items-center">
                            Invoice 
                            <ArrowDownUp className="h-3 w-3 ml-1" />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 font-medium">Patient</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Amount</th>
                        <th className="text-left py-3 px-4 font-medium">Insurance</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterBills(activeTab).map((bill) => (
                        <tr key={bill.id} className="border-b">
                          <td className="py-3 px-4">{bill.id}</td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{bill.patientName}</div>
                              <div className="text-xs text-muted-foreground">ID: {bill.patientId}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">{bill.date}</td>
                          <td className="py-3 px-4">${bill.amount.toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <div>
                              <div>{bill.insurance}</div>
                              <div className="text-xs text-muted-foreground">{bill.coveragePercent}% coverage</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">{getStatusBadge(bill.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Check className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

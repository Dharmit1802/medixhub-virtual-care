
import { AppLayout } from "@/components/layout/AppLayout";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  FilePlus, 
  Plus, 
  Search, 
  SlidersHorizontal, 
  UserPlus 
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface StaffMember {
  id: string;
  name: string;
  position: string;
  department: string;
  status: 'active' | 'on-leave' | 'training';
  shift: 'morning' | 'afternoon' | 'night';
  phone: string;
  email: string;
  avatarUrl?: string;
}

export default function Staff() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Simulate fetching staff data
    const sampleStaffMembers = [
      {
        id: 'S001',
        name: 'Dr. Jennifer Smith',
        position: 'Chief Medical Officer',
        department: 'Administration',
        status: 'active',
        shift: 'morning',
        phone: '(555) 123-4567',
        email: 'j.smith@medix.care'
      },
      {
        id: 'S002',
        name: 'Dr. Michael Chen',
        position: 'Cardiologist',
        department: 'Cardiology',
        status: 'active',
        shift: 'morning',
        phone: '(555) 234-5678',
        email: 'm.chen@medix.care'
      },
      {
        id: 'S003',
        name: 'Dr. Sarah Williams',
        position: 'Neurologist',
        department: 'Neurology',
        status: 'on-leave',
        shift: 'morning',
        phone: '(555) 345-6789',
        email: 's.williams@medix.care'
      },
      {
        id: 'S004',
        name: 'James Wilson',
        position: 'Head Nurse',
        department: 'Nursing',
        status: 'active',
        shift: 'night',
        phone: '(555) 456-7890',
        email: 'j.wilson@medix.care'
      },
      {
        id: 'S005',
        name: 'Rebecca Johnson',
        position: 'Lab Technician',
        department: 'Laboratory',
        status: 'training',
        shift: 'afternoon',
        phone: '(555) 567-8901',
        email: 'r.johnson@medix.care'
      },
      {
        id: 'S006',
        name: 'David Miller',
        position: 'Radiology Technician',
        department: 'Radiology',
        status: 'active',
        shift: 'afternoon',
        phone: '(555) 678-9012',
        email: 'd.miller@medix.care'
      },
      {
        id: 'S007',
        name: 'Dr. Emily Davis',
        position: 'Pediatrician',
        department: 'Pediatrics',
        status: 'active',
        shift: 'morning',
        phone: '(555) 789-0123',
        email: 'e.davis@medix.care'
      },
      {
        id: 'S008',
        name: 'Thomas Brown',
        position: 'Pharmacist',
        department: 'Pharmacy',
        status: 'active',
        shift: 'morning',
        phone: '(555) 890-1234',
        email: 't.brown@medix.care'
      }
    ] as StaffMember[];
    
    setStaffMembers(sampleStaffMembers);
  }, []);
  
  const filterStaff = (status?: string) => {
    if (!status || status === 'all') return staffMembers;
    return staffMembers.filter(staff => staff.status === status);
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active': 
        return <Badge className="bg-green-500">Active</Badge>;
      case 'on-leave': 
        return <Badge className="bg-yellow-500">On Leave</Badge>;
      case 'training': 
        return <Badge className="bg-blue-500">Training</Badge>;
      default: 
        return <Badge>{status}</Badge>;
    }
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      'Administration': 'bg-purple-100 text-purple-800',
      'Cardiology': 'bg-red-100 text-red-800',
      'Neurology': 'bg-blue-100 text-blue-800',
      'Nursing': 'bg-green-100 text-green-800',
      'Laboratory': 'bg-yellow-100 text-yellow-800',
      'Radiology': 'bg-orange-100 text-orange-800',
      'Pediatrics': 'bg-pink-100 text-pink-800',
      'Pharmacy': 'bg-indigo-100 text-indigo-800'
    };
    
    return colors[department] || 'bg-gray-100 text-gray-800';
  };
  
  return (
    <AppLayout userRole="admin">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage hospital staff, schedules, and departments
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
            <Button className="bg-medical-500 hover:bg-medical-600">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Staff
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">248</div>
              <p className="text-muted-foreground text-sm">Active personnel</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42</div>
              <p className="text-muted-foreground text-sm">Medical practitioners</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Nurses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">86</div>
              <p className="text-muted-foreground text-sm">Nursing staff</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Support Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">120</div>
              <p className="text-muted-foreground text-sm">Administrative & other</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle>Staff Directory</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search staff..." 
                    className="pl-8 w-full sm:w-[250px]" 
                  />
                </div>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">
                  All Staff
                </TabsTrigger>
                <TabsTrigger value="active">
                  Active
                </TabsTrigger>
                <TabsTrigger value="on-leave">
                  On Leave
                </TabsTrigger>
                <TabsTrigger value="training">
                  Training
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterStaff(activeTab === 'all' ? undefined : activeTab).map((staff) => (
                    <Card key={staff.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex items-start p-4">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={staff.avatarUrl} />
                            <AvatarFallback className="bg-medical-100 text-medical-700">
                              {getInitials(staff.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-base truncate">{staff.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{staff.position}</p>
                            <div className="flex items-center mt-1 space-x-2">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getDepartmentColor(staff.department)}`}>
                                {staff.department}
                              </span>
                              {getStatusBadge(staff.status)}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 text-xs text-muted-foreground flex justify-between">
                          <span>{staff.email}</span>
                          <span>{staff.shift} shift</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {/* Add Staff Card */}
                  <Card className="flex items-center justify-center p-6 border-dashed">
                    <Button variant="ghost" className="h-full w-full flex flex-col items-center justify-center py-8 text-muted-foreground">
                      <Plus className="h-6 w-6 mb-2" />
                      <span>Add New Staff Member</span>
                    </Button>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-muted-foreground">Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Shift Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <span className="text-muted-foreground">Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

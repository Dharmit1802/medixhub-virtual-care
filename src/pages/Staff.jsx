import { useEffect, useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Plus, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

  const [newStaff, setNewStaff] = useState({
    name: "",
    position: "",
    department: "",
    status: "active",
    shift: "morning",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const sampleStaffMembers = [
      {
        id: "S001",
        name: "Dr. Jennifer Smith",
        position: "Chief Medical Officer",
        department: "Administration",
        status: "active",
        shift: "morning",
        phone: "(555) 123-4567",
        email: "j.smith@medix.care",
      },
      {
        id: "S002",
        name: "Dr. Michael Chen",
        position: "Cardiologist",
        department: "Cardiology",
        status: "active",
        shift: "morning",
        phone: "(555) 234-5678",
        email: "m.chen@medix.care",
      },
      {
        id: "S003",
        name: "Dr. Sarah Williams",
        position: "Neurologist",
        department: "Neurology",
        status: "on-leave",
        shift: "morning",
        phone: "(555) 345-6789",
        email: "s.williams@medix.care",
      },
      {
        id: "S004",
        name: "James Wilson",
        position: "Head Nurse",
        department: "Nursing",
        status: "active",
        shift: "night",
        phone: "(555) 456-7890",
        email: "j.wilson@medix.care",
      },
    ];
    setStaffMembers(sampleStaffMembers);
  }, []);

  const filterStaff = (status) =>
    status === "all"
      ? staffMembers
      : staffMembers.filter((staff) => staff.status === status);

  // Handle Add Staff
  const handleAddStaff = () => {
    if (!newStaff.name || !newStaff.position || !newStaff.department) {
      alert("Please fill all required fields!");
      return;
    }

    const newStaffMember = {
      id: `S00${staffMembers.length + 1}`,
      ...newStaff,
    };

    setStaffMembers((prev) => [...prev, newStaffMember]);

    // Close the dialog
    setIsAddStaffOpen(false);

    // Clear form fields
    setNewStaff({
      name: "",
      position: "",
      department: "",
      status: "active",
      shift: "morning",
      phone: "",
      email: "",
    });
  };

  return (
    <AppLayout userRole="admin">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>

            {/* Add Staff Dialog */}
            <Dialog open={isAddStaffOpen} onOpenChange={setIsAddStaffOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setIsAddStaffOpen(true)}
                  className="bg-medical-500 hover:bg-medical-600"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Staff
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Staff</DialogTitle>
                  <DialogDescription>
                    Fill in the details to add a new staff member.
                  </DialogDescription>
                </DialogHeader>

                <Label>Full Name:</Label>
                <Input
                  value={newStaff.name}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, name: e.target.value })
                  }
                  placeholder="Full Name"
                />

                <Label>Position:</Label>
                <Input
                  value={newStaff.position}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, position: e.target.value })
                  }
                  placeholder="Position"
                />

                <Label>Department:</Label>
                <Input
                  value={newStaff.department}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, department: e.target.value })
                  }
                  placeholder="Department"
                />

                <DialogFooter>
                  <Button onClick={handleAddStaff}>Add Staff</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Staff</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="on-leave">On Leave</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterStaff(activeTab).map((staff) => (
                <Card key={staff.id}>
                  <CardContent className="p-4 flex items-start">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>{staff.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-base">{staff.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {staff.position}
                      </p>
                      <Badge>{staff.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="flex items-center justify-center border-dashed">
                <Button
                  variant="ghost"
                  className="flex p-8 flex-col items-center"
                >
                  <Plus className="h-6 w-6 mb-2" /> Add New Staff Member
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Staff;

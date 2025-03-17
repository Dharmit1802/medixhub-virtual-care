import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Home,
  UserCog,
  Users,
  MessageSquare,
  CreditCard,
  Layers,
  Activity,
  LogOut,
  Menu,
  X,
  UserRoundCog,
  UserRound,
  Stethoscope,
  Ambulance,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Sidebar({ userRole = "admin" }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Different menu items based on user role
  const getMenuItems = () => {
    const commonItems = [
      {
        name: "Dashboard",
        icon: <Home className="h-5 w-5" />,
        path: "/",
      },
      {
        name: "Log Out",
        icon: <LogOut className="h-5 w-5" />,
        path: "/login",
        className: "mt-auto",
      },
    ];

    switch (userRole) {
      case "admin":
        return [
          ...commonItems.slice(0, 1),
          {
            name: "Staff Management",
            icon: <UserCog className="h-5 w-5" />,
            path: "/staff",
          },
          {
            name: "Appointments",
            icon: <Calendar className="h-5 w-5" />,
            path: "/appointments",
          },
          {
            name: "Emergency Room",
            icon: <Ambulance className="h-5 w-5" />,
            path: "/emergency",
          },
          {
            name: "Billing",
            icon: <CreditCard className="h-5 w-5" />,
            path: "/billing",
          },
          {
            name: "AI Analysis",
            icon: <Layers className="h-5 w-5" />,
            path: "/ai-analysis",
          },
          commonItems[1],
        ];
      case "doctor":
        return [
          ...commonItems.slice(0, 1),
          {
            name: "My Appointments",
            icon: <Calendar className="h-5 w-5" />,
            path: "/appointments",
          },
          {
            name: "Patients",
            icon: <Users className="h-5 w-5" />,
            path: "/patients",
          },
          {
            name: "Medical Records",
            icon: <Activity className="h-5 w-5" />,
            path: "/records",
          },
          {
            name: "Chat",
            icon: <MessageSquare className="h-5 w-5" />,
            path: "/chat",
          },
          commonItems[1],
        ];
      case "patient":
        return [
          ...commonItems.slice(0, 1),
          {
            name: "My Appointments",
            icon: <Calendar className="h-5 w-5" />,
            path: "/appointments",
          },
          {
            name: "My Records",
            icon: <Activity className="h-5 w-5" />,
            path: "/records",
          },
          {
            name: "Chat with Doctor",
            icon: <MessageSquare className="h-5 w-5" />,
            path: "/chat",
          },
          {
            name: "Billing",
            icon: <CreditCard className="h-5 w-5" />,
            path: "/billing",
          },
          commonItems[1],
        ];
      case "staff":
        return [
          ...commonItems.slice(0, 1),
          {
            name: "My Schedule",
            icon: <Calendar className="h-5 w-5" />,
            path: "/schedule",
          },
          {
            name: "Appointments",
            icon: <Calendar className="h-5 w-5" />,
            path: "/appointments",
          },
          {
            name: "Emergency Room",
            icon: <Ambulance className="h-5 w-5" />,
            path: "/emergency",
          },
          {
            name: "Patients",
            icon: <Users className="h-5 w-5" />,
            path: "/patients",
          },
          commonItems[1],
        ];
      default:
        return commonItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md rounded-full h-10 w-10"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar backdrop for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 transition-transform duration-300 ease-in-out transform",
          "bg-sidebar border-r border-border shadow-lg md:shadow-none",
          "flex flex-col",
          isOpen || !isMobile ? "translate-x-0" : "-translate-x-full",
          "md:relative md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2 text-medical-500 font-bold text-xl">
            {userRole === "admin" && <UserRoundCog className="h-6 w-6" />}
            {userRole === "doctor" && <Stethoscope className="h-6 w-6" />}
            {userRole === "patient" && <UserRound className="h-6 w-6" />}
            {userRole === "staff" && <UserRoundCog className="h-6 w-6" />}
            <span>
              Medix<span className="text-medical-700">CARE</span>
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name} className={item.className}>
                <Link
                  to={item.path}
                  onClick={closeSidebar}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all",
                    location.pathname === item.path
                      ? "bg-medical-500 text-white"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-500">
              {userRole === "admin" && <UserRoundCog className="h-5 w-5" />}
              {userRole === "doctor" && <Stethoscope className="h-5 w-5" />}
              {userRole === "patient" && <UserRound className="h-5 w-5" />}
              {userRole === "staff" && <UserRoundCog className="h-5 w-5" />}
            </div>
            <div>
              <p className="text-sm font-medium">
                {userRole === "doctor" ? "Dr. John Doe" : "John Doe"}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {userRole}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}


import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  userRole?: 'admin' | 'doctor' | 'patient' | 'staff';
}

export function AppLayout({ 
  children, 
  userRole = 'admin' 
}: AppLayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar userRole={userRole} />
      
      <main className={cn(
        "flex-1 transition-all duration-300",
        "p-4 md:p-6 lg:p-8",
        isMobile ? "ml-0" : "md:ml-64",
      )}>
        <div className="max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}

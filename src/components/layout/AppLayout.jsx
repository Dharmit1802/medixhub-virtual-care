
import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function AppLayout({ 
  children, 
  userRole = 'admin' 
}) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar userRole={userRole} />
      
      <main className={cn(
        "flex-1 transition-all duration-300",
        "p-4 md:p-6 lg:p-8"
        // Removed the ml-0 and md:ml-64 classes that were causing extra spacing
      )}>
        <div className="max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}

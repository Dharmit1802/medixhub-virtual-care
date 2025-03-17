import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import AIAnalysis from "./pages/AiAnalysis";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Patients = lazy(() => import("./pages/Patients"));
const Records = lazy(() => import("./pages/Records"));
const Emergency = lazy(() => import("./pages/Emergency"));
const Billing = lazy(() => import("./pages/Billing"));
const Staff = lazy(() => import("./pages/Staff"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component for suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse-glow rounded-md w-12 h-12 bg-medical-500/10"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Dashboard userRole="admin" />} />
            <Route path="/doctor" element={<Dashboard userRole="doctor" />} />
            <Route path="/patient" element={<Dashboard userRole="patient" />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/records" element={<Records />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ai-analysis" element={<AIAnalysis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

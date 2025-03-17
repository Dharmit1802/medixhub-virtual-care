import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Users, 
  CalendarCheck, 
  Bot, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(null);

  const features = [
    {
      title: "Appointment Scheduling",
      description: "Intelligent calendar-based booking system for patients and doctors with easy rescheduling.",
      icon: <CalendarCheck className="h-6 w-6" />,
    },
    {
      title: "AI-Powered Staff Scheduling",
      description: "Smart shift recommendations for hospital staff using machine learning predictions.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Emergency Room Analytics",
      description: "Real-time displays of predicted patient load in the emergency room based on AI analysis.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Secure Billing Process",
      description: "Secure bill generation and fraud detection using advanced AI technologies.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "AI Doctor Assistant",
      description: "Intelligent chatbot for patient queries and virtual consultations.",
      icon: <Bot className="h-6 w-6" />,
    },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-medical-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-500 opacity-5 dark:opacity-10" />
        
        {/* Navigation */}
        <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-medical-500" />
            <span className="ml-2 text-2xl font-bold">Medix<span className="text-medical-500">CARE</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-medical-500 transition-colors">Features</a>
            <a href="#benefits" className="text-sm font-medium hover:text-medical-500 transition-colors">Benefits</a>
            <Button variant="ghost" onClick={handleLogin}>Login</Button>
            <Button onClick={handleLogin}>Get Started</Button>
          </div>
          <Button variant="default" className="md:hidden" onClick={handleLogin}>Login</Button>
        </nav>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Hospital Management System
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Streamline your hospital operations with our intelligent platform designed for doctors, patients, and staff. Experience the future of healthcare management.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" onClick={handleLogin} className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleLogin} className="w-full sm:w-auto">
              View Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-5 w-24 h-24 rounded-full bg-medical-200 opacity-50 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-medical-300 opacity-30 blur-3xl" />
      </header>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Powerful Features
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our intelligent platform offers a comprehensive set of tools to revolutionize your hospital management workflow.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-all hover:shadow-md card-hover"
                variants={item}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className={`p-3 rounded-lg bg-medical-100 text-medical-500 w-fit mb-4 transition-all duration-300 ${isHovering === index ? 'bg-medical-500 text-white animate-pulse-glow' : ''}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-medical-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionize Your Healthcare Management</h2>
              <p className="text-lg text-muted-foreground mb-8">
                MedixCARE helps hospitals and healthcare providers improve patient care, reduce administrative burden, and optimize operations with intelligent automation and AI-powered insights.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Reduce appointment no-shows by 35%",
                  "Optimize staff schedules saving 20% in operational costs",
                  "Improve emergency room efficiency by predicting patient influx",
                  "Secure billing process with 99.9% accuracy",
                  "Enhance patient engagement through AI assistants"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-green-100 text-green-500 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button size="lg" onClick={handleLogin}>
                  Start Transforming Your Hospital
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-3">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-16 w-16 text-gray-300" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-medical-500">99%</span>
                <span className="text-xs text-muted-foreground">Customer Satisfaction</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-medical-500">35%</span>
                <span className="text-xs text-muted-foreground">Efficiency Increase</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 md:py-24 bg-medical-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Healthcare Management?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of healthcare providers who are already using MedixCARE to streamline their operations and improve patient care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              onClick={handleLogin}
              className="bg-white text-medical-500 hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center mb-4">
                <Stethoscope className="h-6 w-6 text-medical-500" />
                <span className="ml-2 text-xl font-bold">Medix<span className="text-medical-500">CARE</span></span>
              </div>
              <p className="text-muted-foreground mb-6">
                Transforming healthcare management with the power of AI and intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Features</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Demo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Support</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Training</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MedixCARE. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

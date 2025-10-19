/**
 * Component: App
 * Purpose: Main application component with routing and providers
 * Added: MVP0
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNav } from "@/components/navigation/top-nav";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Home from "./pages/home";
import Salah from "./pages/salah";
import Adhkar from "./pages/adhkar";
import Dunya from "./pages/dunya";
import About from "./pages/about";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <TopNav />
          
          {/* Mobile theme toggle - top right */}
          <div className="md:hidden fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <main className="pb-20 md:pb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/salah" element={<Salah />} />
              <Route path="/adhkar" element={<Adhkar />} />
              <Route path="/dunya" element={<Dunya />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

/**
 * Page: Salah
 * Purpose: Salah tracking page (placeholder for MVP0)
 * Added: MVP0
 */

import { Church } from "lucide-react";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

const Salah = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Salah Tracker
          </h1>
          <p className="text-base text-muted-foreground">
            Track your five daily prayers
          </p>
        </div>
        
        <PlaceholderCard icon={Church} title="Salah Tracking" />
      </div>
    </div>
  );
};

export default Salah;

/**
 * Page: About
 * Purpose: About page with app information
 * Added: MVP0
 */

import { Church, Heart, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-5rem)] px-4 py-8">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
              <Church className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            About Nobd
          </h1>
          <p className="text-base text-muted-foreground">
            نُبْد — "We worship"
          </p>
        </div>

        <Card className="shadow-sm rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Our Purpose</h3>
                <p className="text-muted-foreground text-sm">
                  Nobd is designed to help Muslims maintain their spiritual and worldly routines
                  with mindfulness and intention. A calm companion for your daily acts of worship.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Church className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">What We Track</h3>
                <p className="text-muted-foreground text-sm">
                  Track your five daily prayers (Salah), remembrance of Allah (Adhkar),
                  and beneficial worldly habits (Dunya) — all in one peaceful space.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Built with Care</h3>
                <p className="text-muted-foreground text-sm">
                  This is MVP0 — a foundation built with React, TypeScript, and a design
                  that prioritizes calm and clarity. More features coming in future updates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>May this app bring barakah to your daily routine.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

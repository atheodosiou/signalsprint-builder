import { ArrowRight, Shield, CalendarDays, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const microBullets = [
  { icon: Ban, text: "Not another AI report generator — deterministic engine, not a template" },
  { icon: CalendarDays, text: "Verdict in 14–30 days: PROCEED / NARROW / KILL" },
  { icon: Shield, text: "Privacy-first: No-idea mode available" },
  { icon: Shield, text: "2-cycle rule & hard thresholds (No Zombie Projects)" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              No-Zombie Validation Engine
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stop building zombie projects.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              In 14–30 days, get a deterministic verdict based on real signals: reachability, urgency, and commitment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-gradient-hero text-primary-foreground font-semibold text-base px-8 hover:opacity-90 animate-pulse-glow"
              >
                Start Your Validation Sprint
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary text-base"
              >
                View Sample Output
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">~3 minutes • No card required • Privacy-first</p>

            <ul className="mt-8 space-y-3">
              {microBullets.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative overflow-hidden rounded-xl border border-border glow-primary">
              <img
                src={heroImage}
                alt="SignalSprint validation engine dashboard preview"
                className="w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

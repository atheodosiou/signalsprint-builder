import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Ready for a verdict?
          <span className="text-gradient-primary"> Start your validation sprint.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get a verdict in 14–30 days: PROCEED / NARROW / KILL — before you write code.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
            <FileText className="mr-2 h-4 w-4" />
            View Sample Output
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">~3 minutes • No card required • Privacy-first</p>
      </div>
    </section>
  );
};

export default FinalCTA;

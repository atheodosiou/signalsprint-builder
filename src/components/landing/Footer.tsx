import { Zap, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <Zap className="h-5 w-5 text-primary" />
              SignalSprint
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Business Idea Validation Engine για solo builders.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              We minimize data. No-idea mode available. Τα δεδομένα σου δεν πωλούνται ούτε μοιράζονται.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">Πώς δουλεύει</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Τιμές</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Email capture */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Get 1 validation sprint template (free)
            </h4>
            <div className="mt-3 flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button size="icon" className="bg-gradient-hero text-primary-foreground shrink-0 hover:opacity-90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Χωρίς spam. Unsubscribe οποτεδήποτε.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SignalSprint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Free",
    label: "Signal Check",
    price: "€0",
    desc: "Basic risk map + 3 suggested experiments",
    features: [
      "Risk map (distribution, complexity, time-to-cash)",
      "3 suggested validation experiments",
      "Competition signal overview",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    label: "Sprint Plan",
    price: "€29",
    priceSuffix: "one-time",
    desc: "Full sprint plan με scripts, metrics & kill criteria",
    features: [
      "Ό,τι στο Free",
      "14–30 day sprint plan",
      "Outreach scripts & landing copy prompts",
      "Kill criteria & pivot rules",
      "Export: PDF + Notion checklist",
    ],
    cta: "Get Sprint Plan",
    highlight: true,
  },
  {
    name: "Premium",
    label: "Private Mode + NDA",
    price: "€79",
    priceSuffix: "one-time",
    desc: "Privacy/legal comfort για ευαίσθητες ιδέες",
    features: [
      "Ό,τι στο Pro",
      "No-idea / redacted mode",
      "NDA agreement",
      "Priority support",
    ],
    cta: "Go Private",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Beta pricing
          </Badge>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Τιμές</h2>
          <p className="mt-4 text-muted-foreground">
            Απλά, ξεκάθαρα. Χωρίς subscriptions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all ${
                tier.highlight
                  ? "border-primary bg-card glow-primary"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-primary-foreground">Πιο δημοφιλές</Badge>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-muted-foreground">{tier.name}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{tier.label}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{tier.price}</span>
                  {tier.priceSuffix && (
                    <span className="text-sm text-muted-foreground">/ {tier.priceSuffix}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full font-semibold ${
                  tier.highlight
                    ? "bg-gradient-hero text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Τα ποσά είναι σε EUR. ΦΠΑ εφαρμόζεται βάσει χώρας. Επιστροφή χρημάτων εντός 7 ημερών αν δεν μείνεις ικανοποιημένος.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

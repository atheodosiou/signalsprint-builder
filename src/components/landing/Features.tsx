import { Radio, DollarSign, Gauge, CalendarCheck, EyeOff, FileDown } from "lucide-react";

const features = [
  { icon: Gauge, title: "Deterministic Thresholds", desc: "No vibes, no opinions, no override." },
  { icon: DollarSign, title: "Commitment Gate", desc: "If nobody pays or commits, you don’t build." },
  { icon: Radio, title: "No-Zombie Rule", desc: "Hard kill criteria, 2-cycle enforcement." },
  { icon: CalendarCheck, title: "Signal Blueprint", desc: "Scripts, milestones, and experiments for execution." },
  { icon: EyeOff, title: "Privacy-first / No-idea mode", desc: "Validate without revealing your idea." },
  { icon: FileDown, title: "Export (PDF + Notion)", desc: "Export as a byproduct, not the core product." },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Features</h2>
          <p className="mt-4 text-muted-foreground">
            Deterministic engine. Commitment before code. No Zombie Projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Radio, DollarSign, Gauge, CalendarCheck, EyeOff, FileDown } from "lucide-react";

const features = [
  { icon: Radio, title: "Distribution Score", desc: "Κανάλια & πρόσβαση — πόσο εύκολα φτάνεις στον ICP σου." },
  { icon: DollarSign, title: "Time-to-Cash estimator", desc: "Πώς θα 'κινείται' χρήμα — πόσο γρήγορα μπορείς να δεις revenue signal." },
  { icon: Gauge, title: "Execution Complexity", desc: "Scope control για solo builders — μέτρηση τεχνικής & λειτουργικής πολυπλοκότητας." },
  { icon: CalendarCheck, title: "Validation Sprint blueprint", desc: "Με εβδομαδιαία milestones, outreach scripts, και μετρήσιμα experiments." },
  { icon: EyeOff, title: "Privacy-first inputs", desc: "No-idea / redacted mode — κάνε validation χωρίς να αποκαλύψεις τίποτα." },
  { icon: FileDown, title: "Export: PDF + Notion checklist", desc: "Πάρε το plan σου σε μορφή που μπορείς να εκτελέσεις αμέσως." },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Features</h2>
          <p className="mt-4 text-muted-foreground">
            Κάθε feature σχεδιασμένο για solo builders με περιορισμένο χρόνο.
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

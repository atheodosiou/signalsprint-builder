import { ClipboardList, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Constraints & Context",
    desc: "Συμπληρώνεις constraints & context (skills, χρόνο, αγορά, κανάλια).",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Risk Map",
    desc: "Παίρνεις Risk Map: Distribution, Complexity, Time-to-Cash, Competition signals.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Sprint Plan",
    desc: "Παίρνεις Sprint Plan 14–30 ημερών: outreach scripts, landing copy prompts, metrics & kill criteria.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Πώς δουλεύει
          </h2>
          <p className="mt-4 text-muted-foreground">
            Τρία βήματα από ιδέα σε actionable plan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-primary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary">ΒΗΜΑ {s.step}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

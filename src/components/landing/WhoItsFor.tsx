import { CheckCircle2, XCircle } from "lucide-react";

const forItems = [
  "You want a clear verdict, not endless planning.",
  "You care about evidence, not opinions.",
  "You’re ready to test for real commitment, not just ‘interest.’",
  "You value privacy and want to validate without revealing your idea.",
];

const notForItems = [
  "You want a business plan, not a decision.",
  "You’re looking for generic AI text.",
  "You’re not ready to run real experiments.",
];

const WhoItsFor = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Is it for you?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-primary/20 bg-card p-8">
            <h3 className="font-display text-xl font-bold text-primary">✓ It’s for you if…</h3>
            <ul className="mt-6 space-y-4">
              {forItems.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-muted-foreground">✗ Not for you if…</h3>
            <ul className="mt-6 space-y-4">
              {notForItems.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/50" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;

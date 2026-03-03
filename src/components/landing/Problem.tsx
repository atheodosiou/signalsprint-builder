import { AlertTriangle } from "lucide-react";

const bullets = [
  "42% of startups fail due to no real need.",
  "Founders validate interest, not commitment.",
  "AI tools generate plans — not decisions.",
];

const Problem = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          The real bottleneck is the decision — not the build.
        </h2>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-secondary-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

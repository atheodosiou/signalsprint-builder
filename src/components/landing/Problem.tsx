import { AlertTriangle } from "lucide-react";

const bullets = [
  "Υπερπροσφορά ιδεών → παράλυση",
  "Οι περισσότερες ιδέες πεθαίνουν στο distribution",
  "Χάνεις εβδομάδες σε features πριν μιλήσεις με αγορά",
  "Τα generic validators σε 'χαϊδεύουν' με κείμενο",
];

const Problem = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Το πραγματικό bottleneck{" "}
          <span className="text-gradient-primary">δεν είναι το build.</span>
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

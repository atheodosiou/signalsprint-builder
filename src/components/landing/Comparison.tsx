import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

const tools = ["SignalSprint", "IdeaBuddy", "ValidatorAI", "FounderPal", "PrometAI"];

const rows: { label: string; values: CellValue[] }[] = [
  {
    label: "Business planning suite & templates",
    values: ["no", "yes", "no", "no", "yes"],
  },
  {
    label: "Quick AI feedback / scoring",
    values: ["Structured scoring + plan", "partial", "yes", "yes", "partial"],
  },
  {
    label: "Founder constraints-first (solo dev <10h/week)",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Distribution-first weighting",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Kill criteria & pivot rules",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "No-idea / privacy-first mode",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Actionable 14–30 day sprint plan",
    values: ["yes", "no", "no", "no", "no"],
  },
];

const renderCell = (val: CellValue) => {
  if (val === "yes") return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (val === "no") return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  if (val === "partial") return <Minus className="mx-auto h-5 w-5 text-muted-foreground" />;
  return <span className="text-xs text-primary font-medium">{val}</span>;
};

const Comparison = () => {
  return (
    <section id="comparison" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Πώς διαφέρει από τα γνωστά tools
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-4 py-4 text-left font-medium text-muted-foreground">Feature</th>
                {tools.map((t, i) => (
                  <th
                    key={t}
                    className={`px-4 py-4 text-center font-semibold ${
                      i === 0 ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <td className="px-4 py-3 text-secondary-foreground">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 text-center ${j === 0 ? "bg-primary/5" : ""}`}
                    >
                      {renderCell(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Σημείωση: Η σύγκριση αφορά positioning & workflow, όχι το "ποιο είναι καλύτερο" συνολικά.
          Κάθε εργαλείο εξυπηρετεί διαφορετικό job-to-be-done.
        </p>
      </div>
    </section>
  );
};

export default Comparison;

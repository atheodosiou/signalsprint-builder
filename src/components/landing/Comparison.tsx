import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

const tools = ["SignalSprint", "IdeaBuddy", "ValidatorAI", "FounderPal", "PrometAI"];

const rows: { label: string; values: CellValue[] }[] = [
  {
    label: "Deterministic thresholds",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Commitment gate",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Hard kill rule",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "2-cycle enforcement",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Privacy-first / No-idea mode",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Export (PDF/Notion)",
    values: ["yes", "partial", "partial", "no", "partial"],
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
            How SignalSprint is different
          </h2>
          <p className="mt-4 text-muted-foreground">
            Others: Planning suites, AI scoring, business templates. SignalSprint: Deterministic thresholds, commitment gate, hard kill rule, 2-cycle enforcement.
          </p>
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
          Note: This comparison is between a deterministic validation engine and planning/report tools. Each tool serves a different job-to-be-done.
        </p>
      </div>
    </section>
  );
};

export default Comparison;

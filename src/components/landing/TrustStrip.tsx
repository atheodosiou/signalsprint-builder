import { Shield, EyeOff, Target, UserCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "Privacy-first" },
  { icon: EyeOff, label: "No-idea mode" },
  { icon: Target, label: "Clear kill criteria" },
  { icon: UserCheck, label: "Builder-focused" },
];

const TrustStrip = () => {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Used by solo builders who want structured validation
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

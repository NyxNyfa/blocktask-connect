import { TrendingUp, DollarSign, Briefcase, BadgeCheck } from "lucide-react";

const stats = [
  { label: "Earnings (30d)", value: "1,240 USDC", icon: DollarSign },
  { label: "Active Gigs", value: "6", icon: Briefcase },
  { label: "Conversion", value: "18.4%", icon: TrendingUp },
  { label: "SBT Verified Skills", value: "12", icon: BadgeCheck },
];

export default function SellerStats() {
  return (
    <section id="earnings" className="container mx-auto px-4 pt-10 pb-6">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Seller <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Track earnings, manage gigs, and claim SBT proofs after delivery.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 card-glow">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-bold text-foreground">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


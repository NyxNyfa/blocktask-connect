import { Button } from "@/components/ui/button";
import { BadgeCheck, MessageSquare, ArrowDownToLine } from "lucide-react";

const sales = [
  { id: 1, client: "@0xFounder", gig: "DeFi Dashboard UI/UX", status: "In Progress", badge: "bg-blue-500/20 text-blue-400" },
  { id: 2, client: "@0xTeam", gig: "Solana Audit + Report", status: "Delivered", badge: "bg-green-500/20 text-green-400" },
  { id: 3, client: "@0xTrader", gig: "Telegram Bot (Solana)", status: "Pending", badge: "bg-yellow-500/20 text-yellow-400" },
];

export default function SalesAndActions() {
  return (
    <section id="my-sales" className="container mx-auto px-4 pb-20 pt-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">
            My <span className="gradient-text">Sales</span>
          </h2>

          <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-3 bg-secondary text-sm font-medium text-muted-foreground">
              <span>Client</span>
              <span>Gig</span>
              <span>Status</span>
            </div>

            {sales.map((s) => (
              <div key={s.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 py-4 border-t border-border">
                <span className="text-sm text-foreground font-medium">{s.client}</span>
                <span className="text-sm text-muted-foreground">{s.gig}</span>
                <span>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${s.badge}`}>{s.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Actions</h3>

          <div className="rounded-xl border border-border bg-card p-6 space-y-4 card-glow">
            <Button variant="gradient" className="w-full gap-2">
              <ArrowDownToLine className="h-4 w-4" /> Withdraw Earnings
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <BadgeCheck className="h-4 w-4" /> Claim SBT Proof
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-sm text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-4 w-4" /> Client Messages
            </Button>
            <p className="text-xs text-muted-foreground">
              Withdraw and SBT-claim actions will be wired to escrow + mint flows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Star, ShieldCheck, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const gigs = [
  { id: 1, title: "Audit Solana Programs (Anchor)", rating: 4.9, priceFrom: "100 USDC", sbtVerified: true },
  { id: 2, title: "Design DeFi Dashboard UI/UX", rating: 5.0, priceFrom: "180 USDC", sbtVerified: true },
  { id: 3, title: "Build Telegram trading bot (Solana)", rating: 4.8, priceFrom: "300 USDC", sbtVerified: false },
];

export default function ActiveGigs() {
  return (
    <section id="active-gigs" className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">
          Active <span className="text-primary">Gigs</span>
        </h2>
        <Button variant="gradient" className="gap-2">
          <Plus className="h-4 w-4" /> Create New Gig
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gigs.map((gig) => (
          <div
            key={gig.id}
            className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 card-glow"
          >
            <div className="h-28 bg-secondary flex items-center justify-center">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">G</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-foreground font-medium">{gig.rating}</span>
                </div>
                {gig.sbtVerified ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" /> SBT Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Not Verified
                  </span>
                )}
              </div>

              <p className="text-sm font-medium leading-snug line-clamp-2 text-foreground">{gig.title}</p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm font-semibold text-foreground">
                  From <span className="text-primary">{gig.priceFrom}</span>
                </span>
                <Button variant="secondary" size="sm" className="gap-2">
                  <Pencil className="h-4 w-4" /> Edit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


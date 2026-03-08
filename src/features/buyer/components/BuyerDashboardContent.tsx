const recommendedGigs = [
  { id: 1, title: "Smart Contract Security Audit", category: "Audits", price: "500 USDC" },
  { id: 2, title: "NFT Collection UI Design", category: "UI/UX", price: "180 USDC" },
  { id: 3, title: "DeFi Protocol Frontend", category: "Frontend", price: "420 USDC" },
  { id: 4, title: "Telegram Trading Bot (Solana)", category: "Automation", price: "320 USDC" },
];

const BuyerDashboardContent = () => {
  return (
    <main className="container mx-auto px-4 pt-10 pb-16 space-y-10">
      {/* Greeting */}
      <section className="space-y-2">
        <p className="text-sm text-muted-foreground">Buyer Dashboard</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Welcome back, <span className="gradient-text">0xBuyer</span>
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Pick up where you left off, post a new brief, or review active Web3 gigs you've funded on-chain.
        </p>
      </section>

      {/* Post Brief CTA */}
      <section>
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/20 via-background to-background px-6 py-6 md:px-10 md:py-8 shadow-lg">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Post a Project Brief</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                Get tailored offers for your Web3 needs. Describe your protocol, budget, and timeline, and let
                vetted on-chain talents pitch their best proposals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors">
                Post Brief
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground hover:bg-secondary/60 transition-colors">
                How it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended for you */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold text-foreground">
            Recommended <span className="gradient-text">for you</span>
          </h2>
          <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            Refresh
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible">
          {recommendedGigs.map((gig) => (
            <div
              key={gig.id}
              className="min-w-[240px] rounded-xl border border-border bg-card p-4 space-y-3 card-glow flex-shrink-0"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{gig.category}</p>
              <p className="text-sm font-medium text-foreground line-clamp-2">{gig.title}</p>
              <p className="text-sm text-muted-foreground">
                From <span className="text-primary font-semibold">{gig.price}</span>
              </p>
              <button className="mt-1 inline-flex text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                View details
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuyerDashboardContent;


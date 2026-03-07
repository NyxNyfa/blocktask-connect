import { useState } from "react";
import { Star, ShieldCheck, Link as LinkIcon } from "lucide-react";

const categories = ["All", "Smart Contracts", "UI/UX Design", "Community Management", "Audits"];

const gigs = [
  { id: 1, title: "I will audit your Solana Rust Smart Contract", user: "@0xAuditor", rating: 4.9, price: 100, cat: "Audits", gradient: "from-purple-600 to-blue-600" },
  { id: 2, title: "Build a custom NFT minting dApp with React", user: "@0xDev", rating: 4.8, price: 250, cat: "Smart Contracts", gradient: "from-pink-600 to-purple-600" },
  { id: 3, title: "Design your DeFi protocol dashboard UI/UX", user: "@CryptoDesign", rating: 5.0, price: 180, cat: "UI/UX Design", gradient: "from-cyan-600 to-blue-600" },
  { id: 4, title: "Write & deploy ERC-20 token on Ethereum", user: "@SolidityPro", rating: 4.7, price: 120, cat: "Smart Contracts", gradient: "from-emerald-600 to-teal-600" },
  { id: 5, title: "Manage your Discord & Twitter community", user: "@Web3CM", rating: 4.6, price: 80, cat: "Community Management", gradient: "from-orange-600 to-red-600" },
  { id: 6, title: "Create animated Web3 landing page", user: "@PixelChain", rating: 4.9, price: 200, cat: "UI/UX Design", gradient: "from-violet-600 to-fuchsia-600" },
  { id: 7, title: "Smart contract security audit & report", user: "@AuditDAO", rating: 5.0, price: 500, cat: "Audits", gradient: "from-red-600 to-orange-600" },
  { id: 8, title: "Build Telegram trading bot for Solana", user: "@BotBuilder", rating: 4.8, price: 300, cat: "Smart Contracts", gradient: "from-indigo-600 to-purple-600" },
];

const Marketplace = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? gigs : gigs.filter((g) => g.cat === active);

  return (
    <section id="marketplace" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">
        Trending <span className="gradient-text">Services</span>
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "gradient-bg text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((gig) => (
          <div
            key={gig.id}
            className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 card-glow cursor-pointer"
          >
            {/* Thumbnail */}
            <div className={`h-36 bg-gradient-to-br ${gig.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

            <div className="p-4 space-y-3">
              {/* User */}
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  {gig.user[1].toUpperCase()}
                </div>
                <span className="text-sm text-muted-foreground">{gig.user}</span>
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              </div>

              {/* Title */}
              <p className="text-sm font-medium leading-snug line-clamp-2 text-foreground">{gig.title}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-foreground font-medium">{gig.rating}</span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="flex items-center gap-1 text-xs text-accent">
                  <LinkIcon className="h-3 w-3" /> On-Chain
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {gig.price} <span className="text-muted-foreground font-normal">USDC</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;

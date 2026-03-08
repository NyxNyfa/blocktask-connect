import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10 text-sm">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="FreeWork Chain" className="h-6 w-auto" />
              <span className="font-semibold">
                Free<span className="gradient-text">Work Chain</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              Decentralized marketplace for Web3 talent with on-chain escrow and SBT-verified resumes.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Categories
            </h3>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">UI/UX</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Audits</a></li>
            </ul>
          </div>

          {/* For Clients */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              For Clients
            </h3>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Post a Brief</a></li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              For Freelancers
            </h3>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Become a Talent</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Claim SBTs</a></li>
            </ul>
          </div>

          {/* Web3 Ecosystem / Company */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Web3 Ecosystem
              </h3>
              <ul className="space-y-1 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Solana Integration</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Escrow Smart Contracts</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Company
              </h3>
              <ul className="space-y-1 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-border/60 bg-background/40">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 FreeWork Chain. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-wide">Follow us</span>
            <div className="flex items-center gap-3">
              <a href="#" className="h-6 w-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                {/* Placeholder for X icon */}
                <span className="text-[10px]">X</span>
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                {/* Placeholder for Discord icon */}
                <span className="text-[10px]">Δ</span>
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                {/* Placeholder for Email icon */}
                <span className="text-[10px]">@</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

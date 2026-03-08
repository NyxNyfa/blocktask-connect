import { useState } from "react";
import { Search, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [connected, setConnected] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="FreeWork Chain" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight">
            Free<span className="gradient-text">Work Chain</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center relative max-w-md flex-1 mx-8">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find Web3 talents..."
            className="w-full rounded-lg border border-border bg-secondary pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Wallet */}
        <Button
          variant={connected ? "secondary" : "gradient"}
          size="sm"
          onClick={() => setConnected(!connected)}
          className="gap-2"
        >
          <Wallet className="h-4 w-4" />
          {connected ? (
            <span className="flex items-center gap-2">
              <span className="text-muted-foreground">0x...4A2b</span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">150 USDC</span>
            </span>
          ) : (
            "Connect Wallet"
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

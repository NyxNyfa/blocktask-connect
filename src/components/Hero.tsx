import { ArrowRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/web3/useWallet";

const Hero = () => {
  const { wallet, connect, disconnect } = useWallet();
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Hire Web3 Talent.{" "}
            <span className="gradient-text">Zero Friction.</span>{" "}
            Immutable Proof.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The decentralized Fiverr. Pay with stablecoins via smart contracts,
            verify skills via On-Chain Soulbound Tokens (SBT).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="gradient" size="lg" className="gap-2">
              Explore Gigs <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="gradient-outline"
              size="lg"
              className="gap-2"
              onClick={() => (wallet.connected ? disconnect() : connect())}
            >
              <Wallet className="h-4 w-4" /> {wallet.connected ? "Disconnect" : "Connect Wallet"}
            </Button>
          </div>
          <div className="flex justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div>
              <span className="text-foreground font-semibold text-lg">10k+</span>
              <p>Talents</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-foreground font-semibold text-lg">$2M+</span>
              <p>Volume</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-foreground font-semibold text-lg">0.001 SOL</span>
              <p>Avg Fee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { label: "DeFi UI Built" },
  { label: "10+ Contracts Deployed" },
  { label: "Superteam Verified" },
  { label: "Hackathon Winner" },
];

const FreelancerProfile = () => {
  return (
    <section id="profile" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">
        Freelancer <span className="text-primary">Profile</span>
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Profile + Description */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex items-start gap-5">
            <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shrink-0">
              0x
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">@0xAuditor</h3>
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground mt-1">Senior Rust Dev | 3x Hackathon Winner</p>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-foreground font-medium">4.9</span>
                <span className="text-muted-foreground">(127 reviews)</span>
              </div>
            </div>
          </div>

          {/* SBT Badges */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">On-Chain Resume (SBTs)</h4>
            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-2">
                  <div className="sbt-badge h-20 w-20 bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center max-w-[80px]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-foreground">Service Description</h4>
            <p className="text-muted-foreground leading-relaxed">
              I will perform a comprehensive security audit of your Solana Rust smart contract. This includes
              static analysis, manual code review, vulnerability assessment, and a detailed report with
              remediation suggestions. I've audited over 50 protocols and have extensive experience with
              Anchor, native Solana programs, and cross-program invocations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Deliverables include a full PDF audit report, inline code comments, and a follow-up review
              after fixes are implemented.
            </p>
          </div>
        </div>

        {/* Right: CTA Box */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-6 space-y-5 sticky top-24">
            <div className="text-3xl font-bold text-foreground">
              100 <span className="text-lg text-muted-foreground font-normal">USDC</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>3 Days Delivery</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Full security audit report</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Inline code annotations</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Post-fix review included</li>
            </ul>
            <Button variant="gradient" className="w-full" size="lg">
              Fund Escrow & Hire
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Funds are held in a smart contract until you approve delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerProfile;
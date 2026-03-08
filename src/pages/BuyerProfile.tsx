import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useWallet } from "@/web3/useWallet";

const BuyerProfile = () => {
  const { wallet } = useWallet();

  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-10 space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Buyer <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Manage your account details, wallet connection, and hiring history for FreeWork Chain.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Account</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: buyer@example.xyz</p>
                  <p>Display name: 0xBuyer</p>
                  <p>Preferred chain: Solana</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Hiring History</h2>
                <p className="text-sm text-muted-foreground">
                  Recent hires will appear here, including escrow amounts, delivery dates, and review status.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Wallet Status
                </h2>
                <p className="text-sm text-foreground">
                  {wallet.connected ? "Connected" : "Not connected"}
                </p>
                {wallet.connected && (
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>Address: {wallet.address}</p>
                    <p>Balance: {wallet.balanceUSDC} USDC (mock)</p>
                  </div>
                )}
              </div>
            </aside>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BuyerProfile;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";
import { WalletGate } from "@/web3/WalletGate";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-10">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Manage <span className="gradient-text">Orders</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Review and manage all active smart contract escrows associated with your gigs.
              </p>
            </div>
            <Link
              to="/seller/dashboard"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
        <WalletGate label="dashboard">
          <Dashboard />
        </WalletGate>
        <Footer />
      </div>
    </div>
  );
};

export default ManageOrders;


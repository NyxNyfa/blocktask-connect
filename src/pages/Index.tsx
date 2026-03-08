import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import BuyerDashboardContent from "@/features/buyer/components/BuyerDashboardContent";
import { useWallet } from "@/web3/useWallet";

const Index = () => {
  const { wallet } = useWallet();
  const isConnected = wallet.connected;

  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        {isConnected ? (
          <>
            <BuyerDashboardContent />
            <Marketplace />
          </>
        ) : (
          <>
            <Hero />
            <Marketplace />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Index;

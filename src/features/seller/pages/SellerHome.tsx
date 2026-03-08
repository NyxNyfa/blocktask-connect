import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellerStats from "../components/SellerStats";
import ActiveGigs from "../components/ActiveGigs";
import SalesAndActions from "../components/SalesAndActions";
import { WalletGate } from "@/web3/WalletGate";

export default function SellerHome() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <WalletGate label="seller dashboard">
          <SellerStats />
          <ActiveGigs />
          <SalesAndActions />
        </WalletGate>
        <Footer />
      </div>
    </div>
  );
}


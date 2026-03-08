import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyerDashboardContent from "@/features/buyer/components/BuyerDashboardContent";

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <BuyerDashboardContent />
        <Footer />
      </div>
    </div>
  );
};

export default BuyerDashboard;


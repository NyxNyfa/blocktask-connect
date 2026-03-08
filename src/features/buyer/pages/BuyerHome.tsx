import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import FreelancerProfile from "@/components/FreelancerProfile";
import Footer from "@/components/Footer";

export default function BuyerHome() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marketplace />
        <FreelancerProfile />
        <Footer />
      </div>
    </div>
  );
}


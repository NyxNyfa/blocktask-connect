import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import FreelancerProfile from "@/components/FreelancerProfile";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
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
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import FreelancerProfile from "@/components/FreelancerProfile";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marketplace />
      <FreelancerProfile />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;

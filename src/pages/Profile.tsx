import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreelancerProfile from "@/components/FreelancerProfile";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <FreelancerProfile />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;


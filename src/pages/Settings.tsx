import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="animated-bg">
        <div className="animated-bg-orb" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-10 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Account <span className="gradient-text">Settings</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Configure notification preferences, security, and account options. (Placeholder page for now.)
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;


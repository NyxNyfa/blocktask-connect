import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FreeWork Chain" className="h-6 w-auto" />
            <span className="font-semibold">
              Free<span className="gradient-text">Work Chain</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Smart Contract Audit</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            <a href="mailto:contact@example.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 FreeWork Chain Decentralized Protocol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

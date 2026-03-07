import { Boxes } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Boxes className="h-5 w-5 text-primary" />
            <span className="font-semibold">
              Block<span className="gradient-text">Task</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Smart Contract Audit</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 BlockTask Decentralized Protocol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

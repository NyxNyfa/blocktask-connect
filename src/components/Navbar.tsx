import { LogOut, Search, Wallet, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useAppMode } from "@/modes/useAppMode";
import { useWallet } from "@/web3/useWallet";
import { NavLink } from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const { mode, setMode } = useAppMode();
  const { wallet, connect, disconnect } = useWallet();
  const isConnected = wallet.connected;
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to={!isConnected || mode === "buyer" ? "/" : "/seller/dashboard"}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="FreeWork Chain" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tight">
              Free<span className="gradient-text">Work Chain</span>
            </span>
          </Link>
          <span className="hidden sm:inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
            {mode === "buyer" ? "Buyer Mode" : "Seller Mode"}
          </span>
        </div>

        {/* Center */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {mode === "seller" && (
            <NavLink
              to="/seller/dashboard"
              className="hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Seller Dashboard
            </NavLink>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Search (Buyer only) */}
          {mode === "buyer" ? (
            <div className="hidden md:flex items-center relative max-w-md w-[340px]">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Find Web3 talents..."
                className="w-full rounded-lg border border-border bg-secondary pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          ) : null}

          {/* Wallet */}
          {isConnected ? (
            <div className="flex items-center gap-1">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2 pr-3"
                onClick={connect}
              >
                <Wallet className="h-4 w-4" />
                <span className="text-muted-foreground">
                  {wallet.address ?? "0x...4F8A"}
                </span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                  {wallet.balanceUSDC} USDC
                </span>
              </Button>
              <button
                type="button"
                onClick={disconnect}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Disconnect wallet"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              onClick={connect}
              className="gap-2"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          )}

          {/* Profile / Mode menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary text-xs font-semibold">
                    {mode === "buyer" ? "B" : "S"}
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {mode === "buyer" ? (
                <>
                  <DropdownMenuItem
                    onSelect={() => {
                      setMode("seller");
                      navigate("/seller/dashboard");
                    }}
                    className="font-semibold text-primary"
                  >
                    Switch to Selling
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/buyer/profile");
                    }}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/buyer/orders");
                    }}
                  >
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/settings");
                    }}
                  >
                    Settings
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem
                    onSelect={() => {
                      setMode("buyer");
                      navigate("/buyer/dashboard");
                    }}
                    className="font-semibold text-primary"
                  >
                    Switch to Buying
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/seller/profile");
                    }}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/seller/dashboard");
                    }}
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/manage-orders");
                    }}
                  >
                    Manage Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate("/seller/dashboard#earnings");
                    }}
                  >
                    Earnings
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

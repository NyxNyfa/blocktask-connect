import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ManageOrders from "./pages/ManageOrders";
import Profile from "./pages/Profile";
import SellerHome from "@/features/seller/pages/SellerHome";
import BuyerOrders from "./pages/BuyerOrders";
import BuyerProfile from "./pages/BuyerProfile";
import Settings from "./pages/Settings";
import BuyerDashboard from "./pages/BuyerDashboard";
import { AppModeProvider } from "@/modes/AppModeProvider";
import { WalletProvider } from "@/web3/WalletProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WalletProvider>
        <AppModeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
              <Route path="/buyer/orders" element={<BuyerOrders />} />
              <Route path="/buyer/profile" element={<BuyerProfile />} />
              <Route path="/seller/dashboard" element={<SellerHome />} />
              <Route path="/seller/profile" element={<Profile />} />
              <Route path="/manage-orders" element={<ManageOrders />} />
               <Route path="/settings" element={<Settings />} />
              {/* legacy alias */}
              <Route path="/profile" element={<Navigate to="/seller/profile" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AppModeProvider>
      </WalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

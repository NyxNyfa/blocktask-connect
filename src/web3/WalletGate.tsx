import type React from "react";
import { useWallet } from "./useWallet";

type WalletGateProps = {
  children: React.ReactNode;
  label?: string;
};

export function WalletGate({ children, label = "dashboard" }: WalletGateProps) {
  const { wallet } = useWallet();

  if (wallet.connected) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="opacity-40 pointer-events-none select-none">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/60 backdrop-blur-md" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative overflow-hidden rounded-2xl border border-dashed border-border bg-card/90 px-8 py-8 text-center shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div className="relative space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Connect Wallet to view your data.
            </h2>
            <p className="mx-auto max-w-md text-sm text-muted-foreground">
              Connect your Solana wallet to access {label} metrics, escrow activity, and on-chain insights for your FreeWork Chain account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


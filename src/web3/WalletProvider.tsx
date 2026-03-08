import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { WALLET_STORAGE_KEY, type WalletState } from "./walletTypes";

type WalletContextValue = {
  wallet: WalletState;
  connect: () => void;
  disconnect: () => void;
};

const WalletContext = createContext<WalletContextValue | null>(null);

const DEFAULT_WALLET: WalletState = {
  connected: false,
  address: null,
  balanceUSDC: 0,
};

function readStoredWallet(): WalletState {
  if (typeof window === "undefined") return DEFAULT_WALLET;
  try {
    const raw = window.localStorage.getItem(WALLET_STORAGE_KEY);
    if (!raw) return DEFAULT_WALLET;
    const parsed = JSON.parse(raw) as Partial<WalletState>;
    return {
      connected: Boolean(parsed.connected),
      address: typeof parsed.address === "string" ? parsed.address : null,
      balanceUSDC: typeof parsed.balanceUSDC === "number" ? parsed.balanceUSDC : 0,
    };
  } catch {
    return DEFAULT_WALLET;
  }
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>(() => readStoredWallet());

  useEffect(() => {
    setWallet(readStoredWallet());
  }, []);

  const persist = useCallback((next: WalletState) => {
    setWallet(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const connect = useCallback(() => {
    // Placeholder for Phantom/Solana adapter integration.
    persist({
      connected: true,
      address: "0x...4F8A",
      balanceUSDC: 150,
    });
  }, [persist]);

  const disconnect = useCallback(() => {
    persist(DEFAULT_WALLET);
  }, [persist]);

  const value = useMemo<WalletContextValue>(() => ({ wallet, connect, disconnect }), [wallet, connect, disconnect]);

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWalletContext() {
  const ctx = React.useContext(WalletContext);
  if (!ctx) throw new Error("useWalletContext must be used within <WalletProvider />");
  return ctx;
}


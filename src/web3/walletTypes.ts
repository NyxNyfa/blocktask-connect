export type WalletState = {
  connected: boolean;
  address: string | null;
  balanceUSDC: number;
};

export const WALLET_STORAGE_KEY = "fwc:wallet";


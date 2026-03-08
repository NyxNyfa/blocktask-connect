import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { APP_MODE_STORAGE_KEY, DEFAULT_APP_MODE, type AppMode } from "./appMode";

type AppModeContextValue = {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
};

const AppModeContext = createContext<AppModeContextValue | null>(null);

function readStoredMode(): AppMode {
  if (typeof window === "undefined") return DEFAULT_APP_MODE;
  const raw = window.localStorage.getItem(APP_MODE_STORAGE_KEY);
  return raw === "seller" || raw === "buyer" ? raw : DEFAULT_APP_MODE;
}

export function AppModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<AppMode>(() => readStoredMode());

  useEffect(() => {
    setModeState(readStoredMode());
  }, []);

  const setMode = useCallback((next: AppMode) => {
    setModeState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(APP_MODE_STORAGE_KEY, next);
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "buyer" ? "seller" : "buyer"));
  }, [setMode]);

  const value = useMemo<AppModeContextValue>(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

  return <AppModeContext.Provider value={value}>{children}</AppModeContext.Provider>;
}

export function useAppModeContext() {
  const ctx = React.useContext(AppModeContext);
  if (!ctx) throw new Error("useAppModeContext must be used within <AppModeProvider />");
  return ctx;
}


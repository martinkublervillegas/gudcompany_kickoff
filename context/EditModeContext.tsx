"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

const STORAGE_KEY = "kickoff_texts";

interface EditModeCtx {
  editMode: boolean;
  toggleEditMode: () => void;
  getText: (id: string, fallback: string) => string;
  setText: (id: string, value: string) => void;
}

const Ctx = createContext<EditModeCtx | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [texts, setTexts] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {
      return {};
    }
  });

  const getText = useCallback(
    (id: string, fallback: string) => texts[id] ?? fallback,
    [texts]
  );

  const setText = useCallback((id: string, value: string) => {
    setTexts((prev) => {
      const next = { ...prev, [id]: value };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  return (
    <Ctx.Provider value={{ editMode, toggleEditMode, getText, setText }}>
      {children}
    </Ctx.Provider>
  );
}

export function useEditMode() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useEditMode must be inside EditModeProvider");
  return ctx;
}

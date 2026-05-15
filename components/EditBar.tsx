"use client";

import { Pencil, Check } from "lucide-react";
import { useEditMode } from "@/context/EditModeContext";

export default function EditBar() {
  const { editMode, toggleEditMode } = useEditMode();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: editMode ? "var(--gd-green)" : "var(--gd-dark)",
        border: editMode ? "none" : "1px solid rgba(255,255,255,0.12)",
        borderRadius: 100,
        padding: "10px 20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        cursor: "pointer",
        transition: "background .2s",
        userSelect: "none",
      }}
      onClick={toggleEditMode}
    >
      {editMode ? <Check size={14} strokeWidth={2} /> : <Pencil size={14} strokeWidth={1.5} />}
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "var(--white)",
          letterSpacing: "0.3px",
        }}
      >
        {editMode ? "Guardando automáticamente…" : "Editar texto"}
      </span>
    </div>
  );
}

"use client";

import { Home, Activity, Layers, Rocket } from "lucide-react";

export type Tab = "inicio" | "diagnostico" | "metodologia" | "proyectos";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "inicio",       label: "Inicio",             icon: <Home size={18} /> },
  { id: "diagnostico",  label: "Diagnóstico",         icon: <Activity size={18} /> },
  { id: "metodologia",  label: "Metodología",         icon: <Layers size={18} /> },
  { id: "proyectos",    label: "Proyectos Iniciales", icon: <Rocket size={18} /> },
];

interface SidebarProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 240,
        height: "100vh",
        background: "var(--white)",
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
        borderRight: "1px solid var(--gray-100)",
      }}
    >
      {/* Brand */}
      <div
        style={{
          padding: "28px 24px 24px",
          borderBottom: "1px solid var(--gray-100)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--gray-400)",
            marginBottom: 6,
          }}
        >
          Kick-off · Mayo 2025
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "var(--gd-dark)",
            lineHeight: 1.3,
          }}
        >
          Gudcompany{" "}
          <span style={{ color: "var(--gd-green)" }}>× Steps</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 12px" }}>
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 14px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                marginBottom: 4,
                background: isActive ? "var(--gd-green-l)" : "transparent",
                color: isActive ? "var(--gd-green-d)" : "var(--gray-600)",
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                textAlign: "left",
                transition: "background .15s, color .15s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background = "var(--gray-50)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gd-dark)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--gray-600)";
                }
              }}
            >
              {/* Active indicator */}
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 3,
                    height: 20,
                    borderRadius: 2,
                    background: "var(--gd-green)",
                  }}
                />
              )}
              <span style={{ opacity: isActive ? 1 : 0.6 }}>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "16px 24px",
          borderTop: "1px solid var(--gray-100)",
          fontSize: 11,
          color: "var(--gray-200)",
          lineHeight: 1.5,
        }}
      >
        Confidencial · Steps
      </div>
    </aside>
  );
}

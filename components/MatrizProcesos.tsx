"use client";

import { useState } from "react";

type Status = "active" | "validated" | "pending" | "none";

interface Proceso {
  nombre: string;
  existia: boolean;
  cols: Status[];
}

const COLUMNAS = ["Diagramado", "Plataformas", "Automatizaciones", "CDG & Dashboards", "Documentación"];

const STATUS_COLOR: Record<Status, string> = {
  active: "#4A9E6A",
  validated: "#E8C84A",
  pending: "#8EB8D8",
  none: "transparent",
};

const STATUS_LABEL: Record<Status, string> = {
  active: "Uso correcto / activo equipo",
  validated: "Validado por equipo",
  pending: "Pendiente validación",
  none: "Sin avance",
};

const PLACEHOLDER_PROCESOS: Proceso[] = [
  { nombre: "Proceso A", existia: true,  cols: ["active",    "active",    "pending", "none",  "none"] },
  { nombre: "Proceso B", existia: true,  cols: ["validated", "validated", "none",    "none",  "none"] },
  { nombre: "Proceso C", existia: true,  cols: ["active",    "active",    "active",  "none",  "none"] },
  { nombre: "Proceso D", existia: false, cols: ["pending",   "pending",   "none",    "none",  "none"] },
  { nombre: "Proceso E", existia: true,  cols: ["active",    "active",    "active",  "active","none"] },
  { nombre: "Proceso F", existia: false, cols: ["active",    "active",    "none",    "none",  "none"] },
  { nombre: "Proceso G", existia: false, cols: ["active",    "none",      "none",    "none",  "none"] },
];

function StatusBar({ status }: { status: Status }) {
  if (status === "none") return <div style={{ height: 18 }} />;
  return (
    <div
      style={{
        height: 18,
        borderRadius: 4,
        background: STATUS_COLOR[status],
        opacity: 0.85,
        width: "85%",
        margin: "0 auto",
      }}
    />
  );
}

export default function MatrizProcesos() {
  const [procesos] = useState<Proceso[]>(PLACEHOLDER_PROCESOS);

  return (
    <div>
      <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "var(--gd-dark)",
            letterSpacing: "-0.4px",
          }}
        >
          Madurez de flujos de procesos
        </h3>
        <div style={{ display: "flex", gap: 16 }}>
          {(["pending", "validated", "active"] as Status[]).map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: STATUS_COLOR[s],
                  opacity: 0.85,
                }}
              />
              <span style={{ fontSize: 11, color: "var(--gray-600)", fontWeight: 500 }}>
                {STATUS_LABEL[s]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          border: "1.5px solid var(--gray-100)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          background: "var(--white)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px repeat(5, 1fr)",
            background: "var(--off-white)",
            borderBottom: "1.5px solid var(--gray-100)",
          }}
        >
          <div style={thStyle}>Flujo</div>
          {COLUMNAS.map((col) => (
            <div key={col} style={{ ...thStyle, textAlign: "center", color: "var(--gd-green)" }}>
              {col}
            </div>
          ))}
        </div>

        {/* Rows */}
        {procesos.map((p, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "200px repeat(5, 1fr)",
              borderBottom: i < procesos.length - 1 ? "1px solid var(--gray-100)" : "none",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--gd-dark)",
                borderRight: "1px solid var(--gray-100)",
              }}
            >
              {p.nombre}{" "}
              <span style={{ fontWeight: 400, color: "var(--gray-400)", fontSize: 11 }}>
                [{p.existia ? "Sí" : "No"}]
              </span>
            </div>
            {p.cols.map((status, j) => (
              <div
                key={j}
                style={{
                  padding: "10px 8px",
                  borderRight: j < p.cols.length - 1 ? "1px solid var(--gray-100)" : "none",
                }}
              >
                <StatusBar status={status} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  color: "var(--gray-600)",
};

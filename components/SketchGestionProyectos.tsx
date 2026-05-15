const COLUMNAS = [
  {
    label: "Por hacer",
    color: "var(--gray-400)",
    bg: "rgba(154,154,148,0.1)",
    tareas: [
      { titulo: "Definir estructura de proyectos", tag: "Setup", prioridad: "alta" },
      { titulo: "Configurar permisos de equipo", tag: "Setup", prioridad: "media" },
      { titulo: "Plantilla de reuniones", tag: "Templates", prioridad: "baja" },
    ],
  },
  {
    label: "En progreso",
    color: "#80BAD8",
    bg: "rgba(128,186,216,0.12)",
    tareas: [
      { titulo: "Mapeo de proyectos activos", tag: "Proyectos", prioridad: "alta" },
      { titulo: "Onboarding Steps → Gudcompany", tag: "Setup", prioridad: "alta" },
    ],
  },
  {
    label: "Revisión",
    color: "#E8C84A",
    bg: "rgba(232,200,74,0.12)",
    tareas: [
      { titulo: "Roadmap tecnológico Q3", tag: "Estrategia", prioridad: "media" },
    ],
  },
  {
    label: "Completado",
    color: "#4ECB9E",
    bg: "rgba(58,142,126,0.12)",
    tareas: [
      { titulo: "Kick-off inicial", tag: "Hitos", prioridad: "baja" },
      { titulo: "Diagnóstico de procesos", tag: "Diagnóstico", prioridad: "baja" },
    ],
  },
];

const PRIORIDAD_COLOR: Record<string, string> = {
  alta:  "rgba(232,112,30,0.85)",
  media: "rgba(232,200,74,0.85)",
  baja:  "rgba(154,154,148,0.7)",
};

export default function SketchGestionProyectos() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Gestión de proyectos
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Vista de tablero centralizada para seguir el estado de todas las iniciativas en curso.
        </p>
      </div>

      <div
        style={{
          border: "1.5px solid var(--gray-100)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          background: "var(--white)",
          position: "relative",
        }}
      >
        {/* Topbar */}
        <div style={{ background: "#1A1C1A", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #2A2C2A" }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#FF5F57","#FFBD2E","#28CA41"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
          </div>
          <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>Gudcompany · Proyectos</span>
          <div style={{ display: "flex", gap: 6 }}>
            {["Tabla", "Tablero", "Lista"].map((v, i) => (
              <span key={v} style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 5, background: i === 1 ? "rgba(58,142,126,0.25)" : "rgba(255,255,255,0.06)", color: i === 1 ? "#4ECB9E" : "rgba(255,255,255,0.35)", border: i === 1 ? "1px solid rgba(58,142,126,0.4)" : "1px solid rgba(255,255,255,0.08)" }}>
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Subheader */}
        <div style={{ background: "#1E201E", padding: "10px 16px", display: "flex", alignItems: "center", gap: 16, borderBottom: "1px solid #262826" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>Proyectos Gudcompany × Steps</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            {["Filtrar", "+ Nueva tarea"].map((l, i) => (
              <span key={l} style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: i === 1 ? "rgba(58,142,126,0.3)" : "rgba(255,255,255,0.06)", color: i === 1 ? "#4ECB9E" : "rgba(255,255,255,0.4)", border: i === 1 ? "1px solid rgba(58,142,126,0.4)" : "1px solid rgba(255,255,255,0.1)", cursor: "default" }}>
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Board */}
        <div style={{ background: "#181A18", padding: 14, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, position: "relative", zIndex: 1 }}>
          {COLUMNAS.map((col) => (
            <div key={col.label}>
              {/* Column header */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px", borderRadius: "7px 7px 0 0", background: col.bg, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: col.color }} />
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: col.color }}>{col.label}</span>
                <span style={{ marginLeft: "auto", fontSize: 9, fontWeight: 700, color: col.color, opacity: 0.7 }}>{col.tareas.length}</span>
              </div>

              {/* Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {col.tareas.map((t) => (
                  <div key={t.titulo} style={{ background: "#252725", border: "1px solid #333533", borderRadius: 8, padding: "10px 11px" }}>
                    <div style={{ fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.82)", lineHeight: 1.4, marginBottom: 8 }}>{t.titulo}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 9.5, fontWeight: 600, padding: "2px 6px", borderRadius: 4, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.38)" }}>{t.tag}</span>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: PRIORIDAD_COLOR[t.prioridad] }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

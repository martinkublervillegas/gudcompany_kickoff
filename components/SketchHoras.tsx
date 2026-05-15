const DIAS = ["Lun", "Mar", "Mié", "Jue", "Vie"];

const PROYECTOS = [
  { nombre: "Gudcompany",      tag: "kickoff",  color: "#2D8E7E", bg: "rgba(45,142,126,0.11)",  horas: [4, 3, 4, 4, 3] },
  { nombre: "People Platz",    tag: "activo",   color: "#5B8DB8", bg: "rgba(91,141,184,0.13)",  horas: [2, 2, 2, 2, 2] },
  { nombre: "Nexen Solutions", tag: "activo",   color: "#E8701E", bg: "rgba(232,112,30,0.11)",  horas: [2, 3, 2, 0, 0] },
  { nombre: "Steps interno",   tag: "interno",  color: "#9CA3AF", bg: "rgba(156,163,175,0.12)", horas: [0, 0, 0, 2, 3] },
];

const TABS = ["F. Cerda", "M.J. Onetto", "G. Merino", "F.N. Neira"];

const totalesDia = DIAS.map((_, i) => PROYECTOS.reduce((s, p) => s + p.horas[i], 0));
const totalGeneral = totalesDia.reduce((s, t) => s + t, 0);
const facturables = PROYECTOS.slice(0, 3).reduce((s, p) => s + p.horas.reduce((a, b) => a + b, 0), 0);
const utilizacion = Math.round((totalGeneral / 40) * 100);

export default function SketchHoras() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Registro de horas
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Plataforma interna para registrar horas por proyecto, persona y semana — base para calcular utilización y facturación.
        </p>
      </div>

      <div style={{ border: "1.5px solid var(--gray-100)", borderRadius: "var(--radius)", overflow: "hidden", background: "var(--white)" }}>

        {/* Topbar */}
        <div style={{ background: "#1A1C1A", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #2A2C2A" }}>
          <div style={{ display: "flex", gap: 5 }}>
            {["#FF5F57","#FFBD2E","#28CA41"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
          </div>
          <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>Steps · Registro de Horas</span>
          <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: "rgba(58,142,126,0.3)", color: "#4ECB9E", border: "1px solid rgba(58,142,126,0.4)", cursor: "default" }}>
            + Registrar
          </span>
        </div>

        {/* Subheader */}
        <div style={{ padding: "12px 20px", borderBottom: "1px solid var(--gray-100)", display: "flex", alignItems: "center", gap: 16, background: "#FAFAF9" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gd-dark)" }}>Semana actual</div>
            <div style={{ fontSize: 11, color: "var(--gray-400)" }}>19 – 23 mayo 2026</div>
          </div>
          <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
            {["‹", "›"].map((ch) => (
              <span key={ch} style={{ width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, border: "1px solid var(--gray-100)", fontSize: 13, color: "var(--gray-400)", cursor: "default", background: "var(--white)" }}>{ch}</span>
            ))}
          </div>
        </div>

        {/* Person tabs */}
        <div style={{ padding: "0 20px", borderBottom: "1px solid var(--gray-100)", display: "flex", gap: 0, background: "var(--white)", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <div key={t} style={{
              padding: "10px 14px", fontSize: 11.5, fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? "var(--gd-green)" : "var(--gray-400)",
              borderBottom: i === 0 ? "2px solid var(--gd-green)" : "2px solid transparent",
              cursor: "default", whiteSpace: "nowrap",
            }}>
              {t}
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#F8F9FA" }}>
                <th style={{ padding: "9px 20px", textAlign: "left", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--gray-400)", borderBottom: "1px solid var(--gray-100)", width: "36%" }}>Proyecto</th>
                {DIAS.map(d => (
                  <th key={d} style={{ padding: "9px 12px", textAlign: "center", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--gray-400)", borderBottom: "1px solid var(--gray-100)" }}>{d}</th>
                ))}
                <th style={{ padding: "9px 16px", textAlign: "center", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--gray-400)", borderBottom: "1px solid var(--gray-100)" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {PROYECTOS.map((p, idx) => {
                const total = p.horas.reduce((a, b) => a + b, 0);
                return (
                  <tr key={p.nombre} style={{ borderBottom: "1px solid var(--gray-100)", background: idx % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                    <td style={{ padding: "10px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 3, height: 22, borderRadius: 2, background: p.color, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--gd-dark)" }}>{p.nombre}</div>
                          <span style={{ fontSize: 9.5, fontWeight: 600, padding: "1px 6px", borderRadius: 4, background: p.bg, color: p.color }}>{p.tag}</span>
                        </div>
                      </div>
                    </td>
                    {p.horas.map((h, di) => (
                      <td key={di} style={{ padding: "10px 12px", textAlign: "center" }}>
                        {h > 0 ? (
                          <span style={{ display: "inline-block", minWidth: 36, padding: "4px 8px", borderRadius: 6, background: p.bg, color: p.color, fontSize: 12, fontWeight: 700 }}>
                            {h}h
                          </span>
                        ) : (
                          <span style={{ color: "var(--gray-200)", fontSize: 14 }}>—</span>
                        )}
                      </td>
                    ))}
                    <td style={{ padding: "10px 16px", textAlign: "center", fontWeight: 700, color: total > 0 ? "var(--gd-dark)" : "var(--gray-200)", fontSize: 13 }}>
                      {total > 0 ? `${total}h` : "—"}
                    </td>
                  </tr>
                );
              })}

              {/* Total row */}
              <tr style={{ background: "#F3F4F6", borderTop: "2px solid var(--gray-100)" }}>
                <td style={{ padding: "10px 20px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--gray-400)" }}>Total diario</td>
                {totalesDia.map((t, i) => (
                  <td key={i} style={{ padding: "10px 12px", textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--gd-dark)" }}>{t}h</td>
                ))}
                <td style={{ padding: "10px 16px", textAlign: "center", fontSize: 14, fontWeight: 900, color: "var(--gd-dark)" }}>{totalGeneral}h</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stats bar */}
        <div style={{ padding: "12px 20px", background: "var(--gd-dark)", display: "flex", gap: 28, flexWrap: "wrap" }}>
          {[
            { label: "Utilización",      value: `${utilizacion}%`,   up: true  },
            { label: "Horas facturables", value: `${facturables}h`,   up: null  },
            { label: "Capacidad semanal", value: "40h",               up: null  },
          ].map(({ label, value, up }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: up === null ? "rgba(255,255,255,0.8)" : "#4ECB9E" }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

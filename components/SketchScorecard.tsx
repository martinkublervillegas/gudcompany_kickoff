type QStatus = "on_track" | "at_risk" | "off_track" | "projected" | "empty";
type QCell = { val: string; status: QStatus };

type Row = {
  area: string;
  color: string;
  indicator: string;
  meta: string;
  resp: string;
  initials: string;
  initColor: string;
  q1: QCell; q2: QCell; q3: QCell; q4: QCell;
};

const AC: Record<string, string> = {
  Estrategia:   "#3A8E7E",
  Organización: "#5B8DB8",
  Solutions:    "#E8701E",
  Finanzas:     "#7B6FE8",
  Personas:     "#2A9D8F",
  Tecnología:   "#C09028",
};

const SS: Record<QStatus, { bg: string; color: string }> = {
  on_track:  { bg: "rgba(45,142,126,0.13)", color: "#1E7060" },
  at_risk:   { bg: "rgba(232,170,30,0.18)", color: "#967000" },
  off_track: { bg: "rgba(210,60,30,0.12)",  color: "#B02010" },
  projected: { bg: "rgba(91,141,184,0.14)", color: "#35618A" },
  empty:     { bg: "transparent",           color: "#C0C4CC" },
};

const ROWS: Row[] = [
  { area: "Estrategia",   color: AC.Estrategia,   indicator: "Revenue área Estrategia",        meta: "$1.6M anual",  resp: "F. Cerda",     initials: "FC", initColor: "#3A8E7E", q1:{val:"$426K",status:"on_track"},  q2:{val:"$390K",status:"on_track"},  q3:{val:"$420K",status:"projected"}, q4:{val:"$364K",status:"projected"} },
  { area: "Estrategia",   color: AC.Estrategia,   indicator: "Proyectos estrategia nuevos Q2", meta: "3 proyectos",  resp: "M.J. Onetto",  initials: "MJ", initColor: "#5B8DB8", q1:{val:"2/3",  status:"at_risk"},   q2:{val:"—",    status:"empty"},      q3:{val:"—",    status:"empty"},      q4:{val:"—",    status:"empty"} },
  { area: "Organización", color: AC.Organización, indicator: "Revenue área Organización",      meta: "$1.4M anual",  resp: "M.J. Onetto",  initials: "MJ", initColor: "#5B8DB8", q1:{val:"$372K",status:"on_track"},  q2:{val:"$360K",status:"on_track"},  q3:{val:"$350K",status:"projected"}, q4:{val:"$318K",status:"projected"} },
  { area: "Solutions",    color: AC.Solutions,    indicator: "Revenue Solutions",               meta: "$1.2M anual",  resp: "F. Cerda",     initials: "FC", initColor: "#3A8E7E", q1:{val:"$310K",status:"on_track"},  q2:{val:"$300K",status:"on_track"},  q3:{val:"$290K",status:"projected"}, q4:{val:"$300K",status:"projected"} },
  { area: "Solutions",    color: AC.Solutions,    indicator: "Nuevos engagements Solutions",   meta: "8 anuales",    resp: "G. Merino",    initials: "GM", initColor: "#E8701E", q1:{val:"3/2",  status:"on_track"},  q2:{val:"—",    status:"empty"},      q3:{val:"—",    status:"empty"},      q4:{val:"—",    status:"empty"} },
  { area: "Finanzas",     color: AC.Finanzas,     indicator: "Margen operacional grupo",       meta: ">30%",         resp: "B. Donoso",    initials: "BD", initColor: "#7B6FE8", q1:{val:"34%",  status:"on_track"},  q2:{val:">30%", status:"projected"},  q3:{val:">30%", status:"projected"},  q4:{val:">30%", status:"projected"} },
  { area: "Finanzas",     color: AC.Finanzas,     indicator: "DSO promedio",                   meta: "<35d",         resp: "B. Donoso",    initials: "BD", initColor: "#7B6FE8", q1:{val:"38d",  status:"off_track"}, q2:{val:"<35d", status:"projected"},  q3:{val:"<35d", status:"projected"},  q4:{val:"<35d", status:"projected"} },
  { area: "Personas",     color: AC.Personas,     indicator: "Utilización equipo",             meta: ">78%",         resp: "M.J. Onetto",  initials: "MJ", initColor: "#5B8DB8", q1:{val:"82%",  status:"on_track"},  q2:{val:">78%", status:"projected"},  q3:{val:">78%", status:"projected"},  q4:{val:">78%", status:"projected"} },
  { area: "Personas",     color: AC.Personas,     indicator: "NPS equipo interno",             meta: ">75",          resp: "F. Cerda",     initials: "FC", initColor: "#3A8E7E", q1:{val:"81",   status:"on_track"},  q2:{val:">75",  status:"projected"},  q3:{val:">75",  status:"projected"},  q4:{val:">75",  status:"projected"} },
  { area: "Personas",     color: AC.Personas,     indicator: "Nuevas contrataciones",          meta: "2 en 2026",    resp: "M.J. Onetto",  initials: "MJ", initColor: "#5B8DB8", q1:{val:"0/1",  status:"off_track"}, q2:{val:"—",    status:"empty"},      q3:{val:"—",    status:"empty"},      q4:{val:"—",    status:"empty"} },
  { area: "Tecnología",   color: AC.Tecnología,   indicator: "Agentes IA en producción",      meta: "5 activos",    resp: "F. Cerda",     initials: "FC", initColor: "#3A8E7E", q1:{val:"3/5",  status:"at_risk"},   q2:{val:"5/5",  status:"projected"},  q3:{val:"5/5",  status:"projected"},  q4:{val:"5/5",  status:"projected"} },
  { area: "Tecnología",   color: AC.Tecnología,   indicator: "Apps/portales entregados",       meta: "8 anuales",    resp: "F.N. Neira",   initials: "FN", initColor: "#C09028", q1:{val:"3/2",  status:"on_track"},  q2:{val:"—",    status:"empty"},      q3:{val:"—",    status:"empty"},      q4:{val:"—",    status:"empty"} },
];

function QBadge({ cell }: { cell: QCell }) {
  const s = SS[cell.status];
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 6,
      fontSize: 11, fontWeight: 700, background: s.bg, color: s.color,
      minWidth: 52, textAlign: "center",
    }}>
      {cell.val}
    </span>
  );
}

export default function SketchScorecard() {
  const on_track = ROWS.flatMap(r => [r.q1,r.q2,r.q3,r.q4]).filter(c => c.status === "on_track").length / 4;
  const at_risk  = ROWS.flatMap(r => [r.q1,r.q2,r.q3,r.q4]).filter(c => c.status === "at_risk").length / 4;
  const off_track= ROWS.flatMap(r => [r.q1,r.q2,r.q3,r.q4]).filter(c => c.status === "off_track").length / 4;

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Planificación estratégica & KPIs
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Scorecard centralizado con indicadores por área, responsable y evolución trimestral.
        </p>
      </div>

      <div style={{ border: "1.5px solid var(--gray-100)", borderRadius: "var(--radius)", overflow: "hidden", background: "var(--white)" }}>
        {/* Header */}
        <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--gray-100)" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "var(--gd-dark)", marginBottom: 2 }}>Planificación Estratégica</div>
          <div style={{ fontSize: 11, color: "var(--gray-400)" }}>Scorecard estratégico · {ROWS.length} indicadores · Año 2026</div>
        </div>

        {/* Stats bar */}
        <div style={{ padding: "12px 24px", borderBottom: "1px solid var(--gray-100)", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "En meta",       count: Math.round(on_track),  color: "#2D8E7E" },
            { label: "En riesgo",     count: Math.round(at_risk),   color: "#B08020" },
            { label: "Fuera de meta", count: Math.round(off_track), color: "#C03020" },
            { label: "Proyectado",    count: 0,                      color: "#5B8DB8" },
          ].map(({ label, count, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--gd-dark)" }}>{count}</span>
              <span style={{ fontSize: 11, color: "var(--gray-400)" }}>{label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontSize: 11.5, fontWeight: 700, color: "var(--gray-400)" }}>
            <span style={{ color: "var(--gd-dark)", marginRight: 4 }}>{ROWS.length}</span>Indicadores totales
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#F8F9FA" }}>
                {["Área", "Indicador", "Meta", "Responsable", "Q1", "Q2", "Q3", "Q4"].map((h, i) => (
                  <th key={h} style={{
                    padding: "9px 16px", textAlign: i >= 4 ? "center" : "left",
                    fontSize: 10, fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "1px", color: "var(--gray-400)",
                    borderBottom: "1px solid var(--gray-100)", whiteSpace: "nowrap",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--gray-100)", background: idx % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                  <td style={{ padding: "10px 16px", whiteSpace: "nowrap" }}>
                    <span style={{
                      fontSize: 10.5, fontWeight: 700, padding: "3px 9px",
                      borderRadius: 100, border: `1.5px solid ${r.color}40`,
                      color: r.color, background: `${r.color}10`,
                    }}>{r.area}</span>
                  </td>
                  <td style={{ padding: "10px 16px", fontWeight: 600, color: "var(--gd-dark)", whiteSpace: "nowrap" }}>{r.indicator}</td>
                  <td style={{ padding: "10px 16px", color: "var(--gray-600)", whiteSpace: "nowrap" }}>{r.meta}</td>
                  <td style={{ padding: "10px 16px", whiteSpace: "nowrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: "50%", background: `${r.initColor}20`,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <span style={{ fontSize: 8, fontWeight: 800, color: r.initColor }}>{r.initials}</span>
                      </div>
                      <span style={{ color: "var(--gray-600)" }}>{r.resp}</span>
                    </div>
                  </td>
                  {[r.q1, r.q2, r.q3, r.q4].map((q, qi) => (
                    <td key={qi} style={{ padding: "10px 16px", textAlign: "center" }}>
                      <QBadge cell={q} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";
import { TrendingUp, TrendingDown, Users, BarChart2, RefreshCw, Clock } from "lucide-react";

const REVENUE_DATA = [
  { mes: "Ene", real25: 340, target: 380, rev26: 360 },
  { mes: "Feb", real25: 390, target: 400, rev26: 410 },
  { mes: "Mar", real25: 410, target: 420, rev26: 430 },
  { mes: "Abr", real25: null, target: 410, rev26: null },
  { mes: "May", real25: null, target: 400, rev26: null },
  { mes: "Jun", real25: null, target: 395, rev26: null },
  { mes: "Jul", real25: null, target: 390, rev26: null },
  { mes: "Ago", real25: null, target: 385, rev26: null },
  { mes: "Sep", real25: null, target: 390, rev26: null },
  { mes: "Oct", real25: null, target: 400, rev26: null },
  { mes: "Nov", real25: null, target: 395, rev26: null },
  { mes: "Dic", real25: null, target: 410, rev26: null },
];

const MIX_DATA = [
  { name: "Estrategia",   value: 42, color: "#3A8E7E" },
  { name: "Organización", value: 28, color: "#2D6A5E" },
  { name: "Solutions",    value: 22, color: "#E8701E" },
  { name: "People Platz", value: 8,  color: "#7B6FE8" },
];

const KPIS = [
  { label: "Revenue Q1 2026",     value: "$1.24M", badge: "+22% vs Q1 2025", badgeUp: true, sub: "Target anual: $4.8M",           Icon: TrendingUp  },
  { label: "Margen Operacional",  value: "34%",    badge: "+3 pts vs plan",  badgeUp: true, sub: "EBITDA: $422K",                  Icon: BarChart2   },
  { label: "Proyectos Activos",   value: "24",     badge: "+4 vs Q1 2025",   badgeUp: true, sub: "Gudcompany + People Platz",      Icon: RefreshCw   },
  { label: "NPS Clientes",        value: "78",     badge: "+6 pts YoY",      badgeUp: true, sub: "Encuesta semestral",             Icon: TrendingUp  },
  { label: "Equipo Total",        value: "10",     badge: "Multidisciplinario", badgeUp: null, sub: "Consultores + Diseñadores + Admin", Icon: Users   },
  { label: "Utilización Equipo",  value: "82%",    badge: "+5 pts vs plan",  badgeUp: true, sub: "8.2 de 10 personas billables",   Icon: BarChart2   },
  { label: "Tasa de Recompra",    value: "64%",    badge: "alto para industria", badgeUp: true, sub: "Clientes con 2+ proyectos",  Icon: RefreshCw   },
  { label: "DSO Promedio",        value: "38 días",badge: "En línea con plan", badgeUp: null, sub: "Meta: 35 días",               Icon: Clock       },
];

function fmt(v: number | null) {
  if (v === null) return undefined;
  return `$${v}K`;
}

export default function SketchDashboard() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Dashboard ejecutivo
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Vista consolidada del negocio con KPIs clave, revenue y mix de servicios — todo conectable a datos reales.
        </p>
      </div>

      <div style={{ border: "1.5px solid var(--gray-100)", borderRadius: "var(--radius)", overflow: "hidden", background: "#F5F6F7" }}>

        {/* Top bar */}
        <div style={{ padding: "16px 24px", background: "#fff", borderBottom: "1px solid var(--gray-100)" }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "var(--gd-dark)", marginBottom: 2 }}>Overview Corporativo</div>
          <div style={{ fontSize: 11, color: "var(--gray-400)" }}>Consolidado del grupo · Q1 2026 · Todos los datos son representativos</div>
        </div>

        {/* Green banner */}
        <div style={{ background: "var(--gd-dark)", padding: "12px 24px", display: "flex", alignItems: "flex-start", gap: 10 }}>
          <TrendingUp size={14} strokeWidth={2} style={{ color: "var(--gd-green)", marginTop: 1, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Datos conectables en tiempo real</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              Todos estos indicadores pueden consolidarse automáticamente desde CRM, herramientas de gestión de proyectos, finanzas y RRHH.
            </div>
          </div>
        </div>

        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {/* KPI grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {KPIS.map((k) => (
              <div key={k.label} style={{ background: "#fff", border: "1px solid var(--gray-100)", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--gray-400)" }}>{k.label}</span>
                  <k.Icon size={12} strokeWidth={1.5} style={{ color: "var(--gray-200)", flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "var(--gd-dark)", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 6 }}>{k.value}</div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
                    background: k.badgeUp === null ? "rgba(0,0,0,0.06)" : k.badgeUp ? "rgba(45,142,126,0.12)" : "rgba(200,50,20,0.1)",
                    color: k.badgeUp === null ? "var(--gray-400)" : k.badgeUp ? "#1E7060" : "#B02010",
                  }}>
                    {k.badgeUp === true && "▲ "}{k.badgeUp === false && "▼ "}{k.badge}
                  </span>
                </div>
                <div style={{ fontSize: 10, color: "var(--gray-400)" }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>

            {/* Revenue chart */}
            <div style={{ background: "#fff", border: "1px solid var(--gray-100)", borderRadius: 10, padding: "16px 16px 8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gd-dark)" }}>Revenue Mensual vs Target</div>
                  <div style={{ fontSize: 10, color: "var(--gray-400)" }}>USD Miles · 2026</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "rgba(45,142,126,0.12)", color: "#1E7060" }}>+22% YTD</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <ComposedChart data={REVENUE_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                  <XAxis dataKey="mes" tick={{ fontSize: 9, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} />
                  <Tooltip
                    contentStyle={{ fontSize: 11, borderRadius: 6, border: "1px solid #E5E7EB", boxShadow: "none" }}
                    formatter={(v, name) => [`$${v}K`, name === "rev26" ? "Revenue 2026" : name === "real25" ? "2025 Real" : "Target 2026"]}
                  />
                  <Bar dataKey="rev26" fill="#3A8E7E" radius={[3, 3, 0, 0]} maxBarSize={28} />
                  <Line dataKey="target" stroke="#B0B8C4" strokeDasharray="4 3" strokeWidth={1.5} dot={{ r: 2.5, fill: "#B0B8C4" }} connectNulls />
                  <Line dataKey="real25" stroke="#9CA3AF" strokeDasharray="2 3" strokeWidth={1.5} dot={{ r: 2, fill: "#C4C9D0" }} connectNulls />
                </ComposedChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 4 }}>
                {[
                  { color: "#C4C9D0", dash: true, label: "2025 Real" },
                  { color: "#B0B8C4", dash: true, label: "Target 2026" },
                  { color: "#3A8E7E", dash: false, label: "Revenue 2026" },
                ].map(({ color, dash, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width={16} height={8}>
                      {dash
                        ? <line x1={0} y1={4} x2={16} y2={4} stroke={color} strokeWidth={1.5} strokeDasharray="3 2" />
                        : <rect x={2} y={1} width={12} height={6} rx={2} fill={color} />
                      }
                    </svg>
                    <span style={{ fontSize: 9.5, color: "var(--gray-400)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut chart */}
            <div style={{ background: "#fff", border: "1px solid var(--gray-100)", borderRadius: 10, padding: "16px 16px 8px" }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gd-dark)" }}>Mix por Área de Servicio</div>
                <div style={{ fontSize: 10, color: "var(--gray-400)" }}>% del Revenue Q1 2026</div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={MIX_DATA} cx="50%" cy="50%"
                    innerRadius={52} outerRadius={78}
                    paddingAngle={2} dataKey="value"
                  >
                    {MIX_DATA.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle" iconSize={7}
                    formatter={(v: string) => <span style={{ fontSize: 10, color: "#6B7280" }}>{v}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

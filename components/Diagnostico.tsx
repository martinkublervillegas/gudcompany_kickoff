import { TrendingUp, AlertTriangle, CheckCircle2, MessageSquare, Clock, Zap } from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */

const DIMENSIONES = [
  {
    num: "01",
    label: "Gestión Interna",
    dots: 3,
    dotColor: "#E8701E",
    status: "En construcción",
    statusBg: "rgba(232,112,30,0.25)",
    statusColor: "#E8701E",
    desc: "Gestión ordenada pero sin plataforma central. Visibilidad del avance baja para algunos perfiles. Plataformas actuales: 2.7/7.",
  },
  {
    num: "02",
    label: "Estrategia",
    dots: 4,
    dotColor: "#4ECB9E",
    status: "Base sólida",
    statusBg: "rgba(58,142,126,0.28)",
    statusColor: "#4ECB9E",
    desc: "Claridad estratégica alta (5.7/7). La brecha está en traducir prioridades en proyectos concretos y hacer bajar la información al equipo.",
  },
  {
    num: "03",
    label: "Conocimiento",
    dots: 2,
    dotColor: "#E8701E",
    status: "Fragmentado",
    statusBg: "rgba(232,112,30,0.25)",
    statusColor: "#E8701E",
    desc: "Score 3.7/7. Se pierde en Drive disperso, reuniones sin documentar y propuestas que no se reutilizan. Aprendizajes no sistematizados.",
  },
  {
    num: "04",
    label: "Tecnología & IA",
    dots: 3,
    dotColor: "#80BAD8",
    status: "Oportunidad pendiente",
    statusBg: "rgba(128,186,216,0.22)",
    statusColor: "#80BAD8",
    desc: "Uso individual avanzado (comodidad 6/7) pero adopción institucional en 4/7. Urgencia de tech en productos: 6.7/7 — el score más alto.",
  },
];

const SCORES = [
  { label: "Plataformas de gestión",        avg: 2.7, nota: "El score más crítico del diagnóstico"              },
  { label: "Documentación del conocimiento", avg: 3.7, nota: "Se pierde en Drive y reuniones sin documentar"     },
  { label: "Visibilidad del avance",         avg: 4.0, nota: "Brecha entre percepción de dirección y equipo"     },
  { label: "Gestión interna ordenada",       avg: 4.3, nota: "Margen de mejora concreto"                         },
  { label: "Necesidad de Notion",            avg: 6.0, nota: "Alta coincidencia — dos respuestas al máximo (7)"  },
  { label: "Urgencia: tech en productos",    avg: 6.7, nota: "Score más alto del formulario"                     },
];

const VOCES = [
  {
    cita: "Operar en plataforma full IA a la base.",
    contexto: "Problema principal a resolver en 3 meses",
    rol: "Dirección",
  },
  {
    cita: "Ordenar y robustecer la gestión del conocimiento — que la información sea legible por IA. Es prerequisito para escalar entregables automatizados y una nueva oferta de valor al cliente.",
    contexto: "Problema principal a resolver en 3 meses",
    rol: "Consultoría",
  },
  {
    cita: "Incorporando tecnología en los entregables y en el proceso de gestión y acompañamiento.",
    contexto: "Mayor oportunidad de evolución de la oferta",
    rol: "Consultoría & Ops",
  },
];

const PRIORIDADES = [
  { label: "Mejoras en productos / servicios",  votos: 3 },
  { label: "Capacitación IA",                   votos: 3 },
  { label: "IA aplicada a consultoría",         votos: 2 },
  { label: "Automatizaciones",                  votos: 2 },
  { label: "Gestión del conocimiento",          votos: 2 },
];

const PROCESOS = [
  { label: "Producción de entregables",      desc: "Presentaciones e informes post-taller" },
  { label: "Diagnósticos y propuestas",      desc: "Alta carga manual desde el inicio"     },
  { label: "Reporting y tableros",           desc: "Sin consolidación ni automatización"    },
  { label: "Documentación de proyectos",     desc: "PM disperso en Drive y WhatsApp"        },
  { label: "Gestión de personas",            desc: "Onboarding, evaluaciones y hunting"     },
];

const IA_PROCESOS = [
  { label: "Desk research",          votos: 3 },
  { label: "Benchmarking",           votos: 3 },
  { label: "Gestión comercial",      votos: 3 },
  { label: "Síntesis de hallazgos",  votos: 2 },
  { label: "Redacción de informes",  votos: 2 },
  { label: "Análisis de entrevistas",votos: 2 },
  { label: "Creación de presentaciones",votos: 2 },
];

const FALENCIAS = [
  { texto: "Falta de herramientas tecnológicas integradas", votos: 3 },
  { texto: "Dificultad para transformar ideas en soluciones", votos: 3 },
  { texto: "Mucho trabajo manual o repetitivo",              votos: 2 },
  { texto: "Falta de visibilidad del avance de proyectos",   votos: 2 },
  { texto: "Falta de indicadores / control de gestión",      votos: 2 },
  { texto: "Dificultad para consolidar aprendizajes",        votos: 2 },
];

const CONVERGENCIA = [
  {
    num: "01", proyecto: "Flujos de Procesos",
    color: "var(--gd-green)", colorL: "var(--gd-green-l)",
    evidencias: [
      "Propuestas, diagnósticos y entregables: los 3 procesos más mencionados",
      "Gestión comercial y kick-off elegidos como primeros a rediseñar",
      "\"Diagnósticos, propuestas, seguimientos\" — primer candidato a automatizar",
    ],
  },
  {
    num: "02", proyecto: "Implementación Notion",
    color: "var(--gd-blue)", colorL: "var(--gd-blue-l)",
    evidencias: [
      "Plataformas de gestión: 2.7/7 — el score más crítico del formulario",
      "Necesidad Notion: 6.0/7 — dos respuestas al máximo posible",
      "Conocimiento disperso en Drive, sin reutilización de propuestas ni metodologías",
    ],
  },
  {
    num: "03", proyecto: "Implementación Tecnología",
    color: "var(--gd-orange)", colorL: "var(--gd-orange-l)",
    evidencias: [
      "Urgencia de tech en productos: 6.7/7 — el score más alto del diagnóstico",
      "Gap claro: uso individual IA avanzado vs. adopción institucional en 4.0/7",
      "Top prioridades compartidas: automatizaciones + IA consultoría + capacitación",
    ],
  },
];

/* ──────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────── */

function scoreColor(avg: number) {
  if (avg <= 3.5) return "var(--gd-orange)";
  if (avg <= 5.0) return "var(--gd-blue)";
  return "var(--gd-green)";
}

function DotRating({ dots, color }: { dots: number; color: string }) {
  return (
    <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            width: 10, height: 10, borderRadius: "50%",
            background: i <= dots ? color : "rgba(255,255,255,0.12)",
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   COMPONENTE
────────────────────────────────────────────── */

export default function Diagnostico() {
  return (
    <section id="diagnostico" style={{ background: "var(--off-white)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div className="fade-in" style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={eyebrow}>Diagnóstico inicial · 3 respuestas · 47 preguntas</div>
          <h2 style={titleStyle}>Lo que el equipo encontró</h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--gray-600)" }}>
            Respondido por tres perfiles clave: Dirección, Consultoría y Consultoría & Operaciones.
            Los resultados son anónimos y convergen en señales claras sobre dónde actuar primero.
          </p>
        </div>

        {/* ── 4 Dimensiones ── */}
        <div
          className="fade-in"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 48 }}
        >
          {DIMENSIONES.map((d) => (
            <div
              key={d.num}
              style={{
                background: "var(--gd-dark)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 22px",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>
                Dimensión {d.num}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--white)", letterSpacing: "-0.3px", marginBottom: 14, lineHeight: 1.2 }}>
                {d.label}
              </div>
              <DotRating dots={d.dots} color={d.dotColor} />
              <div
                style={{
                  display: "inline-block", fontSize: 10, fontWeight: 700,
                  padding: "3px 10px", borderRadius: 20, marginBottom: 14,
                  background: d.statusBg, color: d.statusColor,
                }}
              >
                {d.status}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Métricas ── */}
        <div className="fade-in fade-in-delay-1" style={{ marginBottom: 48 }}>
          <div style={sectionLabel}>
            <TrendingUp size={13} strokeWidth={2} />
            Métricas clave (escala 1–7, promedio de 3 respuestas)
          </div>
          <div style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 16, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
            {SCORES.map((s) => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--gd-dark)" }}>{s.label}</span>
                    <span style={{ fontSize: 11, color: "var(--gray-400)" }}>— {s.nota}</span>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: scoreColor(s.avg), minWidth: 32, textAlign: "right" }}>
                    {s.avg.toFixed(1)}
                  </span>
                </div>
                <div style={{ height: 6, background: "var(--gray-100)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(s.avg / 7) * 100}%`, background: scoreColor(s.avg), borderRadius: 4, opacity: 0.75 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Voces + Prioridades ── */}
        <div
          className="fade-in fade-in-delay-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}
        >
          {/* Voces del equipo */}
          <div>
            <div style={sectionLabel}>
              <MessageSquare size={13} strokeWidth={2} />
              Voces del equipo (anónimo)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOCES.map((v, i) => (
                <div key={i} style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 14, padding: "20px 22px" }}>
                  <p style={{ fontSize: 13, color: "var(--gd-dark)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 12 }}>
                    "{v.cita}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 10.5, color: "var(--gray-400)", lineHeight: 1.4 }}>{v.contexto}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--gd-green)", background: "var(--gd-green-l)", padding: "2px 9px", borderRadius: 20 }}>
                      {v.rol}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prioridades */}
          <div>
            <div style={sectionLabel}>
              <Zap size={13} strokeWidth={2} />
              Prioridades para los próximos 3 meses
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 14, padding: "24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {PRIORIDADES.map((p) => (
                <div key={p.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: p.votos === 3 ? 700 : 400, color: "var(--gd-dark)" }}>{p.label}</span>
                    <span style={{ fontSize: 11, color: p.votos === 3 ? "var(--gd-green)" : "var(--gray-400)", fontWeight: 700 }}>
                      {p.votos}/3
                    </span>
                  </div>
                  <div style={{ height: 5, background: "var(--gray-100)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(p.votos / 3) * 100}%`, background: p.votos === 3 ? "var(--gd-green)" : "var(--gd-blue)", borderRadius: 3, opacity: 0.7 }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 4 }}>
                Respuestas a "¿cuáles dimensiones priorizar en 3 meses?" (podían elegir hasta 5)
              </p>
            </div>

            {/* Quick win */}
            <div style={{ marginTop: 14, background: "var(--gd-dark)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>
                Quick win en menos de 30 días
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                "Operar en plataforma, conectar las herramientas, automatizar propuestas."
              </p>
            </div>
          </div>
        </div>

        {/* ── Procesos críticos + IA ── */}
        <div
          className="fade-in fade-in-delay-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}
        >
          {/* Procesos que consumen más tiempo */}
          <div>
            <div style={sectionLabel}>
              <Clock size={13} strokeWidth={2} />
              Procesos que más tiempo consumen hoy
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 14, overflow: "hidden" }}>
              {PROCESOS.map((p, i) => (
                <div
                  key={p.label}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "14px 20px",
                    borderBottom: i < PROCESOS.length - 1 ? "1px solid var(--gray-100)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11, fontWeight: 800, color: "var(--gray-400)",
                      background: "var(--gray-50)", borderRadius: 8,
                      width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gd-dark)", marginBottom: 2 }}>{p.label}</div>
                    <div style={{ fontSize: 11.5, color: "var(--gray-400)" }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IA en procesos */}
          <div>
            <div style={sectionLabel}>
              <Zap size={13} strokeWidth={2} />
              Procesos que mejorarían con IA
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {IA_PROCESOS.map((p) => (
                  <div
                    key={p.label}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: p.votos === 3 ? "var(--gd-dark)" : "var(--off-white)",
                      border: `1px solid ${p.votos === 3 ? "transparent" : "var(--gray-100)"}`,
                      borderRadius: 100, padding: "6px 12px",
                    }}
                  >
                    <span style={{ fontSize: 9, fontWeight: 800, color: p.votos === 3 ? "var(--gd-green)" : "var(--gray-400)" }}>
                      {p.votos}/3
                    </span>
                    <span style={{ fontSize: 12, color: p.votos === 3 ? "var(--white)" : "var(--gd-dark)", fontWeight: p.votos === 3 ? 600 : 400 }}>
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 14 }}>
                Basado en Q37: "¿qué procesos de Gudcompany podrían mejorar con IA?"
              </p>
            </div>

            {/* Producto con más potencial */}
            <div style={{ marginTop: 14, background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--gray-400)", marginBottom: 10 }}>
                Productos con más potencial si se agrega tecnología
              </div>
              {[
                "Diagnósticos y Planificaciones Estratégicas",
                "Seguimiento y ejecución estratégica (dashboards)",
                "Entregables en general — visualización e interactividad",
                "Benchmark y análisis de tendencias",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gd-green)", flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 12.5, color: "var(--gray-600)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Falencias ── */}
        <div className="fade-in fade-in-delay-2" style={{ marginBottom: 48 }}>
          <div style={sectionLabel}>
            <AlertTriangle size={13} strokeWidth={2} />
            Falencias más mencionadas
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {FALENCIAS.map((f) => (
              <div
                key={f.texto}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: f.votos === 3 ? "var(--gd-dark)" : "var(--white)",
                  border: `1px solid ${f.votos === 3 ? "transparent" : "var(--gray-100)"}`,
                  borderRadius: 100, padding: "8px 16px",
                }}
              >
                <span style={{
                  fontSize: 10, fontWeight: 800,
                  background: f.votos === 3 ? "var(--gd-green)" : "var(--gray-100)",
                  color: f.votos === 3 ? "var(--white)" : "var(--gray-600)",
                  borderRadius: "50%", width: 18, height: 18,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {f.votos}
                </span>
                <span style={{ fontSize: 13, color: f.votos === 3 ? "var(--white)" : "var(--gd-dark)", fontWeight: f.votos === 3 ? 600 : 400 }}>
                  {f.texto}
                </span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 10, fontSize: 11, color: "var(--gray-400)" }}>
            Número = cuántos de los 3 respondentes marcaron esa falencia. Oscuros = consenso unánime.
          </p>
        </div>

        {/* ── Convergencia → Proyectos ── */}
        <div className="fade-in fade-in-delay-2">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "var(--gray-100)" }} />
            <div style={{ ...sectionLabel, marginBottom: 0 }}>
              <CheckCircle2 size={13} strokeWidth={2} />
              El diagnóstico converge en estos 3 proyectos
            </div>
            <div style={{ flex: 1, height: 1, background: "var(--gray-100)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {CONVERGENCIA.map((c) => (
              <div key={c.num} style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ background: c.colorL, padding: "18px 22px", borderBottom: "1px solid var(--gray-100)" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: c.color, marginBottom: 4 }}>
                    Proyecto {c.num}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.3px" }}>
                    {c.proyecto}
                  </div>
                </div>
                <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.evidencias.map((e, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: c.color, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontSize: 12.5, color: "var(--gray-600)", lineHeight: 1.55 }}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Styles ── */

const eyebrow: React.CSSProperties = {
  fontSize: 10.5, fontWeight: 700, textTransform: "uppercase",
  letterSpacing: "3px", color: "var(--gd-green)", marginBottom: 16,
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(22px, 2.4vw, 38px)", fontWeight: 900,
  letterSpacing: "-1.8px", lineHeight: 1.08,
  color: "var(--gd-dark)", marginBottom: 18,
};

const sectionLabel: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 6,
  fontSize: 10.5, fontWeight: 700, textTransform: "uppercase",
  letterSpacing: "2px", color: "var(--gray-400)", marginBottom: 14,
};

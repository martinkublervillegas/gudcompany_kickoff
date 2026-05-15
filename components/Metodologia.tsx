import MesTipo from "@/components/MesTipo";
import {
  MessageCircle, BookOpen, MessageSquare,
  HardDrive, NotebookText, Shield, Lock, KeyRound, Server, MonitorDot,
  CalendarDays, Users, Zap,
} from "lucide-react";

export default function Metodologia() {
  return (
    <section
      id="metodologia"
      style={{ background: "var(--off-white)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div className="fade-in" style={{ maxWidth: 680, marginBottom: 56 }}>
          <div style={eyebrow}>Metodología</div>
          <h2 style={titleStyle}>Cómo vamos a operar</h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--gray-600)" }}>
            Cuentas, accesos, seguridad y ritmo de trabajo. Todo lo que necesitamos definir para arrancar bien.
          </p>
        </div>

        {/* ── Fila 1: 3 tarjetas ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>

          {/* Cuentas y accesos */}
          <div style={card}>
            <div style={cardBadge}>Cuentas y accesos</div>
            <h3 style={cardTitle}>Correo y plataformas</h3>
            <p style={cardSub}>
              Sería ideal que nos creen un correo{" "}
              <strong style={{ color: "var(--gd-green)" }}>@gudcompany.com</strong>. Puede ser reactivar{" "}
              <strong style={{ color: "var(--gd-dark)" }}>ealdunate@gudcompany.com</strong>.
            </p>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { Icon: HardDrive,    label: "Google Drive",      desc: "Acceso inicial para documentos" },
                { Icon: NotebookText, label: "Notion",             desc: "PM y conocimiento · ~USD 20/u/mes" },
                { Icon: MonitorDot,   label: "Otras plataformas",  desc: "¿Qué herramientas usan hoy?" },
              ].map(({ Icon, label, desc }) => (
                <div key={label} style={rowItem}>
                  <Icon size={13} strokeWidth={1.5} style={{ color: "var(--gd-green)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--gd-dark)", marginBottom: 1 }}>{label}</div>
                    <div style={{ fontSize: 11.5, color: "var(--gray-400)", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seguridad */}
          <div style={card}>
            <div style={cardBadge}>Seguridad</div>
            <h3 style={cardTitle}>Información controlada</h3>
            <p style={cardSub}>
              Todo el trabajo con máxima reserva. Disponibles para firmar un{" "}
              <strong style={{ color: "var(--gd-dark)" }}>NDA</strong> si lo requieren.
            </p>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { Icon: KeyRound, text: "Google Auth y accesos controlados" },
                { Icon: Lock,     text: "Todo dentro del ecosistema Gudcompany" },
                { Icon: Server,   text: "Infraestructura siempre bajo propiedad del cliente" },
                { Icon: Shield,   text: "2FA en correo @gudcompany.com" },
              ].map(({ Icon, text }) => (
                <div key={text} style={rowItem}>
                  <Icon size={13} strokeWidth={1.5} style={{ color: "var(--gd-green)", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 12.5, color: "var(--gray-600)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comunicación */}
          <div style={card}>
            <div style={cardBadge}>Comunicación</div>
            <h3 style={cardTitle}>Canales del día a día</h3>
            <p style={cardSub}>
              Cada canal tiene un propósito claro para no mezclar lo urgente con lo importante.
            </p>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { Icon: MessageCircle, label: "WhatsApp",      color: "var(--gd-green)",  desc: 'Grupo "corp" + grupos por proyecto' },
                { Icon: BookOpen,      label: "Notion",         color: "var(--gd-blue)",   desc: "Docs, tareas, decisiones y roadmap" },
                { Icon: MessageSquare, label: "Slack (futuro)", color: "var(--gray-400)",  desc: "Lo evaluamos si hace sentido" },
              ].map(({ Icon, label, color, desc }) => (
                <div key={label} style={rowItem}>
                  <Icon size={13} strokeWidth={1.5} style={{ color, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color, marginBottom: 1 }}>{label}</div>
                    <div style={{ fontSize: 11.5, color: "var(--gray-400)", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Fila 2: Instancias de trabajo ── */}
        <div className="fade-in fade-in-delay-2">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "var(--gray-100)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--gray-400)" }}>
              Instancias de trabajo
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--gray-100)" }} />
          </div>

          <div style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: 20, padding: "36px 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid var(--gray-100)" }}>
              {[
                { Icon: CalendarDays, label: "Reunión estratégica", desc: "Mensual. Dirección, prioridades y decisiones de alto nivel.",       color: "var(--gd-green)",  bg: "var(--gd-green-l)",  border: "rgba(58,142,126,0.25)" },
                { Icon: Users,        label: "Reunión de status",    desc: "Quincenal. Avance de proyectos con el equipo responsable.",         color: "var(--gd-blue)",   bg: "var(--gd-blue-l)",   border: "rgba(128,186,216,0.4)" },
                { Icon: Zap,          label: "Reuniones spot",       desc: "Según necesidad. Para temas puntuales de proyectos en curso.",      color: "var(--gd-orange)", bg: "var(--gd-orange-l)", border: "rgba(232,112,30,0.3)" },
              ].map(({ Icon, label, desc, color, bg, border }) => (
                <div key={label} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 14, padding: "20px" }}>
                  <div style={{ marginBottom: 14 }}>
                    <Icon size={16} strokeWidth={1.5} style={{ color }} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gd-dark)", marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 12.5, color: "var(--gray-600)", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <MesTipo inline />
          </div>
        </div>

      </div>
    </section>
  );
}

const eyebrow: React.CSSProperties = {
  fontSize: 10.5,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "3px",
  color: "var(--gd-green)",
  marginBottom: 16,
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(22px, 2.4vw, 38px)",
  fontWeight: 900,
  letterSpacing: "-1.8px",
  lineHeight: 1.08,
  marginBottom: 18,
  color: "var(--gd-dark)",
};

const card: React.CSSProperties = {
  background: "var(--white)",
  border: "1px solid var(--gray-100)",
  borderRadius: 20,
  padding: "28px 24px",
};

const cardBadge: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "2.5px",
  padding: "4px 11px",
  borderRadius: 20,
  display: "inline-block",
  marginBottom: 14,
  background: "var(--gray-50)",
  color: "var(--gray-600)",
};

const cardTitle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 800,
  letterSpacing: "-0.4px",
  marginBottom: 8,
  color: "var(--gd-dark)",
};

const cardSub: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  color: "var(--gray-600)",
};

const rowItem: React.CSSProperties = {
  background: "var(--off-white)",
  border: "1px solid var(--gray-100)",
  borderRadius: 8,
  padding: "10px 12px",
  display: "flex",
  gap: 10,
  alignItems: "flex-start",
};

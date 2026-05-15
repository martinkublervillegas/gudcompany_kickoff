import MatrizProcesos from "@/components/MatrizProcesos";
import FlujoProceso from "@/components/FlujoProceso";
import SketchGestionProyectos from "@/components/SketchGestionProyectos";
import SketchDocumentacion from "@/components/SketchDocumentacion";
import SketchScorecard from "@/components/SketchScorecard";
import SketchDashboard from "@/components/SketchDashboard";
import SketchHoras from "@/components/SketchHoras";

export default function ProyectosIniciales() {
  return (
    <section
      id="proyectos-iniciales"
      style={{ background: "var(--off-white)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div className="fade-in" style={{ maxWidth: 680, marginBottom: 40 }}>
          <div style={eyebrowStyle}>Propuesta inicial</div>
          <h2 style={titleStyle}>Propuesta de Proyectos Iniciales</h2>
          <p style={subStyle}>
            A partir del diagnóstico y las conversaciones previas, estos son los temas que proponemos explorar primero.
            Los detalles y priorización los definimos juntos el viernes.
          </p>
        </div>

        {/* ── ¿Qué es un proyecto? — subsección compacta ── */}
        <div
          className="fade-in fade-in-delay-1"
          style={{
            marginBottom: 48,
            background: "var(--white)",
            border: "1.5px solid var(--gray-100)",
            borderRadius: "var(--radius)",
            padding: "36px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                color: "var(--gd-green)",
                marginBottom: 12,
              }}
            >
              Para tener en cuenta
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "-0.8px",
                color: "var(--gd-dark)",
                marginBottom: 12,
                lineHeight: 1.15,
              }}
            >
              ¿Qué entendemos por proyecto?
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.72 }}>
              No operamos por hora ni delimitando cada tarea. Funcionamos como{" "}
              <strong style={{ color: "var(--gd-dark)" }}>partners</strong>, con un ancho de banda acorde al fee mensual.
            </p>
          </div>
          <div
            style={{
              background: "var(--gd-dark)",
              borderRadius: 14,
              padding: "24px 28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -8,
                left: 16,
                fontSize: 80,
                fontWeight: 900,
                color: "var(--gd-green)",
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              "
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.8)",
                position: "relative",
                zIndex: 1,
              }}
            >
              Un conjunto de medidas estratégicas, de gestión y/o tecnología orientadas a mover un tema desde un{" "}
              <strong style={{ color: "var(--gd-blue)" }}>punto A</strong> hacia un{" "}
              <strong style={{ color: "var(--gd-green)" }}>punto B</strong>. Las diferencias entre proyectos son temáticas: procesos, tecnología, datos, eficiencia, conocimiento.
            </p>
          </div>
        </div>

        {/* Tarjetas de proyectos */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40, marginBottom: 48 }}
        >
          {[
            { num: "01", titulo: "Flujos de Procesos",        subtitulo: "Diagnóstico, documentación y estandarización de procesos internos",      color: "var(--gd-green)", },
            { num: "02", titulo: "Implementación Notion",     subtitulo: "Estructura de proyecto, documentación y gestión del conocimiento interno", color: "var(--gd-blue)",  },
            { num: "03", titulo: "Implementación Tecnología", subtitulo: "Evaluación e implementación de herramientas tecnológicas clave",           color: "var(--gd-orange)",},
          ].map(({ num, titulo, subtitulo, color }) => (
            <div
              key={num}
              style={{
                background: "var(--white)",
                border: `1.5px solid var(--gray-100)`,
                borderRadius: "var(--radius)",
                padding: "28px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontSize: 48,
                  fontWeight: 900,
                  color: color,
                  opacity: 0.08,
                  lineHeight: 1,
                  letterSpacing: -2,
                }}
              >
                {num}
              </div>
              <div style={{ width: 32, height: 4, borderRadius: 2, background: color, marginBottom: 20, opacity: 0.7 }} />
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: color, marginBottom: 8 }}>
                Proyecto {num}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 8 }}>
                {titulo}
              </h3>
              <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
                {subtitulo}
              </p>
            </div>
          ))}
        </div>

        {/* Header proyecto 01 */}
        <div style={{ marginTop: 64, marginBottom: 32, borderTop: "1.5px solid var(--gray-100)", paddingTop: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--gd-green)", marginBottom: 10 }}>
            Proyecto 01
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.8px", color: "var(--gd-dark)", marginBottom: 10 }}>
            Flujos de Procesos
          </h3>
          <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, maxWidth: 600 }}>
            El punto de partida es entender qué procesos existen, cómo están funcionando hoy y dónde hay oportunidades de mejora, estandarización o automatización.
          </p>
        </div>

        {/* Matriz de procesos */}
        <div style={{ marginBottom: 48 }}>
          <MatrizProcesos />
        </div>

        {/* Flujo de procesos */}
        <div style={{ marginBottom: 64 }}>
          <FlujoProceso />
        </div>

        {/* Header proyecto 02 */}
        <div style={{ marginTop: 64, marginBottom: 32, borderTop: "1.5px solid var(--gray-100)", paddingTop: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--gd-blue)", marginBottom: 10 }}>
            Proyecto 02
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.8px", color: "var(--gd-dark)", marginBottom: 10 }}>
            Implementación Notion
          </h3>
          <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, maxWidth: 600 }}>
            Configurar Notion como el sistema central de gestión de proyectos y conocimiento de Gudcompany — independiente de Steps, propiedad del cliente.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 64 }}>
          <SketchGestionProyectos />
          <SketchDocumentacion />
        </div>

        {/* Header proyecto 03 */}
        <div style={{ marginTop: 64, marginBottom: 32, borderTop: "1.5px solid var(--gray-100)", paddingTop: 48 }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--gd-orange)", marginBottom: 10 }}>
            Proyecto 03
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.8px", color: "var(--gd-dark)", marginBottom: 10 }}>
            Implementación Tecnología
          </h3>
          <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, maxWidth: 600 }}>
            Evaluar e implementar herramientas clave para medir el negocio, planificar estratégicamente y automatizar con IA — todo conectado a datos reales.
          </p>
        </div>

        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--gray-400)" }}>
            Ejemplos:
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 64 }}>
          {[<SketchHoras key="horas" />, <SketchScorecard key="scorecard" />, <SketchDashboard key="dashboard" />].map((sketch, i) => (
            <div key={i} style={{ zoom: 0.84, transformOrigin: "top left" }}>
              {sketch}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const eyebrowStyle: React.CSSProperties = {
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
  color: "var(--gd-dark)",
  marginBottom: 18,
};

const subStyle: React.CSSProperties = {
  fontSize: 17,
  color: "var(--gray-600)",
  lineHeight: 1.75,
};

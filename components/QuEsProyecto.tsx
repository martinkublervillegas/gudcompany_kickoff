export default function QuEsProyecto() {
  const temas = [
    "Gestión interna",
    "Procesos",
    "Tecnología",
    "Automatizaciones",
    "Datos",
    "Conocimiento",
    "Eficiencia",
  ];

  return (
    <section
      id="proyecto"
      style={{ background: "var(--white)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div className="fade-in">
            <div style={eyebrowStyle}>Cómo trabajamos</div>
            <h2 style={titleStyle}>¿Qué entenderemos por "proyecto"?</h2>
            <p style={subStyle}>
              No vamos a funcionar bajo una lógica de cobro por hora ni estar delimitando constantemente cada tarea pequeña.
              La idea es operar como <strong>partners</strong>, con un ancho de banda acorde al fee mensual.
            </p>

            <div
              style={{
                background: "var(--gd-dark)",
                borderRadius: "var(--radius)",
                padding: "28px 32px",
                marginTop: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: 20,
                  fontSize: 100,
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
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.82)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Un conjunto de medidas estratégicas, de gestión y/o tecnología orientadas a mover un tema desde un{" "}
                <strong style={{ color: "var(--gd-blue)" }}>punto A</strong> hacia un{" "}
                <strong style={{ color: "var(--gd-green)" }}>punto B</strong>.
              </p>
            </div>
          </div>

          <div className="fade-in fade-in-delay-1" style={{ paddingTop: 8 }}>
            <div
              style={{
                background: "var(--off-white)",
                border: "1.5px solid var(--gray-100)",
                borderRadius: "var(--radius)",
                padding: "32px",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--gray-400)",
                  marginBottom: 20,
                }}
              >
                Las diferencias entre proyectos serán temáticas
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {temas.map((tema) => (
                  <span
                    key={tema}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      padding: "8px 16px",
                      background: "var(--white)",
                      border: "1.5px solid var(--gray-100)",
                      borderRadius: 100,
                      color: "var(--gd-dark)",
                    }}
                  >
                    {tema}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, var(--gd-green) 0%, var(--gd-green-d) 100%)",
                borderRadius: "var(--radius)",
                padding: "24px 28px",
              }}
            >
              <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--white)", marginBottom: 8 }}>
                Sin microgestión de horas
              </h4>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                El foco está en mover el indicador, no en contabilizar cada tarea. Trabajamos con autonomía y rendimos cuentas por resultados.
              </p>
            </div>
          </div>
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
  display: "flex",
  alignItems: "center",
  gap: 8,
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

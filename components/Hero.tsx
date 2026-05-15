export default function Hero() {
  return (
    <section
      style={{
        background: "var(--gd-dark)",
        position: "relative",
        overflow: "hidden",
        padding: "96px 0 80px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background shapes */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", width: 320, height: 320, top: -80, right: "12%", borderRadius: "50%", background: "var(--gd-green)", opacity: 0.15 }} />
        <div style={{ position: "absolute", width: 180, height: 180, top: 60, right: "calc(12% + 140px)", borderRadius: "50%", background: "var(--gd-green-d)", opacity: 0.22 }} />
        <div style={{ position: "absolute", width: 200, height: 80, bottom: 40, left: -40, borderRadius: "50%", background: "var(--gd-blue)", opacity: 0.12 }} />
      </div>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2.5px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 32,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "6px 14px",
            borderRadius: 20,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gd-green)", display: "block" }} />
          Reunión de inicio · Mayo 2025
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 80px)",
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1.04,
            color: "var(--white)",
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Kick-off{" "}
          <span style={{ color: "var(--gd-green)" }}>Gudcompany</span>
          {" "}× Steps
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.72,
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          Este documento resume los temas clave para arrancar el trabajo de forma ordenada, segura y con foco en lo que importa.
        </p>

      </div>
    </section>
  );
}

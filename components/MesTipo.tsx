const SEMANAS = [1, 2, 3, 4, 5];

type EventoTipo = "estrategica" | "status" | "spot";

interface Evento {
  semana: number;
  tipo: EventoTipo;
  dia: string;
  label: string;
  sublabel?: string;
}

const EVENTOS: Evento[] = [
  { semana: 1, tipo: "estrategica", dia: "Lun", label: "Reunión estratégica", sublabel: "Dirección y prioridades" },
  { semana: 2, tipo: "status",      dia: "Mié", label: "Status proyectos",    sublabel: "Avance y bloqueos"      },
  { semana: 3, tipo: "spot",        dia: "Mar", label: "Spot",                sublabel: "Proyecto específico"    },
  { semana: 4, tipo: "status",      dia: "Mié", label: "Status proyectos",    sublabel: "Avance y bloqueos"      },
  { semana: 4, tipo: "spot",        dia: "Vie", label: "Spot",                sublabel: "Proyecto específico"    },
  { semana: 5, tipo: "spot",        dia: "Jue", label: "Spot",                sublabel: "Proyecto específico"    },
];

const TIPO_CONFIG: Record<EventoTipo, { color: string; bg: string; border: string; dot: string }> = {
  estrategica: {
    color: "#4ECB9E",
    bg: "rgba(58,142,126,0.28)",
    border: "rgba(58,142,126,0.45)",
    dot: "#4ECB9E",
  },
  status: {
    color: "#80BAD8",
    bg: "rgba(128,186,216,0.22)",
    border: "rgba(128,186,216,0.38)",
    dot: "#80BAD8",
  },
  spot: {
    color: "#E8701E",
    bg: "rgba(232,112,30,0.22)",
    border: "rgba(232,112,30,0.38)",
    dot: "#E8701E",
  },
};

function EventoCard({ evento }: { evento: Evento }) {
  const cfg = TIPO_CONFIG[evento.tipo];
  return (
    <div
      style={{
        background: cfg.bg,
        border: `1.5px solid ${cfg.border}`,
        borderRadius: 8,
        padding: "7px 10px",
        display: "flex",
        alignItems: "center",
        gap: 7,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: cfg.dot,
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: cfg.color,
            lineHeight: 1.3,
          }}
        >
          {evento.label}
        </div>
        <div style={{ fontSize: 9.5, color: cfg.color, opacity: 0.6, marginTop: 1 }}>
          {evento.dia}
        </div>
      </div>
    </div>
  );
}

export default function MesTipo({ inline = false }: { inline?: boolean }) {
  return (
    <div
      style={inline ? {} : {
        background: "var(--gd-dark-2)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        padding: "32px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h3
            style={{
              fontSize: inline ? 10 : 21,
              fontWeight: inline ? 700 : 800,
              letterSpacing: inline ? "2px" : "-0.5px",
              color: inline ? "var(--gray-400)" : "var(--gd-dark)",
              textTransform: inline ? "uppercase" : "none",
            }}
          >
            Mes tipo
          </h3>
        </div>

        {/* Leyenda */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {(["estrategica", "status", "spot"] as EventoTipo[]).map((tipo) => {
            const cfg = TIPO_CONFIG[tipo];
            const labels: Record<EventoTipo, string> = {
              estrategica: "Estratégica",
              status: "Status",
              spot: "Spot",
            };
            return (
              <div key={tipo} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: cfg.dot,
                  }}
                />
                <span style={{ fontSize: 11.5, color: "var(--gray-600)", fontWeight: 500 }}>
                  {labels[tipo]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid de semanas */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 12,
        }}
      >
        {SEMANAS.map((semana) => {
          const eventos = EVENTOS.filter((e) => e.semana === semana);
          return (
            <div key={semana}>
              {/* Semana header */}
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--gray-400)",
                  marginBottom: 10,
                  paddingBottom: 8,
                  borderBottom: "1px solid var(--gray-100)",
                }}
              >
                Semana {semana}
              </div>

              {/* Eventos o estado vacío */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {eventos.length > 0 ? (
                  eventos.map((ev, i) => <EventoCard key={i} evento={ev} />)
                ) : (
                  <div
                    style={{
                      height: 72,
                      border: "1px dashed var(--gray-100)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 10, color: "var(--gray-200)", fontWeight: 500 }}>
                      Sin reuniones
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

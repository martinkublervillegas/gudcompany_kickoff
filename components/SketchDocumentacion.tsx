import {
  Home, Settings, LayoutDashboard, FolderOpen, GitBranch,
  NotebookText, Monitor, Calendar, Map, BookOpen,
  BookMarked, Lightbulb, CheckSquare, RefreshCw, Plus,
} from "lucide-react";
import type { ElementType } from "react";

type SidebarItem = {
  Icon: ElementType;
  label: string;
  active?: boolean;
  indent?: number;
  section?: boolean;
  add?: boolean;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  { Icon: Home,            label: "Gestión de Proyectos",      section: true },
  { Icon: Settings,        label: "Espacio de trabajo",        indent: 0 },
  { Icon: LayoutDashboard, label: "Mis Proyectos",             indent: 0 },
  { Icon: LayoutDashboard, label: "Panel de Control",          indent: 0 },
  { Icon: FolderOpen,      label: "Proyectos",                 indent: 0 },
  { Icon: GitBranch,       label: "Flujos de Procesos",        indent: 1 },
  { Icon: NotebookText,    label: "Implementación Notion",     indent: 1, active: true },
  { Icon: Monitor,         label: "Implementación Tecnología", indent: 1 },
  { Icon: Calendar,        label: "Reuniones",                 indent: 0 },
  { Icon: Map,             label: "Roadmap",                   indent: 0 },

  { Icon: BookOpen,        label: "Conocimiento",              section: true },
  { Icon: BookMarked,      label: "Guía de Uso",               indent: 0 },
  { Icon: Lightbulb,       label: "Casos de Uso IA",           indent: 0 },
  { Icon: CheckSquare,     label: "Decisiones clave",          indent: 0 },
  { Icon: RefreshCw,       label: "Lecciones aprendidas",      indent: 0 },
  { Icon: Plus,            label: "Agregar contenido",         add: true },
];

const DOC_BLOCKS = [
  { type: "h1",   content: "Implementación Notion" },
  { type: "meta", content: "Última edición: hoy · Responsable: Steps · Estado: En progreso" },
  { type: "h2",   content: "Objetivo" },
  { type: "p",    content: "Configurar Notion como plataforma central de gestión de proyectos y conocimiento para Gudcompany, accesible para todo el equipo." },
  { type: "h2",   content: "Estructura propuesta" },
  { type: "list", items: ["Espacio principal Gudcompany", "Sección de Proyectos con tablero y subpáginas", "Wiki de procesos internos", "Registro de reuniones y decisiones", "Roadmap tecnológico"] },
  { type: "h2",   content: "Próximos pasos" },
  { type: "list", items: ["Definir estructura de permisos", "Crear plantillas base", "Onboarding del equipo"] },
];

export default function SketchDocumentacion() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Gestión del conocimiento
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Wiki centralizada donde el equipo documenta procesos, decisiones, aprendizajes y contexto de cada proyecto.
        </p>
      </div>

      <div
        style={{
          border: "1.5px solid var(--gray-100)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          background: "var(--white)",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          position: "relative",
        }}
      >
        {/* Sidebar */}
        <div style={{ background: "#F7F7F5", borderRight: "1px solid var(--gray-100)", padding: "12px 8px", position: "relative", zIndex: 1, overflowY: "auto" }}>
          {/* Workspace header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", marginBottom: 10, borderRadius: 6, background: "rgba(0,0,0,0.04)" }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: "var(--gd-dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 9, color: "var(--white)", fontWeight: 800 }}>G</span>
            </div>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--gd-dark)" }}>Gudcompany</span>
          </div>

          {/* Nav items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SIDEBAR_ITEMS.map((item, i) => {
              if (item.section) return (
                <div key={i} style={{ padding: "10px 8px 3px", marginTop: i > 0 ? 6 : 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--gray-400)" }}>
                    {item.label}
                  </span>
                </div>
              );
              if (item.add) return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 8px", marginTop: 4, cursor: "default" }}>
                  <item.Icon size={12} strokeWidth={1.5} style={{ color: "var(--gray-400)" }} />
                  <span style={{ fontSize: 11.5, color: "var(--gray-400)" }}>{item.label}</span>
                </div>
              );
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "3px 8px",
                    paddingLeft: item.indent === 1 ? 22 : 8,
                    borderRadius: 5,
                    background: item.active ? "rgba(58,142,126,0.12)" : "transparent",
                    cursor: "default",
                  }}
                >
                  <item.Icon
                    size={12}
                    strokeWidth={1.5}
                    style={{ color: item.active ? "var(--gd-green)" : "var(--gray-400)", flexShrink: 0 }}
                  />
                  <span style={{
                    fontSize: 11.5,
                    fontWeight: item.active ? 600 : 400,
                    color: item.active ? "var(--gd-green-d)" : "var(--gray-600)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px 36px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            {["Proyectos", "Implementación Notion"].map((b, i, arr) => (
              <span key={b} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 11, color: i === arr.length - 1 ? "var(--gray-600)" : "var(--gray-400)", fontWeight: i === arr.length - 1 ? 600 : 400 }}>{b}</span>
                {i < arr.length - 1 && <span style={{ fontSize: 10, color: "var(--gray-200)" }}>›</span>}
              </span>
            ))}
          </div>

          {/* Doc content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DOC_BLOCKS.map((block, i) => {
              if (block.type === "h1") return (
                <h2 key={i} style={{ fontSize: 22, fontWeight: 900, color: "var(--gd-dark)", letterSpacing: "-0.6px", marginBottom: 2 }}>{block.content}</h2>
              );
              if (block.type === "meta") return (
                <p key={i} style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 8 }}>{block.content}</p>
              );
              if (block.type === "h2") return (
                <h3 key={i} style={{ fontSize: 14, fontWeight: 700, color: "var(--gd-dark)", marginTop: 8, borderBottom: "1px solid var(--gray-100)", paddingBottom: 6 }}>{block.content}</h3>
              );
              if (block.type === "p") return (
                <p key={i} style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.65 }}>{block.content}</p>
              );
              if (block.type === "list") return (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {block.items!.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gd-green)", marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

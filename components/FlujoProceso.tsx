"use client";

import { Mail, FileText, FolderOpen, MessageSquare } from "lucide-react";
import type { ElementType } from "react";

const NODE_W = 116;
const NODE_H = 54;
const HS = NODE_W / 2;
const ROW1_Y = 44;
const ROW2_Y = 205;
const CY1 = ROW1_Y + NODE_H / 2; // 71
const CY2 = ROW2_Y + NODE_H / 2; // 232
const DIAM_R = 37; // visual tip distance of rotated diamond (52/2 * √2)

const NX = [118, 264, 410, 556];
const DX = 700;
const endCX = 800;
const startCX = 24;
const BX = [700, 556]; // Corrección directly below diamond; Ajustes aligned with Envío

const SVG_W = 880;
const SVG_H = 300;
const ARROW_C = "#B0B8C4";

type Resp = "Cliente" | "Consultor";

const RESP: Record<Resp, { border: string; pill: string; text: string }> = {
  Cliente:   { border: "#2D8E7E", pill: "rgba(45,142,126,0.13)",  text: "#1A6B5A" },
  Consultor: { border: "#5B8DB8", pill: "rgba(91,141,184,0.13)",  text: "#2A5880" },
};

const PLATFORM_COLOR: Record<string, string> = {
  Mail:   "#2D8E7E",
  Notion: "#7B6FE8",
  Drive:  "#B08020",
  Slack:  "#C85A10",
};

type NodeDef = {
  label: string;
  resp: Resp;
  Icon?: ElementType;
  platform?: string;
};

const NODES_TOP: NodeDef[] = [
  { label: "Recepción",   resp: "Cliente",   Icon: Mail,          platform: "Mail"   },
  { label: "Revisión",    resp: "Consultor", Icon: FileText,      platform: "Notion" },
  { label: "Elaboración", resp: "Consultor", Icon: FolderOpen,    platform: "Drive"  },
  { label: "Envío",       resp: "Consultor", Icon: Mail,          platform: "Mail"   },
];

const NODES_BOT: NodeDef[] = [
  { label: "Corrección",  resp: "Consultor", Icon: FolderOpen,    platform: "Drive"  },
  { label: "Ajustes",     resp: "Consultor", Icon: MessageSquare, platform: "Slack"  },
];

function arrow(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const tip = { x: x2, y: y2 };
  const b1 = { x: x2 - ux * 8 - uy * 3.5, y: y2 - uy * 8 + ux * 3.5 };
  const b2 = { x: x2 - ux * 8 + uy * 3.5, y: y2 - uy * 8 - ux * 3.5 };
  return { tip, b1, b2, x1, y1, x2: x2 - ux * 7, y2: y2 - uy * 7 };
}

function ArrowSVG({ a }: { a: ReturnType<typeof arrow> }) {
  return (
    <>
      <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={ARROW_C} strokeWidth="1.5" />
      <polygon points={`${a.tip.x},${a.tip.y} ${a.b1.x},${a.b1.y} ${a.b2.x},${a.b2.y}`} fill={ARROW_C} />
    </>
  );
}

function NodeCard({ node, cx, top }: { node: NodeDef; cx: number; top: number }) {
  const rs = RESP[node.resp];
  const ic = node.platform ? PLATFORM_COLOR[node.platform] : undefined;
  return (
    <div style={{ position: "absolute", left: cx - HS, top, width: NODE_W }}>
      <div style={{ position: "relative" }}>
        <div style={{
          width: NODE_W, height: NODE_H, background: "#fff",
          borderRadius: 8,
          border: `1.5px solid ${rs.border}28`,
          borderLeft: `3px solid ${rs.border}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          display: "flex", alignItems: "center",
          padding: "0 14px",
        }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "#1C1C1C", lineHeight: 1.25 }}>
            {node.label}
          </span>
        </div>
        {/* Platform icon pin */}
        {node.Icon && ic && (
          <div style={{
            position: "absolute", top: -7, right: -7,
            width: 18, height: 18, borderRadius: "50%",
            background: ic, border: "1.5px solid #fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
          }}>
            <node.Icon size={9} strokeWidth={2} style={{ color: "#fff" }} />
          </div>
        )}
      </div>
      {/* Responsible pill */}
      <div style={{ marginTop: 6, display: "flex", justifyContent: "center" }}>
        <span style={{
          fontSize: 8.5, fontWeight: 600,
          color: rs.text, background: rs.pill,
          borderRadius: 100, padding: "2px 8px",
        }}>
          {node.resp}
        </span>
      </div>
    </div>
  );
}

export default function FlujoProceso() {
  const aStart  = arrow(startCX + 14, CY1, NX[0] - HS, CY1);
  const a01     = arrow(NX[0] + HS, CY1, NX[1] - HS, CY1);
  const a12     = arrow(NX[1] + HS, CY1, NX[2] - HS, CY1);
  const a23     = arrow(NX[2] + HS, CY1, NX[3] - HS, CY1);
  const a3D     = arrow(NX[3] + HS, CY1, DX - DIAM_R, CY1);
  const aDEnd   = arrow(DX + DIAM_R, CY1, endCX - 14, CY1);
  const aDNo    = arrow(DX, CY1 + DIAM_R, BX[0], ROW2_Y);     // straight down
  const aCorAj  = arrow(BX[0] - HS, CY2, BX[1] + HS, CY2);   // Corrección → Ajustes
  const aAjEnv  = arrow(BX[1], ROW2_Y, NX[3], ROW1_Y + NODE_H); // Ajustes → Envío

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--gd-dark)", letterSpacing: "-0.4px", marginBottom: 4 }}>
          Diagramado de flujos
        </h3>
        <p style={{ fontSize: 13, color: "var(--gray-600)", lineHeight: 1.6 }}>
          Cada nodo muestra el paso, la plataforma donde ocurre y quién es responsable.
        </p>
      </div>

      <div style={{
        background: "#F8F9FA", border: "1.5px solid var(--gray-100)",
        borderRadius: "var(--radius)", padding: "32px 24px", overflowX: "auto",
      }}>
        <div style={{ position: "relative", width: SVG_W, height: SVG_H, margin: "0 auto" }}>

          <svg width={SVG_W} height={SVG_H} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <ArrowSVG a={aStart} />
            <ArrowSVG a={a01} />
            <ArrowSVG a={a12} />
            <ArrowSVG a={a23} />
            <ArrowSVG a={a3D} />
            <ArrowSVG a={aDEnd} />
            <ArrowSVG a={aDNo} />
            <ArrowSVG a={aCorAj} />
            <ArrowSVG a={aAjEnv} />
            <text x={DX + DIAM_R + 4} y={CY1 - 8} fill="#2D8E7E" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">Sí</text>
            <text x={DX + 8} y={CY1 + DIAM_R + 18} fill="#C85A10" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">No</text>
          </svg>

          {/* Start circle */}
          <div style={{
            position: "absolute", left: startCX - 14, top: CY1 - 14,
            width: 28, height: 28, borderRadius: "50%", background: "#2D8E7E",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 7, fontWeight: 800, color: "#fff", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>Inicio</span>
          </div>

          {/* Top row */}
          {NODES_TOP.map((n, i) => <NodeCard key={i} node={n} cx={NX[i]} top={ROW1_Y} />)}

          {/* Decision diamond */}
          <div style={{
            position: "absolute", left: DX - 26, top: CY1 - 26,
            width: 52, height: 52, background: "#fff",
            border: "2px solid #C09020", borderRadius: 5,
            transform: "rotate(45deg)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}>
            <span style={{ transform: "rotate(-45deg)", fontSize: 8, fontWeight: 800, color: "#9A7010", textAlign: "center", lineHeight: 1.2 }}>¿OK?</span>
          </div>

          {/* Bottom row */}
          {NODES_BOT.map((n, i) => <NodeCard key={i} node={n} cx={BX[i]} top={ROW2_Y} />)}

          {/* End circle */}
          <div style={{
            position: "absolute", left: endCX - 14, top: CY1 - 14,
            width: 28, height: 28, borderRadius: "50%", background: "#2D8E7E",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 0 3px rgba(45,142,126,0.18)",
          }}>
            <span style={{ fontSize: 7, fontWeight: 800, color: "#fff", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>Fin</span>
          </div>

        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.06)", justifyContent: "center" }}>
          {(["Cliente", "Consultor"] as Resp[]).map((r) => (
            <div key={r} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: RESP[r].border, opacity: 0.75 }} />
              <span style={{ fontSize: 10.5, color: "#6B7280", fontWeight: 500 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

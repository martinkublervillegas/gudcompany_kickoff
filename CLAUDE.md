@AGENTS.md

# Proyecto: Gudcompany × Steps — Kick-off

## Repositorio y deploy
- **GitHub:** https://github.com/steps-cl/gudcompany-kick-off
- **Deploy:** Vercel (conectado al repo, auto-deploy en push a `main`)
- **Git user:** info@steps.cl / Steps — usar SIEMPRE para commits en este proyecto

## Stack
- Next.js 16 (Turbopack) · TypeScript · Tailwind CSS · Lucide React
- App Router, todo en `app/` y `components/`

## Estructura
```
app/
  page.tsx          # Layout con sidebar + tab switching (useState)
  layout.tsx        # Metadata y font Inter
  globals.css       # Variables CSS (--gd-dark, --gd-green, etc.)
components/
  Sidebar.tsx       # Nav fija izquierda, 4 tabs (Tab type exportado)
  Hero.tsx          # Tab "Inicio" — dark, fullscreen
  Diagnostico.tsx   # Tab "Diagnóstico" — resultados del form (3 respuestas)
  Metodologia.tsx   # Tab "Metodología" — light mode, 3 cards + MesTipo
  MesTipo.tsx       # Calendario mensual de reuniones (inline en Metodología)
  ProyectosIniciales.tsx  # Tab "Proyectos Iniciales" — 3 proyectos con sketches
```

## Diseño
- **Sidebar:** light mode (blanco), 240px fijo
- **Inicio:** dark (`var(--gd-dark)`), 100vh
- **Diagnóstico:** light (`var(--off-white)`), anónimo
- **Metodología:** light (`var(--off-white)`)
- **Proyectos Iniciales:** light (`var(--off-white)`)
- Paleta: `--gd-green #3A8E7E`, `--gd-blue #80BAD8`, `--gd-orange #E8701E`

## Diagnóstico
Formulario de 47 preguntas respondido por 3 perfiles clave (anónimo):
- Dirección, Consultoría, Consultoría & Operaciones
- Los datos están hardcodeados en `Diagnostico.tsx` (no hay backend)
- Si llegan más respuestas: actualizar los arrays `SCORES`, `PRIORIDADES`, etc.

## Convenciones
- Estilos inline con `style={{}}` (no Tailwind classes en componentes)
- CSS variables definidas en `globals.css`
- Sin comentarios en el código salvo casos no obvios

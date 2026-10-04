import { motion } from "motion/react";
import type { ReactElement } from "react";
import {
  Compass,
  Search,
  BookOpen,
  MousePointerClick,
  Eye,
  Target,
  Trophy,
  Flame,
  Sparkles,
  Route,
  Map,
  Coins,
  ShieldCheck,
  CircleCheck,
  ArrowRight,
  ArrowDown,
  Check,
  X,
  RefreshCw,
  Layers,
} from "lucide-react";
import {
  container,
  listContainer,
  rise,
  SlideHeader,
  Card,
  InsightCard,
  PrincipleCard,
  QuoteBlock,
  ProgressBar,
  ObjectiveCard,
  BigStat,
  Source,
  Node,
  Eyebrow,
  MermaidChart,
} from "./ui";

/* ================================================================
   Small local helpers
================================================================ */
function Arrow({ dir = "down" }: { dir?: "down" | "right" }) {
  const Icon = dir === "down" ? ArrowDown : ArrowRight;
  return <Icon size={20} strokeWidth={1.75} className="text-cream/40 shrink-0" />;
}

function ChapterMark({ n, section }: { n: string; section: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-bold tracking-[0.1em] text-mint">{n}</span>
      <span className="text-[12px] font-[700] uppercase tracking-[0.14em] text-muted">
        {section}
      </span>
    </div>
  );
}

/* ================================================================
   SLIDE 01 — Portada
================================================================ */
function Cover() {
  const nodes = [
    { cx: 90,  cy: 260, tone: "#9EE86E" },
    { cx: 230, cy: 150, tone: "#F7F3E8" },
    { cx: 360, cy: 300, tone: "#B8C8BF" },
    { cx: 510, cy: 180, tone: "#9EE86E" },
    { cx: 640, cy: 320, tone: "#FFCC00" },
    { cx: 770, cy: 210, tone: "#9EE86E" },
  ];
  return (
    <motion.div
      variants={container}
      className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <motion.div variants={rise}>
          <Eyebrow tone="muted">Orientación · Descubrimiento · Aprendizaje contextual</Eyebrow>
        </motion.div>
        <motion.h1
          variants={rise}
          className="mt-6 text-[clamp(40px,6.2vw,64px)] font-[700] leading-[0.98] tracking-[-0.04em] text-cream"
        >
          Descubrimiento y aprendizaje progresivo en Olimpo
        </motion.h1>
        <motion.p
          variants={rise}
          className="mt-7 max-w-[520px] text-[17px] leading-[1.55] text-secondary-text"
        >
          Investigación y propuesta conceptual para una experiencia de
          acompañamiento contextual dentro del producto.
        </motion.p>
      </div>

      <motion.div variants={rise} className="relative">
        <svg viewBox="0 0 860 440" className="w-full">
          <g stroke="rgba(247,243,232,0.16)" strokeWidth="1.5" fill="none">
            {nodes.slice(0, -1).map((n, i) => {
              const next = nodes[i + 1];
              return (
                <motion.line
                  key={i}
                  x1={n.cx} y1={n.cy} x2={next.cx} y2={next.cy}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.18 }}
                />
              );
            })}
          </g>
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.cx} cy={n.cy} r={i === 0 ? 12 : 8}
              fill={n.tone}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.18 }}
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
          ))}
          <motion.circle
            cx={nodes[nodes.length - 1].cx} cy={nodes[nodes.length - 1].cy}
            r={16} fill="none" stroke="#FFCC00" strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            style={{ transformOrigin: `${nodes[nodes.length - 1].cx}px ${nodes[nodes.length - 1].cy}px` }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 02 — El problema no es enseñar todo
================================================================ */
function Problem() {
  const items = [
    { icon: Search,           kicker: "Descubrimiento", title: "No sabe que la funcionalidad existe.",                         tone: "mint" as const },
    { icon: BookOpen,         kicker: "Comprensión",    title: "Sabe que existe, pero no comprende cómo utilizarla.",         tone: "mint" as const },
    { icon: MousePointerClick, kicker: "Ejecución",     title: "Sabe qué quiere hacer, pero no encuentra cómo llegar.",      tone: "mint" as const },
  ];
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-12">
      <SlideHeader
        eyebrow="PROBLEMA"
        title="El problema no es enseñar todo"
        lead="Los usuarios entran a Olimpo con una intención concreta. No quieren estudiar la plataforma antes de utilizarla."
      />
      <motion.div variants={listContainer} className="grid gap-6 md:grid-cols-3">
        {items.map((it) => <InsightCard key={it.kicker} {...it} />)}
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 03 — Mostrar no significa enseñar
================================================================ */
function TourLimits() {
  const items = [
    { icon: Eye,       kicker: "Interrumpe",        title: "Puede interferir con la intención original",   body: "El usuario entra a Olimpo para realizar una acción, no necesariamente para recibir una explicación inicial extensa.", tone: "cream" as const },
    { icon: RefreshCw, kicker: "Se olvida",          title: "Aparece antes de ser relevante",               body: "La información llega demasiado pronto y se pierde antes de poder aplicarse.",                                   tone: "cream" as const },
    { icon: X,         kicker: "Tiende a omitirse",  title: "Mayor probabilidad de ser ignorada",           body: "Las explicaciones extensas tienen mayor probabilidad de ser ignoradas cuando aparecen fuera de contexto.",        tone: "cream" as const },
  ];
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-10">
      <SlideHeader eyebrow="PRINCIPIO" title="Mostrar no significa enseñar" />
      <motion.div variants={listContainer} className="grid gap-6 md:grid-cols-3">
        {items.map((it) => <InsightCard key={it.kicker} {...it} />)}
      </motion.div>
      <div className="flex flex-col gap-3">
        <QuoteBlock tone="mint">
          La ayuda funciona mejor cuando aparece en contexto y cuando el usuario
          puede recuperarla cuando la necesita.
        </QuoteBlock>
        <Source>Fuente: Nielsen Norman Group — Onboarding Tutorials vs. Contextual Help.</Source>
      </div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 04 — Cambio de enfoque + contexto actual
   [Combinación de antiguas slides 04 y 05]
================================================================ */
function ShiftAndContext() {
  return (
    <motion.div
      variants={container}
      className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]"
    >
      {/* Left: editorial statement */}
      <div className="flex flex-col gap-7">
        <motion.div variants={rise}>
          <ChapterMark n="—" section="Cambio de enfoque" />
        </motion.div>
        <motion.h1
          variants={rise}
          className="text-[clamp(32px,5vw,56px)] font-[700] leading-[1.02] tracking-[-0.035em] text-cream"
        >
          De <span className="text-secondary-text">"explicar Olimpo"</span>
          <br />a{" "}
          <span className="text-mint">"ayudar a descubrirlo"</span>
        </motion.h1>
        <motion.p variants={rise} className="max-w-[480px] text-[17px] leading-[1.55] text-secondary-text">
          La experiencia debe acompañar el aprendizaje progresivamente y no
          concentrarlo todo en el primer ingreso.
        </motion.p>
      </div>

      {/* Right: Misiones + Rachas context */}
      <motion.div variants={listContainer} className="flex flex-col gap-4">
        <motion.div variants={rise}>
          <Eyebrow tone="muted">Olimpo ya tiene dos mecánicas de progreso</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {/* Misiones */}
          <motion.div
            variants={rise}
            className="flex flex-col gap-3 rounded-[20px] border border-yellow/18 bg-yellow/[0.04] p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-yellow/22 bg-yellow/10">
              <Trophy size={16} strokeWidth={1.75} className="text-yellow" />
            </span>
            <h3 className="text-[15px] font-[650] text-cream">Misiones</h3>
            <ul className="space-y-1 text-[12px] text-secondary-text">
              <li>Desafíos promocionales</li>
              <li>Condiciones y duración</li>
              <li>La recompensa es protagonista</li>
            </ul>
          </motion.div>

          {/* Rachas */}
          <motion.div
            variants={rise}
            className="flex flex-col gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.05]">
              <Flame size={16} strokeWidth={1.75} className="text-cream/65" />
            </span>
            <h3 className="text-[15px] font-[650] text-cream">Rachas</h3>
            <ul className="space-y-1 text-[12px] text-secondary-text">
              <li>Continuidad y repetición</li>
              <li>Puede romperse</li>
              <li>La constancia es protagonista</li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={rise}>
          <QuoteBlock tone="mint">¿Dónde vive entonces el aprendizaje?</QuoteBlock>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 05 — Un ecosistema, tres propósitos
   [Antigua slide 06]
================================================================ */
const ECOSYSTEM_CHART = `%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 45,
    "rankSpacing": 55
  },
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#17382E"
  }
}}%%
flowchart TB
    O["OLIMPO"]
    O --> M
    O --> R
    O --> D
    M["MISIONES<br/><br/>Desafío promocional<br/>Condiciones<br/>Expira<br/>Recompensa protagonista"]
    R["RACHAS<br/><br/>Continuidad<br/>Repetición<br/>Puede romperse<br/>Constancia protagonista"]
    D["DESCUBRE OLIMPO<br/><br/>Descubrimiento<br/>Aprendizaje<br/>Progreso permanente<br/>Autonomía como resultado"]
    classDef principal fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;
    classDef misiones fill:#F7F3E8,stroke:#FFFFFF,stroke-width:2px,color:#17382E,font-weight:bold;
    classDef rachas fill:#1D3327,stroke:#9EE86E,stroke-width:2px,color:#F7F5ED,font-weight:bold;
    classDef descubre fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;
    class O principal;
    class M misiones;
    class R rachas;
    class D descubre;`;

function EcosystemDiagram() {
  return (
    <motion.div variants={container} className="flex h-full flex-col gap-4 py-2">
      <SlideHeader eyebrow="MAPA DEL ECOSISTEMA" title="Un ecosistema, tres propósitos" />
      {/* flex-1 + min-h-0 gives the chart all remaining height; the SVG scales to fill it */}
      <div className="flex-1 min-h-0 w-full">
        <MermaidChart chart={ECOSYSTEM_CHART} className="h-full w-full" />
      </div>
      <motion.p variants={rise} className="text-[15px] text-secondary-text">
        Cada sistema responde a una función diferente dentro de la experiencia.
      </motion.p>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 06 — El objetivo define QUÉ. La guía explica CÓMO.
   [Antigua slide 08]
================================================================ */
function CorePrinciple() {
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-10">
      <SlideHeader
        eyebrow="PRINCIPIO CENTRAL"
        title={
          <>
            El objetivo define <span className="text-mint">QUÉ</span>.{" "}
            La guía explica <span className="text-yellow">CÓMO</span>.
          </>
        }
        lead="El sistema no reconoce haber visto una guía. Reconoce haber realizado la acción real."
      />

      {/* Branching diagram */}
      <motion.div variants={listContainer} className="flex flex-col items-center gap-0">
        <motion.div variants={rise}>
          <Node label="OBJETIVO" tone="aprendizaje" strong />
        </motion.div>

        <svg viewBox="0 0 480 70" className="w-full max-w-[480px] shrink-0">
          <line x1="240" y1="0"  x2="240" y2="20" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="90"  y1="20" x2="390" y2="20" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="90"  y1="20" x2="90"  y2="70" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="390" y1="20" x2="390" y2="70" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
        </svg>

        <motion.div variants={listContainer} className="grid w-full max-w-[560px] grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-2">
            <Node label="Sabe hacerlo" tone="neutral" />
            <div className="h-10 w-px bg-cream/15" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Node label="Necesita ayuda" tone="neutral" />
            <div className="h-4 w-px bg-cream/15" />
            <Node label="Ver cómo" tone="asistencia" />
            <div className="h-4 w-px bg-cream/15" />
          </div>
        </motion.div>

        <svg viewBox="0 0 480 50" className="w-full max-w-[480px] shrink-0">
          <line x1="90"  y1="0"  x2="90"  y2="30" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="390" y1="0"  x2="390" y2="30" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="90"  y1="30" x2="390" y2="30" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
          <line x1="240" y1="30" x2="240" y2="50" stroke="rgba(247,245,237,0.2)" strokeWidth="1.5" />
        </svg>

        <motion.div variants={listContainer} className="flex flex-col items-center gap-2">
          <Node label="Acción" tone="aprendizaje" />
          <div className="h-3 w-px bg-cream/15" />
          <Node label="Resultado" tone="principal" strong />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 07 — ¿Qué debería enseñar el primer ingreso?
   [Antigua slide 10 + principio de opcionalidad de antigua slide 09]
================================================================ */
function FirstExperience() {
  const items = [
    { n: "01", title: "Cómo orientarse en Olimpo",    icon: Compass  },
    { n: "02", title: "Que existe Descubre Olimpo",   icon: Sparkles },
    { n: "03", title: "Dónde volver a encontrarlo",   icon: Map      },
  ];
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-10">
      <SlideHeader
        eyebrow="PRIMER INGRESO"
        title="¿Qué debería enseñar el primer ingreso?"
        lead="No Deportes, Casino, Cash Out ni promociones. Solo lo mínimo para poder empezar."
      />
      <motion.div variants={listContainer} className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.n} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-[30px] font-[700] tracking-[-0.03em] text-mint">{it.n}</span>
              <it.icon size={22} strokeWidth={1.75} className="text-cream/55" />
            </div>
            <h3 className="text-[19px] font-[650] leading-tight text-cream">{it.title}</h3>
          </Card>
        ))}
      </motion.div>
      <div className="flex flex-col gap-3">
        <QuoteBlock tone="mint">Propuesta: 2–3 pasos. Una sola vez.</QuoteBlock>
        <motion.p variants={rise} className="max-w-[740px] text-[15px] leading-[1.5] text-secondary-text">
          Después de esta orientación inicial, el resto del aprendizaje es opcional y puede
          retomarse cuando el usuario lo necesite.
        </motion.p>
      </div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 08 — Descubre Olimpo (UI conceptual)
   [Antigua slide 11]
================================================================ */
function DiscoverUI() {
  return (
    <motion.div variants={container} className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <SlideHeader
        eyebrow="PROPUESTA CONCEPTUAL"
        eyebrowTone="mint"
        title="Un espacio persistente de objetivos"
        lead="La recompensa acompaña, pero no domina la lectura."
      />
      <motion.div variants={rise} className="flex flex-col gap-2">
        <span className="self-start text-[10px] font-[700] uppercase tracking-[0.14em] text-muted border border-white/14 rounded-full px-3 py-1">
          Ejemplo conceptual
        </span>
        <div className="rounded-[25px] border border-white/12 bg-bg-secondary p-7 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Compass size={20} className="text-mint" strokeWidth={1.75} />
              <span className="text-[16px] font-[650] text-cream">Descubre Olimpo</span>
            </div>
            <span className="text-[12px] font-[600] text-secondary-text">1 de 4 objetivos</span>
          </div>
          <div className="mb-6">
            <ProgressBar value={25} tone="mint" />
          </div>
          <div className="space-y-3">
            <ObjectiveCard state="done" title="Conoce dónde encontrar tus objetivos" />
            <ObjectiveCard
              state="todo"
              title="Guarda un favorito"
              desc="Marca un evento para volver a él cuando quieras."
              libras="+ X Libras"
              showHelp
            />
            <ObjectiveCard
              state="todo"
              title="Revisa tus apuestas"
              desc="Encuentra el historial y el estado de tus jugadas."
              libras="+ X Libras"
              showHelp
            />
            <ObjectiveCard
              state="todo"
              title="Conoce tus herramientas de Juego Responsable"
              desc="Descubre dónde encontrar opciones de control y ayuda."
              libras="+ X Libras"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 09 — Dos caminos. Una misma fuente de verdad.
   [Combinación de antiguas slides 12 y 13]
================================================================ */
const TWO_PATHS_CHART = `%%{init: {
  "theme": "base",
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 34,
    "rankSpacing": 52
  },
  "themeVariables": {
    "fontFamily": "Manrope, Inter, sans-serif",
    "lineColor": "#9EE86E",
    "textColor": "#F7F3E8",
    "edgeLabelBackground": "#10210A",
    "labelColor": "#F7F3E8"
  }
}}%%
flowchart LR
    A["OBJETIVO<br/>Comprende cómo realizar<br/>una apuesta"]
    B{"¿Sabes cómo<br/>realizar una apuesta?"}
    subgraph AUT["FINALIZACIÓN AUTÓNOMA"]
        direction LR
        C1["Explora<br/>Deportes"]
        C2["Selecciona<br/>un evento"]
        C3["Selecciona<br/>un mercado"]
        C4["Añade al<br/>cupón"]
        C5["Realiza<br/>la apuesta"]
        C1 --> C2 --> C3 --> C4 --> C5
    end
    subgraph GUIA["FINALIZACIÓN GUIADA"]
        direction LR
        D1["Selecciona<br/>Ver cómo"]
        D2["La guía lleva<br/>a Deportes"]
        D3["Indica dónde<br/>seleccionar"]
        D4["Acompaña hasta<br/>el cupón"]
        D5["Realiza la apuesta<br/>en la interfaz real"]
        D1 --> D2 --> D3 --> D4 --> D5
    end
    O["APUESTA<br/>REALIZADA"]
    P["OBJETIVO<br/>COMPLETADO"]
    A --> B
    B -- "Sí" --> C1
    B -- "No" --> D1
    C5 --> O
    D5 --> O
    O --> P
    classDef objetivo fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;
    classDef decision fill:#10210A,stroke:#9EE86E,stroke-width:3px,color:#F7F5ED,font-weight:bold;
    classDef autonomo fill:#F7F3E8,stroke:#FFFFFF,stroke-width:1.5px,color:#17382E;
    classDef guiado fill:#1D3327,stroke:#9EE86E,stroke-width:1.5px,color:#F7F5ED;
    classDef evento fill:#9EE86E,stroke:#C6F5A7,stroke-width:3px,color:#17382E,font-weight:bold;
    classDef resultado fill:#FFCC00,stroke:#FFE16B,stroke-width:3px,color:#17382E,font-weight:bold;
    class A objetivo;
    class B decision;
    class C1,C2,C3,C4,C5 autonomo;
    class D1,D2,D3,D4,D5 guiado;
    class O evento;
    class P resultado;
    style AUT fill:#162A1E,stroke:#F7F3E8,stroke-width:1px,color:#F7F5ED
    style GUIA fill:#162A1E,stroke:#9EE86E,stroke-width:1px,color:#9EE86E`;

function TwoPathsAndTruth() {
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-5">
      <SlideHeader
        eyebrow="MODELO DE FINALIZACIÓN"
        title="Dos caminos. Una misma fuente de verdad."
        lead="Ejemplo para explicar el flujo, no para incentivar actividad de juego."
      />

      <MermaidChart chart={TWO_PATHS_CHART} className="w-full" />

      {/* Callout compacto */}
      <motion.div variants={listContainer} className="grid grid-cols-[1fr_1fr_1.4fr] items-center gap-4">
        {/* ✗ Guía finalizada */}
        <motion.div
          variants={rise}
          className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] p-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20">
            <X size={14} className="text-cream/50" />
          </span>
          <div>
            <p className="text-[13px] font-[600] text-cream/70">Guía finalizada</p>
            <p className="mt-0.5 font-mono text-[11px] text-muted">guia_finalizada ≠ objetivo_completado</p>
          </div>
        </motion.div>

        {/* ✓ Acción realizada */}
        <motion.div
          variants={rise}
          className="flex items-center gap-3 rounded-[16px] border border-mint/28 bg-mint/[0.07] p-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mint bg-mint text-on-light">
            <Check size={14} strokeWidth={3} />
          </span>
          <div>
            <p className="text-[13px] font-[600] text-cream">Acción realizada</p>
            <p className="mt-0.5 font-mono text-[11px] text-mint/80">apuesta_realizada = objetivo_completado</p>
          </div>
        </motion.div>

        {/* Statement */}
        <motion.p variants={rise} className="text-[14px] leading-[1.45] text-secondary-text italic pl-2 border-l border-white/12">
          El sistema reconoce autonomía en lugar de obligar a consumir ayuda.
        </motion.p>
      </motion.div>

      <motion.p variants={rise} className="text-[11px] text-muted">
        La recompensa solo se incorpora cuando el objetivo sea elegible y haya sido validado desde Producto / Negocio / Compliance.
      </motion.p>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 10 — Si ya sabe hacerlo, Olimpo debería saberlo
   [Antigua slide 14]
================================================================ */
function RespectProgress() {
  return (
    <motion.div variants={container} className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <SlideHeader
          eyebrow="REGLA DE PROGRESO"
          title="Si ya sabe hacerlo, Olimpo debería saberlo"
          lead="Un usuario que ya realizó la acción antes de entrar a Descubre Olimpo no debería empezar desde cero."
        />
        <motion.div variants={listContainer} className="space-y-2">
          <motion.p variants={rise} className="text-[10px] font-[700] uppercase tracking-[0.12em] text-muted">
            Estado incorrecto
          </motion.p>
          <ObjectiveCard state="todo" title="Realiza tu primera acción" />
          <motion.div variants={rise} className="pl-5 text-[13px] text-muted">
            se convierte en
          </motion.div>
          <motion.p variants={rise} className="text-[10px] font-[700] uppercase tracking-[0.12em] text-mint">
            Estado correcto
          </motion.p>
          <ObjectiveCard state="done" title="Ya conoces esta funcionalidad" />
        </motion.div>
      </div>
      <motion.div variants={rise}>
        <Card interactive={false} className="flex flex-col gap-6">
          <p className="text-[14px] leading-relaxed text-secondary-text">
            El <span className="text-mint">estado de finalización</span> es independiente de
            la <span className="text-yellow">elegibilidad de recompensa</span>.
          </p>
          <div className="flex flex-col gap-3 rounded-[18px] border border-white/12 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 text-[14px]">
              <Node label="Completado" tone="aprendizaje" />
              <span className="text-cream/40">+</span>
              <Node label="Elegible" tone="principal" />
              <Arrow dir="right" />
              <span className="font-[600] text-yellow">Recompensa</span>
            </div>
            <div className="flex items-center gap-3 text-[14px]">
              <Node label="Completado" tone="aprendizaje" />
              <span className="text-cream/40">+</span>
              <Node label="No elegible" tone="neutral" />
              <Arrow dir="right" />
              <span className="text-secondary-text">Sin recompensa retroactiva</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   SLIDE 11 — Principios del sistema + Las Libras
   [Combinación de antiguas slides 15 y 16 — ÚLTIMA SLIDE]
================================================================ */
function PrinciplesAndLibras() {
  const principles = [
    { index: "01", title: "Progresivo",         body: "No enseñar todo desde el inicio.",                              icon: Layers           },
    { index: "02", title: "Opcional",            body: "El usuario decide cuándo continuar.",                           icon: Route            },
    { index: "03", title: "Contextual",          body: "La ayuda aparece cuando existe intención o necesidad.",         icon: Compass          },
    { index: "04", title: "Basado en acciones",  body: "El progreso depende de acciones reales, no de guías vistas.",  icon: MousePointerClick },
    { index: "05", title: "Permanente",          body: "El aprendizaje se acumula. No funciona como Misión ni Racha.", icon: ShieldCheck      },
  ];
  const libraOrder = ["Descubrir", "Aprender", "Hacer con autonomía", "Recibir recompensa"];

  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-6">
      <SlideHeader eyebrow="CIERRE" title="Principios del sistema" />

      {/* 5 principle cards — compact 5-column grid */}
      <motion.div variants={listContainer} className="grid grid-cols-5 gap-3">
        {principles.map((p) => (
          <motion.div
            key={p.index}
            variants={rise}
            className="flex flex-col gap-3 rounded-[18px] border border-white/12 bg-white/[0.05] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-[0.06em] text-muted">{p.index}</span>
              <p.icon size={16} strokeWidth={1.75} className="text-mint" />
            </div>
            <h3 className="text-[14px] font-[650] leading-tight text-cream">{p.title}</h3>
            <p className="text-[12.5px] leading-[1.45] text-secondary-text">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Las Libras — horizontal strip */}
      <motion.div
        variants={rise}
        className="flex items-center gap-6 rounded-[18px] border border-yellow/15 bg-yellow/[0.03] px-6 py-4"
      >
        <div className="flex flex-col gap-0.5 shrink-0">
          <Eyebrow tone="yellow">Las Libras</Eyebrow>
          <p className="text-[15px] font-[650] text-cream">La recompensa acompaña. No define.</p>
        </div>
        <div className="mx-4 h-8 w-px bg-white/12 shrink-0" />
        <div className="flex items-center gap-2 flex-wrap">
          {libraOrder.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 rounded-[10px] border px-3 py-1.5 text-[12px] font-[600] ${
                i === libraOrder.length - 1
                  ? "border-yellow/22 bg-yellow/[0.06] text-yellow/85"
                  : "border-mint/20 bg-mint/[0.05] text-mint"
              }`}>
                <span className="font-[700] text-[11px] opacity-70">{i + 1}</span>
                <span>{step}</span>
              </div>
              {i < libraOrder.length - 1 && (
                <ArrowRight size={13} className="text-cream/25 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <p className="ml-auto shrink-0 max-w-[200px] text-[12px] leading-[1.4] text-secondary-text text-right">
          Las Libras refuerzan el progreso, pero no son la razón principal.
        </p>
      </motion.div>

      {/* Closing statement */}
      <motion.div variants={rise} className="border-t border-white/10 pt-5">
        <h2 className="max-w-[900px] text-[clamp(18px,2.8vw,34px)] font-[700] leading-[1.1] tracking-[-0.025em] text-cream">
          El objetivo no es que el usuario complete guías.{" "}
          <span className="text-mint">
            El objetivo es que aprenda a utilizar Olimpo con autonomía.
          </span>
        </h2>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================
   Registry — 11 slides
================================================================ */
export type SlideDef = {
  render: () => ReactElement;
  section: string;
};

export const SLIDES: SlideDef[] = [
  { render: Cover,              section: "Portada"              },
  { render: Problem,            section: "01 / INVESTIGACIÓN"   },
  { render: TourLimits,         section: "01 / INVESTIGACIÓN"   },
  { render: ShiftAndContext,    section: "02 / OPORTUNIDAD"     },
  { render: EcosystemDiagram,   section: "02 / OPORTUNIDAD"     },
  { render: CorePrinciple,      section: "03 / SOLUCIÓN"        },
  { render: FirstExperience,    section: "04 / FUNCIONAMIENTO"  },
  { render: DiscoverUI,         section: "04 / FUNCIONAMIENTO"  },
  { render: TwoPathsAndTruth,   section: "04 / FUNCIONAMIENTO"  },
  { render: RespectProgress,    section: "04 / FUNCIONAMIENTO"  },
  { render: PrinciplesAndLibras, section: "05 / PRINCIPIOS"    },
];

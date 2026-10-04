import type { ReactElement, ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Check, Compass, Image, MousePointerClick, Sparkles, Target } from "lucide-react";
import staticGuideImage from "../../../../guia-estatica.png";
import dynamicGuideImage from "../../../../guia-dinamica.png";
import desktopOnboardingImage from "../assets/benchmark/onboarding-desktop-01.png";
import desktopTooltipImage from "../assets/benchmark/onboarding-desktop-02.png";
import mobileCoachmarkImage from "../assets/benchmark/onboarding-mobile-01.png";
import mobileTutorialImage from "../assets/benchmark/onboarding-mobile-02.png";
import { container, Eyebrow, IconBadge, MermaidChart, Panel, Placeholder, rise, SlideHeader, Source } from "./ui";

type Slide = { section: string; render: () => ReactElement };

function ObjectivePreview() {
  const tasks = [
    { label: "Conoce dónde encontrar tus objetivos", state: "done" },
    { label: "Descubre una función de Olimpo", state: "active" },
    { label: "Aprende cómo usarla", state: "todo" },
    { label: "Hazlo con autonomía", state: "todo" },
  ];
  return (
    <motion.div variants={rise} className="mx-auto w-full max-w-[520px] rounded-[24px] border border-white/12 bg-[#162a1e] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
      <div className="flex items-center justify-between"><div className="flex items-center gap-3"><Compass size={24} className="text-mint" /><span className="text-[20px] font-bold text-cream">Descubre Olimpo</span></div><span className="text-[16px] font-medium text-secondary">2 de 4</span></div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12"><motion.div initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-mint" /></div>
      <div className="mt-5 space-y-2">{tasks.map((task, index) => <motion.div key={task.label} variants={rise} initial="hidden" animate="show" transition={{ delay: 0.35 + index * 0.12 }} className={`flex items-center gap-3 rounded-[16px] border px-4 py-3 ${task.state === "done" ? "border-mint/35 bg-mint/[0.08]" : task.state === "active" ? "border-yellow/35 bg-yellow/[0.07]" : "border-white/10 bg-white/[0.03]"}`}><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${task.state === "done" ? "border-mint bg-mint text-on-light" : task.state === "active" ? "border-yellow text-yellow" : "border-white/25 text-white/20"}`}>{task.state === "done" ? <Check size={18} strokeWidth={3} /> : <span className="text-[16px] font-bold">{index + 1}</span>}</span><span className={`text-[16px] leading-[1.35] ${task.state === "todo" ? "text-secondary" : "text-cream"}`}>{task.label}</span></motion.div>)}</div>
      <div className="mt-5 flex items-center gap-3 text-[16px] text-secondary"><Target size={20} className="text-mint" />El progreso se construye con acciones reales.</div>
    </motion.div>
  );
}

function Cover() {
  return <motion.div variants={container} className="grid h-full grid-cols-1 items-center gap-8 md:grid-cols-[0.95fr_1.05fr]"><div><motion.div variants={rise}><Eyebrow tone="muted">Review UX · Descubre Olimpo</Eyebrow></motion.div><motion.h1 variants={rise} className="mt-6 max-w-[700px] text-[clamp(42px,6vw,64px)] font-bold leading-[0.98] tracking-[-0.04em] text-cream">Sistema de <span className="text-mint">descubrimiento</span> y aprendizaje progresivo</motion.h1><motion.p variants={rise} className="mt-7 max-w-[590px] text-[20px] leading-[1.45] text-secondary">Alcance, arquitectura de contenido y dirección de experiencia para orientar al usuario sin interrumpir su intención.</motion.p></div><ObjectivePreview /></motion.div>;
}

function Scope() {
  const items = [[Compass, "Orientar", "Ayudar a entender dónde está el espacio y cómo volver a él."], [BookOpen, "Descubrir", "Hacer visibles capacidades y rutas que el usuario todavía no conoce."], [MousePointerClick, "Aprender bajo demanda", "Explicar cómo actuar cuando existe intención o necesidad."]] as const;
  return <motion.div variants={container} className="flex h-full flex-col justify-center gap-10"><SlideHeader eyebrow="01 · ALCANCE" title={<>Un sistema para aprender a usar <span className="text-mint">Olimpo</span></>} lead="La propuesta organiza orientación, descubrimiento y ayuda contextual en un espacio opcional, medible y recuperable." /><div className="grid gap-5 md:grid-cols-3">{items.map(([icon, title, body]) => <Panel key={title} interactive className="flex flex-col gap-5"><IconBadge icon={icon} /><div><h2 className="text-[24px] font-bold text-cream">{title}</h2><p className="mt-3 text-[18px] leading-[1.45] text-secondary">{body}</p></div></Panel>)}</div><motion.div variants={rise} className="flex items-center gap-4 border-l-2 border-mint pl-5 text-[18px] text-cream"><Target size={24} className="shrink-0 text-mint" />El sistema educa y reduce incertidumbre. No optimiza intensidad de juego.</motion.div></motion.div>;
}

function PhaseColumn({ number, title, tone, items }: { number: string; title: string; tone: "mint" | "yellow" | "cream"; items: string[] }) {
  const colors = { mint: "border-mint/45 bg-mint/[0.06] text-mint", yellow: "border-yellow/45 bg-yellow/[0.06] text-yellow", cream: "border-cream/35 bg-white/[0.05] text-cream" };
  return <motion.div variants={rise} className={`min-w-0 rounded-[20px] border p-5 ${colors[tone]}`}><div className="flex items-baseline gap-3"><span className="text-[18px] font-bold">{number}</span><h2 className="text-[22px] font-bold text-cream">{title}</h2></div><div className="mt-5 space-y-3">{items.map((item, index) => <div key={item} className="flex gap-3 rounded-[14px] border border-white/10 bg-black/10 px-4 py-3"><span className="text-[16px] font-bold text-secondary">0{index + 1}</span><span className="text-[16px] leading-[1.35] text-cream">{item}</span></div>)}</div></motion.div>;
}

function Phases() {
  return <motion.div variants={container} className="flex h-full flex-col justify-center gap-6"><SlideHeader eyebrow="02 · FASES" title="La evolución del espacio se mide por funcionalidades" lead="Cada fase agrega una capacidad concreta al sistema y deja una base para validar su utilidad antes de ampliar el alcance." /><div className="relative grid gap-3 md:grid-cols-3"><PhaseColumn number="Fase 1" title="MVP" tone="mint" items={["Primeros pasos", "Descubrir productos", "Validación de apuestas deportivas", "Introducir este espacio y validar uso"]} /><div className="pointer-events-none absolute left-[31.8%] top-1/2 hidden -translate-y-1/2 md:block"><ArrowRight size={24} className="text-mint/60" /></div><PhaseColumn number="Fase 2" title="Ampliación" tone="yellow" items={["Agregar nuevas tareas en Descubre Olimpo", "Extender cobertura según fricciones validadas", "Medir utilidad y recuperación"]} /><div className="pointer-events-none absolute left-[65.2%] top-1/2 hidden -translate-y-1/2 md:block"><ArrowRight size={24} className="text-yellow/60" /></div><PhaseColumn number="Fase 3" title="Adaptación" tone="cream" items={["Segmentar por tipo de público", "Autogestionar el espacio desde un módulo de personalización", "Priorizar contenido según necesidad"]} /></div><Source>La priorización de objetivos, eventos y reglas de elegibilidad debe validarse antes de publicar cada fase.</Source></motion.div>;
}

function ContentGroup({ label, children, tone = "neutral" }: { label: string; children: ReactNode; tone?: "neutral" | "mint" | "yellow" }) {
  const colors = { neutral: "border-white/14 bg-white/[0.04]", mint: "border-mint/35 bg-mint/[0.05]", yellow: "border-yellow/35 bg-yellow/[0.05]" };
  return <motion.div variants={rise} className={`rounded-[18px] border p-4 ${colors[tone]}`}><Eyebrow tone={tone === "yellow" ? "yellow" : tone === "mint" ? "mint" : "muted"}>{label}</Eyebrow><div className="mt-3">{children}</div></motion.div>;
}

function ContentItem({ children, emphasis = false }: { children: ReactNode; emphasis?: boolean }) {
  return <div className={`rounded-[12px] border px-4 py-3 text-[16px] leading-[1.3] ${emphasis ? "border-mint/35 bg-mint/[0.08] font-bold text-cream" : "border-white/10 bg-black/10 text-secondary"}`}>{children}</div>;
}

function ContentTree() {
  const chart = `flowchart TB
    A[Olimpo] --> B[Perfil] --> C[Descubre Olimpo]
    C --> D[Orientación inicial<br/>Cómo orientarse<br/>Dónde volver]
    C --> E[Hub de aprendizaje]
    E --> F[Primeros pasos<br/>Bonos · KYC · Liquidación]
    E --> G[Objetivos por producto<br/>Casino · Casino en vivo<br/>Deportes virtuales · Apuestas deportivas]
    E --> H[Estados y ayuda<br/>Pendiente · Completado<br/>Centro de ayuda · Soporte]
    G --> I[Progreso de la tarea<br/>Ver cómo · Ejecución autónoma<br/>Evento real · Objetivo completado]
    classDef entry fill:#1d3327,stroke:#f6ce4b,color:#f7f3e8,stroke-width:2px
    classDef hub fill:#17351f,stroke:#9ee86e,color:#f7f3e8,stroke-width:2px
    classDef detail fill:#14241a,stroke:#50705a,color:#e1e8dd,stroke-width:1px
    classDef progress fill:#234b25,stroke:#9ee86e,color:#f7f3e8,stroke-width:2px
    class A,B,C entry
    class E hub
    class D,F,G,H detail
    class I progress`;
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-5">
      <SlideHeader eyebrow="03 · ARQUITECTURA" title="Árbol de contenido" lead="El árbol reúne el acceso, la orientación y el recorrido que lleva cada tarea hasta su objetivo." />
      <MermaidChart chart={chart} className="h-[500px] rounded-[24px] border border-white/12 bg-white/[0.035] p-4" />
    </motion.div>
  );
}

function FlowNode({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "mint" | "yellow" }) {
  const colors = { neutral: "border-white/14 bg-white/[0.05]", mint: "border-mint/45 bg-mint/[0.08]", yellow: "border-yellow/45 bg-yellow/[0.08]" };
  return <div className={`rounded-[14px] border px-4 py-3 text-center text-[16px] font-medium leading-[1.3] text-cream ${colors[tone]}`}>{label}</div>;
}

function UseCases() {
  const chart = `flowchart TB
    A[Usuario inicia una tarea] --> B{¿Conoce el camino?}
    B -->|Sí| C[Ejecución autónoma]
    B -->|No| D[Ver cómo<br/>Guía contextual]
    C --> F[Acción real]
    D --> F
    F --> G{¿Ocurre el evento real?}
    G -->|Sí| H[Objetivo completado]
    G -->|No o abandono| I[Objetivo pendiente<br/>Puede reingresar]
    classDef start fill:#1d3327,stroke:#f6ce4b,color:#f7f3e8,stroke-width:2px
    classDef decision fill:#2a310f,stroke:#f6ce4b,color:#f7f3e8,stroke-width:2px
    classDef route fill:#14241a,stroke:#50705a,color:#e1e8dd,stroke-width:1px
    classDef done fill:#234b25,stroke:#9ee86e,color:#f7f3e8,stroke-width:2px
    classDef pending fill:#1a2b20,stroke:#7c9385,color:#f7f3e8,stroke-width:1px
    class A start
    class B,G decision
    class C,D,F route
    class H done
    class I pending`;
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-5">
      <SlideHeader eyebrow="04 · CASOS DE USO" title="Flujo de usuario: del descubrimiento al objetivo completado" lead="El flujo muestra los dos caminos posibles y el estado que permanece cuando la acción no se completa." />
      <MermaidChart chart={chart} className="h-[500px] rounded-[24px] border border-white/12 bg-white/[0.035] p-4" />
    </motion.div>
  );
}

function FlipGuideCard({ type, icon: Icon, tone, body, points, imageSrc }: { type: string; icon: typeof BookOpen; tone: "mint" | "yellow"; body: string; points: string[]; imageSrc: string }) {
  const watermark = tone === "mint" ? "text-mint/20" : "text-yellow/20";
  return <div className="flip-card h-[340px]" tabIndex={0}><div className="flip-card-inner"><div className="flip-card-face overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.05] p-7"><div className={`absolute right-6 top-6 ${watermark}`}><Icon size={84} strokeWidth={1} /></div><IconBadge icon={Icon} tone={tone} /><h2 className="mt-7 text-[28px] font-bold text-cream">{type}</h2><p className="mt-3 max-w-[420px] text-[18px] leading-[1.45] text-secondary">{body}</p><div className="mt-6 space-y-3">{points.map((point) => <p key={point} className="flex gap-3 text-[16px] text-cream"><Check size={20} className={tone === "mint" ? "shrink-0 text-mint" : "shrink-0 text-yellow"} />{point}</p>)}</div></div><div className="flip-card-face flip-card-back overflow-hidden rounded-[22px] border border-mint/35"><img src={imageSrc} alt={`Referencia de ${type}`} className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(8,20,9,0.94))] px-6 pb-5 pt-16"><p className="text-[18px] font-bold text-cream">{type}</p></div></div></div></div>;
}

function GuideTypes() {
  return <motion.div variants={container} className="flex h-full flex-col justify-center gap-8"><SlideHeader eyebrow="05 · TIPOS DE GUÍA" title="Dos formatos, una misma regla: enseñar cuando ayuda" lead="La guía estática explica conceptos y rutas estables. La dinámica acompaña una acción sobre la interfaz real." /><div className="grid gap-6 md:grid-cols-2"><FlipGuideCard type="Guía estática" icon={BookOpen} tone="mint" imageSrc={staticGuideImage} body="Combina grabaciones de pantalla, iconos animados y tarjetas de interfaz para explicar reglas, estados y conceptos." points={["Útil para Bonos, KYC y liquidación deportiva", "Se finaliza al recorrer y confirmar el contenido"]} /><FlipGuideCard type="Guía dinámica" icon={MousePointerClick} tone="yellow" imageSrc={dynamicGuideImage} body="Acompaña una acción real sobre la interfaz cuando el usuario selecciona Ver cómo." points={["Se activa desde un objetivo", "El evento real completa el objetivo"]} /></div><motion.div variants={rise} className="flex items-center justify-center gap-3 text-[18px] text-secondary"><BookOpen size={22} className="text-mint" /><ArrowRight size={20} className="text-muted" /><MousePointerClick size={22} className="text-yellow" /><span>Contenido explicativo y acción autónoma deben convivir.</span></motion.div></motion.div>;
}

function Benchmark() {
  return (
    <motion.div variants={container} className="flex h-full flex-col justify-center gap-6">
      <SlideHeader eyebrow="06 · BENCHMARK" title="Referencias visuales de onboarding" />
      <motion.div variants={rise} className="grid h-[490px] gap-4 md:grid-cols-[0.82fr_1.18fr]">
        <figure className="overflow-hidden rounded-[22px] border border-white/12 bg-[#f3f4f7]"><img src={desktopOnboardingImage} alt="Onboarding de Monday" className="h-full w-full object-cover object-center" /></figure>
        <div className="grid min-h-0 grid-rows-[0.9fr_1.1fr] gap-4">
          <figure className="overflow-hidden rounded-[22px] border border-white/12 bg-[#eff1fa]"><img src={desktopTooltipImage} alt="Tooltip contextual de Monday" className="h-full w-full object-cover object-center" /></figure>
          <div className="grid min-h-0 grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-[22px] border border-white/12 bg-[#222222]"><img src={mobileCoachmarkImage} alt="Coachmark móvil de Binance Square" className="h-full w-full object-contain" /></figure>
            <figure className="overflow-hidden rounded-[22px] border border-white/12 bg-black"><img src={mobileTutorialImage} alt="Tutorial móvil de Netflix Games" className="h-full w-full object-contain" /></figure>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SacPainPoints() {
  const points = ["Verificación KYC desactualizada", "Puntos, Libras y rangos difíciles de entender", "Reglas de apuestas deportivas poco visibles", "Deportes virtuales difíciles de descubrir", "Bonos y Misiones con reglas poco claras", "Cambios de interfaz difíciles de encontrar", "Beneficios y premios con condiciones poco claras", "Confianza en Casino sin suficiente contexto"];
  return <motion.div variants={container} className="flex h-full flex-col justify-center gap-8"><SlideHeader eyebrow="07 · HALLAZGOS SAC" title="Puntos de dolor hallados" /><div className="grid gap-4 md:grid-cols-2">{points.map((point, index) => <motion.div key={point} variants={rise} className="flex min-h-[110px] items-center rounded-[18px] border border-white/12 bg-white/[0.05] px-6"><span className="mr-5 text-[18px] font-bold text-mint">0{index + 1}</span><h2 className="text-[22px] font-bold leading-[1.25] text-cream">{point}</h2></motion.div>)}</div></motion.div>;
}

function Wireframes() {
  return <motion.div variants={container} className="flex h-full flex-col items-center justify-center text-center"><SlideHeader eyebrow="08 · DEMO" title="Prototipo navegable" /><motion.p variants={rise} className="mt-6 text-[22px] text-secondary">Pasaremos a la demo navegable.</motion.p></motion.div>;
}

function TimelineStep({ number, title, body }: { number: string; title: string; body: string }) {
  return <motion.div variants={rise} className="relative flex min-w-0 flex-1 flex-col items-center text-center"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-mint/55 bg-mint/[0.1] text-[18px] font-bold text-mint">{number}</span><h2 className="mt-4 text-[18px] font-bold leading-[1.2] text-cream">{title}</h2><p className="mt-2 text-[14px] leading-[1.35] text-secondary">{body}</p></motion.div>;
}

function NextSteps() {
  const steps = [["01", "Definir contenidos", "Qué formará parte de cada guía"], ["02", "Crear animaciones", "Tareas que lo requieran en guías estáticas"], ["03", "Armar todo en conjunto", "Contenido, estados y navegación"], ["04", "Recorrido virtual", "Coachmarks para misiones"], ["05", "Preparar y validar MVP", "Probar el recorrido completo"], ["06", "Realizar ajustes", "Resolver hallazgos de validación"], ["07", "MVP listo para handoff", "Entrega pulida al área de TI"]];
  return <motion.div variants={container} className="flex h-full flex-col justify-center gap-10"><SlideHeader eyebrow="09 · PRÓXIMOS PASOS" title="De la definición al handoff con TI" lead="El siguiente recorrido ordena el trabajo necesario para convertir la arquitectura en un MVP validado y listo para implementación." /><div className="relative flex items-start gap-3"><div className="absolute left-[7%] right-[7%] top-6 h-px bg-mint/35" />{steps.map(([number, title, body]) => <TimelineStep key={number} number={number} title={title} body={body} />)}</div><motion.div variants={rise} className="flex items-center justify-center gap-4 rounded-[20px] border border-mint/35 bg-mint/[0.07] p-6"><Sparkles size={26} className="text-mint" /><p className="text-[22px] text-cream">Resultado esperado: un MVP comprensible, recuperable, medible y listo para handoff.</p></motion.div></motion.div>;
}

export const SLIDES: Slide[] = [
  { section: "Review UX", render: Cover },
  { section: "Alcance", render: Scope },
  { section: "Fases", render: Phases },
  { section: "Arquitectura", render: ContentTree },
  { section: "Casos de uso", render: UseCases },
  { section: "Tipos de guía", render: GuideTypes },
  { section: "Benchmark", render: Benchmark },
  { section: "SAC", render: SacPainPoints },
  { section: "Wireframes", render: Wireframes },
  { section: "Próximos pasos", render: NextSteps },
];

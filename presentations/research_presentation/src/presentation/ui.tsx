import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

/* ----------------------------------------------------------------
   Shared motion presets
----------------------------------------------------------------- */
const EASE = [0.22, 1, 0.36, 1] as const;

export const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

export const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/* ----------------------------------------------------------------
   Mermaid diagram (async render)
----------------------------------------------------------------- */
type MermaidModule = typeof import("mermaid").default;
let _mermaid: MermaidModule | null = null;

async function getMermaid(): Promise<MermaidModule> {
  if (_mermaid) return _mermaid;
  const mod = await import("mermaid");
  _mermaid = mod.default;
  _mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    securityLevel: "loose",
    fontFamily: "Manrope, Inter, sans-serif",
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: "basis",
    },
  });
  return _mermaid;
}

export function MermaidChart({
  chart,
  className = "",
}: {
  chart: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`mmd-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    let cancelled = false;
    getMermaid().then(async (m) => {
      if (cancelled || !containerRef.current) return;
      try {
        const { svg } = await m.render(idRef.current, chart);
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        const svgEl = containerRef.current.querySelector("svg");
        if (svgEl) {
          // Keep viewBox intact — it's required for preserveAspectRatio scaling
          svgEl.removeAttribute("width");
          svgEl.removeAttribute("height");
          svgEl.setAttribute("width", "100%");
          svgEl.setAttribute("height", "100%");
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgEl.style.width = "100%";
          svgEl.style.height = "100%";
          svgEl.style.maxWidth = "100%";
          svgEl.style.maxHeight = "100%";
          svgEl.style.display = "block";
        }
      } catch (e) {
        console.error("Mermaid render error", e);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <motion.div
      ref={containerRef}
      variants={rise}
      className={`w-full ${className}`}
    />
  );
}

/* ----------------------------------------------------------------
   Eyebrow / label
----------------------------------------------------------------- */
export function Eyebrow({
  children,
  tone = "mint",
}: {
  children: ReactNode;
  tone?: "mint" | "yellow" | "muted" | "cream";
}) {
  const color = {
    mint: "text-mint",
    yellow: "text-yellow",
    muted: "text-muted",
    cream: "text-cream/60",
  }[tone];
  return (
    <span
      className={`text-[12px] font-bold uppercase tracking-[0.14em] ${color}`}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------
   Slide header
----------------------------------------------------------------- */
export function SlideHeader({
  eyebrow,
  eyebrowTone,
  title,
  lead,
}: {
  eyebrow?: string;
  eyebrowTone?: "mint" | "yellow" | "muted" | "cream";
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <motion.div variants={rise} className="max-w-[900px]">
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h1 className="text-[clamp(30px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.03em] text-cream">
        {title}
      </h1>
      {lead && (
        <p className="mt-5 max-w-[620px] text-[17px] leading-[1.55] text-secondary-text">
          {lead}
        </p>
      )}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Cards
----------------------------------------------------------------- */
export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <motion.div
      variants={rise}
      whileHover={interactive ? { scale: 1.015 } : undefined}
      transition={{ duration: 0.3, ease: EASE }}
      className={`rounded-[25px] border border-white/12 bg-white/[0.05] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function InsightCard({
  icon: Icon,
  kicker,
  title,
  body,
  tone = "cream",
}: {
  icon: LucideIcon;
  kicker: string;
  title: string;
  body?: string;
  tone?: "cream" | "mint" | "yellow";
}) {
  const accent = {
    cream: "text-cream",
    mint: "text-mint",
    yellow: "text-yellow",
  }[tone];
  return (
    <Card className="flex flex-col gap-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.05]">
        <Icon size={22} strokeWidth={1.75} className={accent} />
      </span>
      <div>
        <Eyebrow tone={tone === "cream" ? "muted" : (tone as "mint" | "yellow")}>
          {kicker}
        </Eyebrow>
        <h3 className="mt-2 text-[20px] font-[650] leading-[1.2] text-cream">
          {title}
        </h3>
      </div>
      {body && (
        <p className="text-[14px] leading-[1.5] text-secondary-text">{body}</p>
      )}
    </Card>
  );
}

export function PrincipleCard({
  index,
  title,
  body,
  icon: Icon,
}: {
  index: string;
  title: string;
  body: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold tracking-[0.06em] text-muted">
          {index}
        </span>
        <Icon size={20} strokeWidth={1.75} className="text-mint" />
      </div>
      <h3 className="text-[19px] font-[650] leading-[1.15] text-cream">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.45] text-secondary-text">{body}</p>
    </Card>
  );
}

/* ----------------------------------------------------------------
   Quote / statement block
----------------------------------------------------------------- */
export function QuoteBlock({
  children,
  tone = "mint",
}: {
  children: ReactNode;
  tone?: "mint" | "yellow";
}) {
  const border = {
    mint: "border-mint",
    yellow: "border-yellow",
  }[tone];
  return (
    <motion.blockquote
      variants={rise}
      className={`border-l-2 ${border} pl-6 text-[22px] font-[500] leading-[1.4] text-cream`}
    >
      {children}
    </motion.blockquote>
  );
}

/* ----------------------------------------------------------------
   Progress bar (animated)
----------------------------------------------------------------- */
export function ProgressBar({
  value,
  tone = "mint",
}: {
  value: number;
  tone?: "mint" | "yellow";
}) {
  const bg = tone === "mint" ? "bg-mint" : "bg-yellow";
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/12">
      <motion.div
        className={`h-full rounded-full ${bg}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
      />
    </div>
  );
}

/* ----------------------------------------------------------------
   Objective card (Descubre Olimpo)
----------------------------------------------------------------- */
export function ObjectiveCard({
  state,
  title,
  desc,
  libras,
  showHelp,
}: {
  state: "done" | "todo";
  title: string;
  desc?: string;
  libras?: string;
  showHelp?: boolean;
}) {
  const done = state === "done";
  return (
    <motion.div
      variants={rise}
      className={`flex items-start gap-4 rounded-[18px] border p-5 ${
        done
          ? "border-mint/30 bg-mint/[0.07]"
          : "border-white/12 bg-white/[0.035]"
      }`}
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          done ? "border-mint bg-mint text-on-light" : "border-white/30"
        }`}
      >
        {done && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[15px] font-[600] leading-tight text-cream">
            {title}
          </p>
          {libras != null && (
            <span className="shrink-0 text-[12px] font-[600] text-yellow/80">
              {libras}
            </span>
          )}
        </div>
        {desc && (
          <p className="mt-1.5 text-[13px] leading-[1.4] text-secondary-text">
            {desc}
          </p>
        )}
        <div className="mt-3 flex items-center gap-3">
          {done ? (
            <span className="text-[12px] font-[600] tracking-wide text-mint">
              Completado
            </span>
          ) : (
            <>
              <span className="rounded-full bg-mint px-3.5 py-1 text-[12px] font-[700] text-on-light">
                Ir
              </span>
              {showHelp && (
                <span className="rounded-full border border-white/25 px-3.5 py-1 text-[12px] font-[600] text-secondary-text">
                  Ver cómo
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Big number / editorial highlight
----------------------------------------------------------------- */
export function BigStat({
  value,
  label,
  tone = "mint",
}: {
  value: string;
  label: string;
  tone?: "mint" | "yellow" | "cream";
}) {
  const color = {
    mint: "text-mint",
    yellow: "text-yellow",
    cream: "text-cream",
  }[tone];
  return (
    <motion.div variants={rise} className="flex flex-col">
      <span
        className={`text-[clamp(52px,7vw,84px)] font-[800] leading-[0.9] tracking-[-0.04em] ${color}`}
      >
        {value}
      </span>
      <span className="mt-3 max-w-[220px] text-[13px] font-[700] uppercase tracking-[0.1em] text-secondary-text">
        {label}
      </span>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Source footnote
----------------------------------------------------------------- */
export function Source({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] leading-relaxed text-cream/65">{children}</p>
  );
}

/* ----------------------------------------------------------------
   Diagram node (custom, integrated — not Mermaid capture)
----------------------------------------------------------------- */
export function Node({
  label,
  sub,
  tone = "neutral",
  className = "",
  strong = false,
}: {
  label: string;
  sub?: string;
  tone?: "principal" | "aprendizaje" | "asistencia" | "neutral" | "decision";
  className?: string;
  strong?: boolean;
}) {
  const styles = {
    principal: "bg-yellow text-on-light border-yellow",
    aprendizaje: "bg-mint text-on-light border-mint",
    asistencia: "bg-surface text-cream border-mint/45",
    neutral: "bg-cream-soft text-on-light border-cream-soft/60",
    decision: "bg-bg border-mint text-cream",
  }[tone];
  return (
    <div
      className={`inline-flex flex-col items-center rounded-[16px] border px-5 py-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${styles} ${className}`}
    >
      <span
        className={`${strong ? "text-[15px] font-[700]" : "text-[13px] font-[600]"} leading-tight`}
      >
        {label}
      </span>
      {sub && <span className="mt-0.5 text-[11px] opacity-70">{sub}</span>}
    </div>
  );
}

export { EASE };

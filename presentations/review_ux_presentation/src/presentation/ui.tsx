import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

let mermaidModule: typeof import("mermaid").default | null = null;

async function getMermaid() {
  if (mermaidModule) return mermaidModule;
  const module = await import("mermaid");
  mermaidModule = module.default;
  mermaidModule.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "base",
    fontFamily: "GT Walsheim, sans-serif",
    themeVariables: {
      background: "#10210a",
      primaryColor: "#1d3327",
      primaryTextColor: "#f7f3e8",
      primaryBorderColor: "#9ee86e",
      lineColor: "#8fa49a",
      secondaryColor: "#25420f",
      tertiaryColor: "#0d1b08",
      fontSize: "26px",
    },
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
  });
  return mermaidModule;
}

export function MermaidChart({ chart, className = "" }: { chart: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    let cancelled = false;
    getMermaid().then(async (mermaid) => {
      if (cancelled || !ref.current) return;
      try {
        const { svg } = await mermaid.render(id.current, chart);
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
        const svgElement = ref.current.querySelector("svg");
        if (svgElement) {
          svgElement.removeAttribute("width");
          svgElement.removeAttribute("height");
          svgElement.setAttribute("width", "100%");
          svgElement.setAttribute("height", "100%");
          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgElement.style.display = "block";
          svgElement.style.maxWidth = "100%";
          svgElement.style.maxHeight = "100%";
        }
      } catch (error) {
        console.error("Mermaid render error", error);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return <motion.div ref={ref} variants={rise} className={`w-full ${className}`} />;
}

export function Eyebrow({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "yellow" | "muted" | "cream" }) {
  const colors = { mint: "text-mint", yellow: "text-yellow", muted: "text-muted", cream: "text-cream/65" };
  return <span className={`text-[14px] font-bold uppercase tracking-[0.14em] ${colors[tone]}`}>{children}</span>;
}

export function SlideHeader({ eyebrow, title, lead, tone = "mint" }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; tone?: "mint" | "yellow" | "muted" | "cream" }) {
  return (
    <motion.div variants={rise} className="max-w-[920px]">
      {eyebrow && <div className="mb-4"><Eyebrow tone={tone}>{eyebrow}</Eyebrow></div>}
      <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.04] tracking-[-0.03em] text-cream">{title}</h1>
      {lead && <p className="mt-5 max-w-[760px] text-[18px] leading-[1.45] text-secondary">{lead}</p>}
    </motion.div>
  );
}

export function Panel({ children, className = "", interactive = false }: { children: ReactNode; className?: string; interactive?: boolean }) {
  return (
    <motion.div
      variants={rise}
      whileHover={interactive ? { y: -3, borderColor: "rgba(158,232,110,0.45)" } : undefined}
      transition={{ duration: 0.3, ease: EASE }}
      className={`rounded-[20px] border border-white/12 bg-white/[0.05] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function IconBadge({ icon: Icon, tone = "mint" }: { icon: LucideIcon; tone?: "mint" | "yellow" | "cream" }) {
  const color = { mint: "text-mint", yellow: "text-yellow", cream: "text-cream" }[tone];
  return <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.05]"><Icon size={24} strokeWidth={1.75} className={color} /></span>;
}

export function Placeholder({ label, title, body, icon: Icon }: { label: string; title: string; body: string; icon: LucideIcon }) {
  return (
    <motion.div variants={rise} className="flex min-h-[320px] flex-col items-center justify-center rounded-[24px] border border-dashed border-mint/45 bg-[radial-gradient(circle_at_center,rgba(61,198,102,0.12),transparent_65%)] px-10 text-center">
      <Icon size={44} strokeWidth={1.3} className="text-mint" />
      <Eyebrow tone="muted">{label}</Eyebrow>
      <h2 className="mt-4 text-[28px] font-bold text-cream">{title}</h2>
      <p className="mt-3 max-w-[560px] text-[18px] leading-[1.45] text-secondary">{body}</p>
    </motion.div>
  );
}

export function Source({ children }: { children: ReactNode }) {
  return <p className="text-[14px] leading-[1.4] text-cream/60">{children}</p>;
}

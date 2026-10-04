import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "./presentation/slides";
import { EASE } from "./presentation/ui";

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = SLIDES.length;

  const go = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDirection(clamped >= current ? 1 : -1);
      return clamped;
    });
  }, [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") go(index + 1);
      if (event.key === "ArrowLeft" || event.key === "PageUp") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  const slide = SLIDES[index];

  return (
    <main className="relative h-full w-full overflow-hidden bg-bg text-cream">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,232,110,0.08),transparent_70%)] blur-3xl" />
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-[max(24px,4vw)] py-[max(72px,9vh)]">
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, y: 18 * direction }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 * direction }}
              transition={{ duration: 0.45, ease: EASE }}
              className="w-full"
            >
              {slide.render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-[max(20px,3vh)] left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">
        <NavButton onClick={() => go(index - 1)} disabled={index === 0} label="Anterior"><ChevronLeft size={20} strokeWidth={2} /></NavButton>
        <div className="flex items-center gap-3"><span className="text-[16px] font-bold tabular-nums tracking-[0.1em] text-cream">{String(index + 1).padStart(2, "0")}</span><span className="text-[16px] text-cream/35">/</span><span className="text-[16px] tabular-nums text-cream/45">{String(total).padStart(2, "0")}</span></div>
        <NavButton onClick={() => go(index + 1)} disabled={index === total - 1} label="Siguiente"><ChevronRight size={20} strokeWidth={2} /></NavButton>
      </div>

      <div className="absolute bottom-0 left-0 z-10 flex h-1 w-full">
        {SLIDES.map((_, slideIndex) => <button key={slideIndex} aria-label={`Ir a la slide ${slideIndex + 1}`} onClick={() => go(slideIndex)} className="group h-full flex-1"><span className={`block h-full w-full transition-colors duration-300 ${slideIndex <= index ? "bg-mint/80" : "bg-white/8 group-hover:bg-white/18"}`} /></button>)}
      </div>
    </main>
  );
}

function NavButton({ children, onClick, disabled, label }: { children: React.ReactNode; onClick: () => void; disabled: boolean; label: string }) {
  return <motion.button aria-label={label} onClick={onClick} disabled={disabled} whileHover={disabled ? undefined : { scale: 1.06 }} whileTap={disabled ? undefined : { scale: 0.94 }} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-cream transition-opacity disabled:opacity-25">{children}</motion.button>;
}

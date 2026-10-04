import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "./presentation/slides";
import { EASE } from "./presentation/ui";

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = SLIDES.length;

  const go = useCallback(
    (next: number) => {
      setIndex((cur) => {
        const clamped = Math.max(0, Math.min(total - 1, next));
        setDir(clamped >= cur ? 1 : -1);
        return clamped;
      });
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ")
        go(index + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const slide = SLIDES[index];

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg text-cream">
      {/* soft ambient glow, very subtle */}
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "radial-gradient(circle, #9EE86E 0%, transparent 70%)" }}
      />

      {/* section indicator — hidden on cover */}
      {index > 0 && (
        <div className="pointer-events-none absolute left-[max(24px,4vw)] top-[max(24px,3vh)] z-20">
          <span className="text-[12px] font-[700] uppercase tracking-[0.14em] text-cream/60">
            {slide.section}
          </span>
        </div>
      )}

      {/* deck */}
      <div className="mx-auto flex h-full max-w-[1600px] items-center px-[max(24px,4vw)] py-[max(72px,9vh)]">
        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, y: 18 * dir }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 * dir }}
              transition={{ duration: 0.45, ease: EASE }}
              className="w-full"
            >
              {slide.render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* navigation */}
      <div className="absolute bottom-[max(20px,3vh)] left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">
        <NavButton
          onClick={() => go(index - 1)}
          disabled={index === 0}
          label="Anterior"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </NavButton>

        <div className="flex items-center gap-3">
          <span className="text-[13px] font-[700] tabular-nums tracking-[0.1em] text-cream">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[13px] font-[500] text-cream/35">/</span>
          <span className="text-[13px] font-[500] tabular-nums text-cream/45">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <NavButton
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          label="Siguiente"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </NavButton>
      </div>

      {/* progress ticks */}
      <div className="absolute bottom-0 left-0 z-10 flex h-1 w-full">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a la slide ${i + 1}`}
            onClick={() => go(i)}
            className="group h-full flex-1"
          >
            <span
              className={`block h-full w-full transition-colors duration-300 ${
                i <= index ? "bg-mint/80" : "bg-white/8 group-hover:bg-white/18"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function NavButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      whileHover={disabled ? undefined : { scale: 1.06 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-cream transition-opacity disabled:opacity-25"
    >
      {children}
    </motion.button>
  );
}

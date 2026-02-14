"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Img = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  images?: Img[];
  confidential?: boolean;
  className?: string;
};

export function InteractiveImage({
  title,
  images,
  confidential,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const safeImages = useMemo(() => (images ?? []).slice(0, 3), [images]);

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-rotate images on hover (desktop)
  useEffect(() => {
    if (reduce) return;
    if (!hovered) return;
    if (safeImages.length <= 1) return;

    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, 1200);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [hovered, safeImages.length, reduce]);

  // Tap to cycle (mobile)
  const onTapCycle = () => {
    if (safeImages.length <= 1) return;
    setIndex((i) => (i + 1) % safeImages.length);
  };

  // Confidential / no images
  if (confidential || safeImages.length === 0) {
    return (
      <div
        className={[
          "relative flex h-44 items-center justify-center overflow-hidden rounded-xl",
          "border border-white/10 bg-white/5",
          className ?? "",
        ].join(" ")}
      >
        <span className="text-sm text-white/60">Confidential</span>
      </div>
    );
  }

  const current = safeImages[index];

  return (
    <div
      className={[
        "relative h-44 overflow-hidden rounded-xl border border-white/10 bg-white/5",
        className ?? "",
      ].join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onTapCycle}
      role="button"
      tabIndex={0}
      aria-label={`Preview images for ${title}`}
    >
      {/* Readability overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={reduce ? false : { opacity: 0, scale: 1.02 }}
          animate={reduce ? false : { opacity: 1, scale: 1 }}
          exit={reduce ? false : { opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.35, ease }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
            priority={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {safeImages.map((_, i) => (
            <span
              key={i}
              className={[
                "h-1.5 w-4 rounded-full border border-white/20",
                i === index ? "bg-white/60" : "bg-white/10",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      {/* Desktop hint */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-3 right-3 hidden text-xs text-white/60 md:block">
          Hover to preview
        </div>
      )}
    </div>
  );
}

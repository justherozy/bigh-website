"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useSpring,
  type MotionValue,
} from "framer-motion";

export default function Tilt3DCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 250, damping: 22, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 250, damping: 22, mass: 0.6 });
  const scale = useSpring(1, { stiffness: 250, damping: 22 });
  const glareX = useSpring(50, { stiffness: 250, damping: 28 });
  const glareY = useSpring(50, { stiffness: 250, damping: 28 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 12);
    rotateX.set((0.5 - py) * 12);
    glareX.set(px * 100);
    glareY.set(py * 100);
    scale.set(1.02);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
    scale.set(1);
  };

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {children}
        <Glare x={glareX} y={glareY} />
      </motion.div>
    </div>
  );
}

function Glare({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const background = useMotionTemplate`radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.22), transparent 60%)`;
  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
    />
  );
}

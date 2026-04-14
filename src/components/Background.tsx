import { useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function Background() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Dual-spring system for interactive organic fluidity.
  // The lead spring tracks the cursor closely.
  const springX1 = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY1 = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // The trail spring lags behind gracefully.
  // Moving the mouse fast separates the two orbs, creating a dynamic stretching color trail.
  const springX2 = useSpring(mouseX, { stiffness: 25, damping: 30 });
  const springY2 = useSpring(mouseY, { stiffness: 25, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // =========================
  // LIGHT MODE
  // =========================
  // Lead: Deep Slate/Blue shadow (Much darker for high visibility)
  const lightOrb1 = useMotionTemplate`radial-gradient(500px circle at ${springX1}px ${springY1}px, rgba(71, 85, 105, 0.5), transparent 60%)`;
  // Trail: Deep Sand/Stone shadow
  const lightOrb2 = useMotionTemplate`radial-gradient(800px circle at ${springX2}px ${springY2}px, rgba(120, 113, 108, 0.5), transparent 50%)`;

  // =========================
  // DARK MODE
  // =========================
  // Lead: Electric Blue glow
  const darkOrb1 = useMotionTemplate`radial-gradient(500px circle at ${springX1}px ${springY1}px, rgba(59, 130, 246, 0.15), transparent 60%)`;
  // Trail: Deep Violet/Purple glow
  const darkOrb2 = useMotionTemplate`radial-gradient(800px circle at ${springX2}px ${springY2}px, rgba(124, 58, 237, 0.15), transparent 50%)`;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-stone-50 dark:bg-[#0a0a0a] transition-colors duration-1000">

      {/* 
        LIGHT MODE LAYER
        Uses mix-blend-multiply to gently DARKEN the bright background.
        This guarantees the effect is fully visible in light mode without muddying the text.
      */}
      <motion.div
        className="absolute inset-0 dark:opacity-0 transition-opacity duration-1000 mix-blend-multiply"
        style={{ background: lightOrb2 }}
      />
      <motion.div
        className="absolute inset-0 dark:opacity-0 transition-opacity duration-1000 mix-blend-multiply"
        style={{ background: lightOrb1 }}
      />

      {/* 
        DARK MODE LAYER
        Uses mix-blend-screen to beautifully ILLUMINATE the dark background.
      */}
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000 mix-blend-screen"
        style={{ background: darkOrb2 }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000 mix-blend-screen"
        style={{ background: darkOrb1 }}
      />

      {/* NOISE OVERLAY - crucial for maintaining the matte texture */}
      <div className="noise-bg opacity-[0.06] dark:opacity-[0.04]" />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// Typing text hook  (loops through lines, one-shot on mount)
// ─────────────────────────────────────────────────────────────
const DESCRIPTION =
  "Copy-paste React + Tailwind + shadcn components for your projects. Beautifully designed, accessible, and ready for production.";

function useTypingText(text: string, startDelay = 900, speed = 22) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(start);
  }, [text, startDelay, speed]);

  return { displayed, done };
}

// ─────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut, delay },
  }),
};

// ─────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { displayed, done } = useTypingText(DESCRIPTION, 950, 20);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-130 flex items-center overflow-hidden
                 bg-[#0d1117] px-6 md:px-14 lg:px-20 py-20 md:py-0"
    >
      {/* ── subtle grid background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── blue radial glow (left) ── */}
      <div
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0">
        {/* ════════════════ LEFT COLUMN ════════════════ */}
        <div className="flex-1 flex flex-col items-start gap-5">
          {/* Badge
           */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#1d4ed8]/60 bg-[#1d4ed8]/10"
          >
            <Image
              src="/heroImg/dot.png"
              alt="live indicator"
              width={8}
              height={8}
              className="rounded-full"
            />
            <span className="text-[11px] font-semibold tracking-widest text-[#60a5fa] uppercase">
              V2.0 is now live
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0.15}
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Build UI <span className="text-[#2563eb]">Faster</span>
          </motion.h1>

          {/* Typing description */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0.35}
            className="text-[#94a3b8] text-[15px] leading-[1.75] max-w-105 min-h-18"
          >
            {displayed}
            {!done && (
              <span className="inline-block w-.5 h-[1em] bg-[#60a5fa] ml-0.5 align-middle animate-pulse" />
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0.5}
            className="flex items-center flex-wrap gap-3 mt-1"
          >
            {/* Primary CTA
             */}
            <Link
              href="/components"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95
                         text-white text-[14px] font-semibold transition-all duration-150 shadow-lg shadow-blue-900/40"
            >
              Browse Components
            </Link>

            {/* Secondary CTA
             */}
            <Link
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#30363d]
                         bg-[#161b22] hover:bg-[#21262d] active:scale-95
                         text-[#e6edf3] text-[14px] font-semibold transition-all duration-150"
            >
              <Image
                src="/heroImg/bracket.png"
                alt=""
                width={16}
                height={16}
                className="opacity-70"
              />
              View on GitHub
            </Link>
          </motion.div>
        </div>

        {/* ════════════════ RIGHT COLUMN — Browser mockup card ════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div
            className="relative w-full max-w-285 rounded-xl 
                         overflow-hidden"
          >
            <Image
              src="/heroImg/uiCard.png"
              alt="UI component preview"
              width={780}
              height={360}
              className="rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

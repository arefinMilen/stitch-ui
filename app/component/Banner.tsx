"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-[#0d1117] px-4 sm:px-8 md:px-14 lg:px-20 py-16 md:py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative max-w-5xl mx-auto overflow-hidden
          rounded-2xl md:rounded-3xl
          bg-[#2563eb]
          px-6 py-14 sm:py-16 md:py-20
          flex flex-col items-center text-center gap-5
        "
      >
        {/* ── background shimmer shapes ── */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-12 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative z-10 text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-extrabold text-white tracking-tight leading-tight max-w-xl"
        >
          Ready to level up your UI?
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative z-10 text-[14.5px] sm:text-[15px] text-blue-100/80 leading-relaxed max-w-sm"
        >
          Join thousands of developers building beautiful applications with Stitch UI.
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          className="relative z-10 mt-1"
        >
          <CTAButton />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Animated CTA button — pulse ring on idle, lift on hover
// ─────────────────────────────────────────────────────────────
function CTAButton() {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Pulse ring — fires once on mount after a short delay */}
      <motion.span
        className="absolute inset-0 rounded-xl bg-white/30"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: 0, scale: 1.55 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
          delay: 0.9,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
      />

      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <Link
          href="/components"
          className="
            relative inline-flex items-center justify-center
            px-7 py-3 rounded-xl
            bg-white text-[#2563eb]
            text-[14.5px] font-bold tracking-tight
            shadow-lg shadow-black/20
            hover:shadow-xl hover:shadow-black/30
            transition-shadow duration-200
          "
        >
          Get Started Now
        </Link>
      </motion.div>
    </div>
  );
}
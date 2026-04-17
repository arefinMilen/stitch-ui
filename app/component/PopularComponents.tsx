"use client";

import { useRef } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// Component data
// REPLACE each preview path with your real preview image
// Recommended size: 240×140px  (the card preview area)
// ─────────────────────────────────────────────────────────────
const COMPONENTS = [
  {
    preview: "/popularCom/button.png", // REPLACE → 240×140px
    title: "Button",
    description: "Versatile click actions for your UI",
    href: "/components/button",
  },
  {
    preview: "/popularCom/card.png", // REPLACE → 240×140px
    title: "Card",
    description: "Elegant content grouping containers",
    href: "/components/card",
  },
  {
    preview: "/popularCom/input.png", // REPLACE → 240×140px
    title: "Input",
    description: "Beautiful text entry fields",
    href: "/components/input",
  },
  {
    preview: "/popularCom/model.png", // REPLACE → 240×140px
    title: "Modal",
    description: "Polished overlay dialogs",
    href: "/components/modal",
  },
  {
    preview: "/popularCom/switch.png", // REPLACE → 240×140px
    title: "Switch",
    description: "Binary state toggles",
    href: "/components/switch",
  },
  {
    preview: "/popularCom/slider.png", // REPLACE → 240×140px
    title: "Slider",
    description: "Numeric range selection",
    href: "/components/slider",
  },
  {
    preview: "/popularCom/tabs.png", // REPLACE → 240×140px
    title: "Tabs",
    description: "Tabbed content organization",
    href: "/components/tabs",
  },
  {
    preview: "/popularCom/accordion.png", // REPLACE → 240×140px
    title: "Accordion",
    description: "Expandable content sections",
    href: "/components/accordion",
  },
];

// ─────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// ─────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────
export default function PopularComponents() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-[#0d1117] px-4 sm:px-8 md:px-14 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* ── Header row ── */}
        <motion.div
          ref={headerRef}
          variants={headingVariant}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3"
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[1.75rem] md:text-[2rem] font-extrabold text-white tracking-tight">
              Popular Components
            </h2>
            <p className="text-[14px] text-[#8b949e]">
              Start with our most frequently used UI elements.
            </p>
          </div>

          <Link
            href="/components"
            className="text-[14px] font-semibold text-[#2563eb] hover:text-[#60a5fa]
                       transition-colors duration-150 whitespace-nowrap self-start sm:self-auto"
          >
            View all components →
          </Link>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4 md:gap-5
          "
        >
          {COMPONENTS.map((comp) => (
            <ComponentCard key={comp.title} {...comp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Single card
// ─────────────────────────────────────────────────────────────
function ComponentCard({
  preview,
  title,
  description,
  href,
}: {
  preview: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <motion.div variants={cardVariant}>
      <Link
        href={href}
        className="
          group flex flex-col rounded-2xl overflow-hidden
          border border-[#1e2d3d] bg-[#161b22]
          hover:border-[#2563eb]/50
          transition-colors duration-300
          cursor-pointer
        "
      >
        {/* Preview image area
            Drop your 240×140px screenshot at the path defined in COMPONENTS above.
            The image is centered and smaller than the container.
        */}
        <div className="relative w-full aspect-240/140 bg-[#0f172a] overflow-hidden flex items-center justify-center p-4">
          <Image
            src={preview}
            alt={`${title} preview`}
            width={180}
            height={105}
            className="
              object-contain
              transition-transform duration-500 ease-out
              group-hover:scale-[1.04]
            "
          />
          {/* inner top-border glow on hover */}
          <div
            className="
              pointer-events-none absolute inset-0 opacity-0
              group-hover:opacity-100 transition-opacity duration-400
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(37,99,235,0.12) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-1 px-5 py-4">
          <span className="text-[14px] font-bold text-white leading-snug">
            {title}
          </span>
          <span className="text-[12.5px] text-[#8b949e] leading-relaxed">
            {description}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

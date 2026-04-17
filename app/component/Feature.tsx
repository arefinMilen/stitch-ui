"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Card data
// REPLACE each icon path with your real icon file
// ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "/featureImg/open.png", // REPLACE → 24×24px
    title: "Open Source",
    description:
      "Free to use under MIT license for personal and commercial projects.",
  },
  {
    icon: "/featureImg/shadcn.png", // REPLACE → 24×24px
    title: "shadcn Compatible",
    description: "Works seamlessly with shadcn/ui architectural patterns.",
  },
  {
    icon: "/featureImg/maintain.png", // REPLACE → 24×24px
    title: "Maintained",
    description:
      "Regular updates with new components and bug fixes from the community.",
  },
  {
    icon: "/featureImg/copy.png", // REPLACE → 24×24px
    title: "Copy-Paste Ready",
    description:
      "Don't install any extra npm packages. Just copy the code and go.",
  },
];

// ─────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-[#0d1117] px-4 sm:px-8 md:px-14 lg:px-20 py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-4 md:gap-5
        "
      >
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Single card
// ─────────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" as const },
      }}
      className="
        group relative flex flex-col gap-4 p-6 rounded-2xl
        bg-[#161b22] border border-[#1e2d3d]
        hover:border-[#2563eb]/40
        transition-colors duration-300
        cursor-default
      "
    >
      {/* subtle hover glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0
          group-hover:opacity-100 transition-opacity duration-500
        "
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Icon container
          Each icon image lives at the path defined in FEATURES above.
          The wrapping div gives it the rounded square bg visible in the design.
      */}
      <div className="w-10 h-10 rounded-xl bg-[#1e3a5f]/60 flex items-center justify-center shrink-0">
        <Image
          src={icon}
          alt={title}
          width={20}
          height={20}
          className="opacity-80 group-hover:opacity-100 transition-opacity duration-200"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[15px] font-bold text-white leading-snug">
          {title}
        </h3>
        <p className="text-[13.5px] text-[#8b949e] leading-[1.65]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

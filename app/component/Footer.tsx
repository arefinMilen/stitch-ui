"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Link data
// ─────────────────────────────────────────────────────────────
const COMPONENTS_LINKS = [
  { label: "Buttons", href: "/components/button" },
  { label: "Inputs", href: "/components/input" },
  { label: "Cards", href: "/components/card" },
  { label: "Navigation", href: "/components/navigation" },
];

const RESOURCES_LINKS = [
  { label: "Documentation", href: "/docs" },
  { label: "Themes", href: "/themes" },
  { label: "Figma Kit", href: "/figma" },
  { label: "Showcase", href: "/showcase" },
];

const LEGAL_LINKS = [
  { label: "License", href: "/legal/license" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Brand Assets", href: "/legal/brand" },
];

const BOTTOM_LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Discord", href: "https://discord.com" },
];

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] border-t border-[#1e2d3d]">
      {/* ── Main grid ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-14 md:py-16">
        <div
          className="
            grid gap-12
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-12
          "
        >
          {/* ── Col 1 : Brand ── */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            {/* Logo + name*/}
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-[#58a6ff] to-[#a371f7] flex items-center justify-center shrink-0">
                <Image
                  src="/footer/icon.svg"
                  alt="Stitch UI logo"
                  width={26}
                  height={26}
                />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight">
                Stitch UI
              </span>
            </Link>

            {/* Description */}
            <p className="text-[13.5px] text-[#8b949e] leading-[1.75] max-w-75">
              An open-source library of beautifully designed, accessible, and
              responsive React components built with Tailwind CSS.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  src: "/footer/globe.png",
                  alt: "Website",
                  href: "https://stitchui.dev",
                },
                {
                  src: "/footer/email.png",
                  alt: "Email",
                  href: "mailto:hello@stitchui.dev",
                },
              ].map(({ src, alt, href }) => (
                <motion.a
                  key={alt}
                  href={href}
                  whileHover={{ scale: 1.12, y: -1 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.15 }}
                  className="
                    w-8 h-8 rounded-lg border border-[#1e2d3d]
                    flex items-center justify-center
                    hover:border-[#2563eb]/50 hover:bg-[#161b22]
                    transition-colors duration-200
                  "
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={16}
                    height={16}
                    className="opacity-100 hover:opacity-80 transition-opacity duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Col 3 : Components ── */}
          <div className="lg:col-span-3">
      <FooterCol title="Components" links={COMPONENTS_LINKS} />
    </div>

          {/* ── Col 4 : Resources ── */}
          <div className="lg:col-span-3">
      <FooterCol title="Resources" links={RESOURCES_LINKS} />
    </div>

          {/* ── Col 5 : Legal ── */}
          <div className="lg:col-span-2">
      <FooterCol title="Legal" links={LEGAL_LINKS} />
    </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-[#4b5563] order-2 sm:order-1">
            © {new Date().getFullYear()} Stitch UI. Built by the community.
          </p>

          <div className="flex items-center gap-5 order-1 sm:order-2">
            {BOTTOM_LINKS.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className="text-[12.5px] text-[#8b949e] hover:text-white transition-colors duration-150"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// Reusable link column
// ─────────────────────────────────────────────────────────────
function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[13px] font-semibold text-white tracking-wide">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
              <Link
                href={href}
                className="text-[13px] text-[#8b949e] hover:text-white transition-colors duration-150"
              >
                {label}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

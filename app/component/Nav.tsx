"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = ["Components", "Hooks", "Themes", "Docs"];
const SEARCH_PHRASES = [
  "Search components...",
  'Try "Button"...',
  'Try "useTheme"...',
  'Try "Modal"...',
];

// ── Typing placeholder hook ──────────────────────────────────────────────────
function useTypingPlaceholder(phrases: string[], active: boolean) {
  const [placeholder, setPlaceholder] = useState("");
  const state = useRef({ pi: 0, ci: 0, deleting: false, paused: false });

  useEffect(() => {
    if (!active) return;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      const phrase = phrases[s.pi];

      if (s.paused) {
        s.paused = false;
        s.deleting = true;
        timeout = setTimeout(tick, 1200);
        return;
      }

      if (!s.deleting) {
        s.ci++;
        setPlaceholder(phrase.slice(0, s.ci));
        if (s.ci === phrase.length) {
          s.paused = true;
          timeout = setTimeout(tick, 80);
          return;
        }
        timeout = setTimeout(tick, 70);
      } else {
        s.ci--;
        setPlaceholder(phrase.slice(0, s.ci));
        if (s.ci === 0) {
          s.deleting = false;
          s.pi = (s.pi + 1) % phrases.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 40);
      }
    };

    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, [active, phrases]);

  return placeholder;
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const placeholder = useTypingPlaceholder(SEARCH_PHRASES, !searchFocused);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const theme = {
    nav: dark ? "bg-[#1E293B] border-[#30363d]" : "bg-white border-[#d0d7de]",
    link: dark
      ? "text-[#CBD5E1] hover:text-[#e6edf3] hover:bg-[#21262d]"
      : "text-[#57606a] hover:text-[#24292f] hover:bg-[#f3f4f6]",
    text: dark ? "text-[#e6edf3]" : "text-[#24292f]",
    search: dark
      ? "bg-[#30344d] border-[#30363d] text-[#e6edf3] focus:border-[#58a6ff]"
      : "bg-[#f6f8fa] border-[#d0d7de] text-[#24292f] focus:border-[#0969da]",
    iconBtn: dark
      ? "border-[#30363f] hover:bg-[#21262d] hover:border-[#8b949e]"
      : "border-[#d0d7de] hover:bg-[#f3f4f6]",
    kbd: dark
      ? "bg-[#1c2128] border-[#30363d] text-[#8b949e]"
      : "bg-[#f6f8fa] border-[#d0d7de] text-[#57606a]",
    mobile: dark ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]",
    hamburgerBar: dark ? "bg-[#8b949e]" : "bg-[#57606a]",
    iconFilter: dark ? " opacity-90 hover:opacity-100" : "opacity-60 hover:opacity-100",
  };

  return (
    <motion.nav
      className={`w-full border-b transition-colors duration-300 ${theme.nav}`}
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between px-4 md:px-6 h-14 max-w-8xl mx-auto">

        {/* ── Brand ──
           
        */}
        <motion.a
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Image
            src="navImg/logo.svg"
            alt="Stitch UI logo"
            width={34}
            height={34}
            className="rounded-lg"
          />
          <span className={`text-[15px] font-semibold tracking-tight ${theme.text}`}>
            Stitch UI
          </span>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center gap-0.5 ml-5">
          {NAV_LINKS.map((label, i) => (
            <motion.a
              key={label}
              href={`/${label.toLowerCase()}`}
              className={`text-sm font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors ${theme.link}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.25 }}
              whileTap={{ scale: 0.96 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-2 ml-auto">

          {/* Search bar (desktop)
              
          */}
          <div className="relative hidden md:flex items-center">
            <Image
              src="navImg/find.svg"
              alt="search"
              width={15}
              height={15}
              className={`absolute left-2.5 top-1/3 pointer-events-none ${theme.iconFilter}`}
            />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholder}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={`pl-8 pr-10 py-1.5 text-[13px] rounded-lg border outline-none transition-all duration-200 w-50 focus:w-60 ${theme.search} placeholder:text-[#c4daf5]`}
            />
          </div>

          {/* Bell icon
          */}
          <motion.button
            className={`w-8.5 h-8.5 flex items-center justify-center rounded-lg border transition-colors ${theme.iconBtn}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
            title="Notifications"
          >
            <Image
              src="navImg/sound.svg"
              alt="notifications"
              width={18}
              height={18}
              className={theme.iconFilter}
            />
          </motion.button>

          {/* Theme toggle
          */}
          <motion.button
            className={`w-8.5 h-8.5 flex items-center justify-center rounded-lg border transition-colors overflow-hidden ${theme.iconBtn}`}
            onClick={() => setDark(!dark)}
            whileTap={{ scale: 0.9, rotate: 15 }}
            title="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? "dark" : "light"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={dark ? "/navImg/theme.svg" : "/navImg/theme.svg"}
                  alt={dark ? "dark mode" : "light mode"}
                  width={18}
                  height={18}
                  className={theme.iconFilter}
                />
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Hamburger (mobile only)*/}
          <button
            className="flex md:hidden flex-col gap-1.25 p-2 rounded-md cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`block w-4.5 h-[1.5px] rounded-sm origin-center ${theme.hamburgerBar}`}
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className={`block w-4.5 h-[1.5px] rounded-sm ${theme.hamburgerBar}`}
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block w-4.5 h-[1.5px] rounded-sm origin-center ${theme.hamburgerBar}`}
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`flex md:hidden flex-col px-4 pb-4 border-t ${theme.mobile}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            {/* Mobile search — reuses /icons/search.png */}
            <div className="relative mt-3 mb-1">
              <Image
                src="navImg/find.svg"
                alt="search"
                width={15}
                height={15}
                className={`absolute left-2.5 top-2/3 -translate-y-1/2 pointer-events-none ${theme.iconFilter}`}
              />
              <input
                type="text"
                placeholder="Search components..."
                className={`w-full pl-8 pr-3 py-2 text-[13px] rounded-lg border outline-none ${theme.search} placeholder:text-[#8b949e]`}
              />
            </div>

            {/* Mobile nav links */}
            {NAV_LINKS.map((label, i) => (
              <motion.a
                key={label}
                href={`/${label.toLowerCase()}`}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${theme.link}`}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.04 * i + 0.05 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
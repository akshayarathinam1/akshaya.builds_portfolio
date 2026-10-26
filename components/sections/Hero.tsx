"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const cornerChips = [
  {
    id: "tl",
    label: "ideas → reality",
    pos: { top: "10%", left: "5%" },
    rotate: -3,
    dark: false,
    delay: 0.6,
  },
  {
    id: "tr",
    label: "built to be useful",
    pos: { top: "10%", right: "5%" },
    rotate: 3,
    dark: true,
    delay: 0.72,
  },
  {
    id: "bl",
    label: "Web · SaaS · Software",
    pos: { bottom: "22%", left: "5%" },
    rotate: -2,
    dark: true,
    delay: 0.84,
  },
  {
    id: "br",
    label: "From idea to launch ↗",
    pos: { bottom: "22%", right: "5%" },
    rotate: 2,
    dark: false,
    delay: 0.96,
  },
] as const;

const nameLetters = "AKSHAYA".split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Corner chips */}
      {cornerChips.map((chip) => (
        <motion.div
          key={chip.id}
          className={`absolute hidden md:flex items-center gap-1.5 px-4 py-2 border text-xs font-semibold tracking-wide select-none ${
            chip.dark
              ? "bg-[#252625] text-[#F2F2F2] border-[#252625]"
              : "bg-[#F2F2F2] text-[#252625] border-[#252625]/20"
          }`}
          style={{ ...chip.pos, rotate: chip.rotate }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: chip.delay, duration: 0.5, ease: "easeOut" }}
        >
          {/* Small dot accent */}
          <span
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              chip.dark ? "bg-[#F2F2F2]/40" : "bg-[#252625]/30"
            }`}
          />
          {chip.label}
        </motion.div>
      ))}

      {/* Small decorative circles */}
      <motion.div
        className="absolute top-[38%] left-[4%] w-10 h-10 rounded-full border-2 border-[#252625] bg-[#DCDCDC] hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
      />
      <motion.div
        className="absolute top-[38%] right-[4%] w-10 h-10 rounded-full border-2 border-[#252625] bg-[#252625] hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Handwritten greeting label */}
        <motion.p
          className="font-hand text-xl md:text-2xl text-[#252625]/70 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          hi, I&apos;m
        </motion.p>

        {/* Giant name */}
        <div className="name-box mb-6 overflow-hidden">
          <div className="flex">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-[#252625] tracking-tighter leading-none"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35 + i * 0.055,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <motion.h1
          className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-[#252625] leading-tight mb-4 max-w-2xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.55, ease: "easeOut" }}
        >
          You bring the idea.{" "}
          <span className="block mt-1 sm:inline sm:mt-0">
            I turn it into something people can use.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="font-body text-base sm:text-lg md:text-xl text-[#252625]/75 max-w-xl mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5, ease: "easeOut" }}
        >
          Websites and SaaS products, brought to life from your first idea to launch.
        </motion.p>

        {/* Location / status strip */}
        <motion.p
          className="font-hand text-base text-[#252625]/60 mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          ✦ open to work · freelance opportunities
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.45 }}
          className="inline-flex items-center gap-2 bg-[#252625] text-[#F2F2F2] px-7 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-[#3A3B3A] transition-colors duration-200"
        >
          Let&apos;s Connect
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[#252625]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

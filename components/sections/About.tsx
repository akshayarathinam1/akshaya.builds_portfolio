"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import PolaroidFrame from "@/components/ui/PolaroidFrame";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

const workChips = [
  "Websites",
  "SaaS & MVPs",
  "Custom Software",
  "Full-Stack Development",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#F2F2F2] overflow-hidden">
      {/* Handwritten section label */}
      <motion.p
        className="font-hand text-lg text-[#252625]/50 mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        a bit about me
      </motion.p>

      <div className="max-w-5xl mx-auto">
        {/* Intro block */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-10 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left polaroid */}
          <motion.div
            className="flex-shrink-0 self-center md:self-start mt-2"
            variants={fadeUp}
            custom={0}
          >
            <PolaroidFrame caption="me, probably" rotate={-4}>
              <div className="relative w-36 h-44 md:w-44 md:h-56 overflow-hidden bg-[#DCDCDC]">
                <Image
                  src="/profile.jpg"
                  alt="Akshaya"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 144px, 176px"
                  priority
                />
              </div>
            </PolaroidFrame>
          </motion.div>

          {/* Right content */}
          <div className="flex-1 min-w-0">
            {/* Tag badge */}
            <motion.div
              className="inline-block border border-[#252625] px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#252625]"
              variants={fadeUp}
              custom={1}
            >
              A BIT ABOUT ME
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#252625] leading-tight mb-4 tracking-tight"
              variants={fadeUp}
              custom={2}
            >
              I care about what we&apos;re building — and why.
            </motion.h2>

            {/* Body */}
            <motion.p
              className="font-body text-base md:text-lg text-[#252625]/75 leading-relaxed max-w-xl mb-6"
              variants={fadeUp}
              custom={3}
            >
              I enjoy turning ideas into useful things, but the part I find most
              interesting happens before the building begins: understanding the
              problem and figuring out what would actually help.
            </motion.p>

            {/* What I work on */}
            <motion.div variants={fadeUp} custom={4}>
              <p className="font-hand text-sm text-[#252625]/50 mb-3">
                What I work on
              </p>
              <div className="flex flex-wrap gap-2">
                {workChips.map((item, i) => (
                  <motion.span
                    key={item}
                    className={`px-4 py-1.5 text-xs font-semibold tracking-wide border ${
                      i % 2 === 0
                        ? "bg-[#252625] text-[#F2F2F2] border-[#252625]"
                        : "bg-transparent text-[#252625] border-[#252625]/40"
                    }`}
                    whileHover={{ scale: 1.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

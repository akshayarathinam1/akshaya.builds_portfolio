"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Mail } from "lucide-react";
import { socials } from "@/lib/data";

// Inline brand SVGs (removed from lucide-react v1.x)
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = navLinks.find(
              (l) => l.href === `#${entry.target.id}`
            );
            if (found) setActive(found.label);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 lg:px-20 xl:px-24 py-4 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(242,242,242,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #DCDCDC" : "1px solid transparent",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display text-base font-bold tracking-tight text-[#252625]"
        onClick={() => setActive("Home")}
      >
        akshaya<span className="opacity-40">.builds</span>
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActive(link.label)}
            className="relative px-4 py-1.5 text-sm font-medium text-[#252625] transition-colors duration-200"
          >
            {active === link.label && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-[#252625]"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                active === link.label ? "text-[#F2F2F2]" : "text-[#252625]"
              }`}
            >
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Right: socials + CTA */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-full hover:bg-[#252625]/10 transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-full hover:bg-[#252625]/10 transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="p-1.5 rounded-full hover:bg-[#252625]/10 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="border border-[#252625] rounded-full px-4 py-1.5 text-sm font-medium text-[#252625] hover:bg-[#252625] hover:text-[#F2F2F2] transition-colors duration-200"
        >
          Let&apos;s Connect
        </motion.a>
      </div>
    </motion.header>
  );
}

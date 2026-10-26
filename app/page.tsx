"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

function Footer() {
  return (
    <footer className="bg-[#252625] border-t border-[#F2F2F2]/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm font-semibold text-[#F2F2F2]/60">
          akshaya<span className="opacity-40">.builds</span>
        </p>
        <p className="font-body text-xs text-[#F2F2F2]/30">
          © 2026 Akshaya. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-xs font-semibold text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors tracking-widest uppercase"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#F2F2F2]" suppressHydrationWarning />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

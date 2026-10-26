"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/lib/data";

// Inline SVGs for brand icons (lucide-react v1.x removed them)
const GithubIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const aboutParts = project?.longDescription ? project.longDescription.split("\n\n") : [];
  const aboutHeadline = aboutParts.length > 1 ? aboutParts[0] : null;
  const aboutBody = aboutParts.length > 1 ? aboutParts.slice(1) : aboutParts;

  const thinkingParts = project?.thinking ? project.thinking.split("\n\n") : [];
  const thinkingHeadline = thinkingParts.length > 1 ? thinkingParts[0] : null;
  const thinkingBody = thinkingParts.length > 1 ? thinkingParts.slice(1) : thinkingParts;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-[#252625]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto bg-[#F2F2F2] focus:outline-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-[#252625]/20" />
            </div>

            <div className="px-6 md:px-12 py-8 max-w-4xl mx-auto">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-8 pb-6 border-b border-[#252625]/10">
                <div>
                  <p className="font-hand text-sm text-[#252625]/40 mb-1">
                    {project.number}
                  </p>
                  <h2 className="font-display text-3xl md:text-5xl font-black text-[#252625] tracking-tight mb-3">
                    {project.title}
                  </h2>
                  {/* Type · Client */}
                  {(project.type || project.client) && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.type && (
                        <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-[#252625]/20 text-[#252625]/60">
                          {project.type}
                        </span>
                      )}
                      {project.type && project.client && (
                        <span className="text-[#252625]/25 text-xs">·</span>
                      )}
                      {project.client && (
                        <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-[#252625] text-[#F2F2F2]">
                          {project.client}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close project details"
                  className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center border border-[#252625]/20 text-[#252625]/50 hover:text-[#252625] hover:border-[#252625] transition-colors duration-200"
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main Content: Top Section Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Left Column: Headline + Description */}
                <div className="md:col-span-7 lg:col-span-8">
                  {aboutHeadline && (
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight leading-snug mb-3">
                      {aboutHeadline}
                    </h3>
                  )}
                  {aboutBody.map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-[15px] md:text-base text-[#252625]/75 leading-relaxed font-normal mb-3"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Right Column: Chips + Role + Status + Action Button */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col">
                  {/* Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#252625]/[0.06] text-[#252625] text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                  {/* Status */}
                  {project.status && (
                    <div className="mb-4">
                      <p className="italic text-xs md:text-sm text-[#252625]/50 font-serif mb-0.5">
                        status
                      </p>
                      <p className="text-sm md:text-base text-[#1a1a1a] font-normal">
                        {project.status}
                      </p>
                    </div>
                  )}

                  {/* Industry */}
                  {project.industry && (
                    <div className="mb-6">
                      <p className="italic text-xs md:text-sm text-[#252625]/50 font-serif mb-0.5">
                        industry
                      </p>
                      <p className="text-sm md:text-base text-[#1a1a1a] font-normal">
                        {project.industry}
                      </p>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-col gap-2.5 items-start">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:shadow transition-all duration-200"
                      >
                        <span className="w-4 h-4 rounded-[3px] bg-[#0070F3] flex items-center justify-center text-white flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </span>
                        <span>LIVE SITE</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 ${
                          !project.liveUrl || project.liveUrl === "#"
                            ? "bg-[#111111] hover:bg-black text-white shadow-sm hover:shadow"
                            : "border border-[#252625]/20 hover:border-[#252625] text-[#252625]"
                        }`}
                      >
                        <GithubIcon />
                        <span>SOURCE CODE ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-[#252625]/10 my-8 md:my-10" />

              {/* The thinking behind it */}
              {project.thinking && (
                <div>
                  <p className="italic text-xs md:text-sm text-[#252625]/50 mb-2 font-serif">
                    the thinking behind it
                  </p>
                  {thinkingHeadline && (
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight leading-snug mb-3">
                      {thinkingHeadline}
                    </h3>
                  )}
                  {thinkingBody.map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-[15px] md:text-base text-[#252625]/75 leading-relaxed font-normal mb-3"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Bottom Center Down Arrow Button */}
              <div className="flex justify-center mt-10 pb-4">
                <button
                  onClick={onClose}
                  aria-label="Close project modal"
                  className="w-8 h-8 rounded-full bg-[#111111] hover:bg-black text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

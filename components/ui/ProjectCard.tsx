"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  onViewProject: (project: Project) => void;
}

export default function ProjectCard({
  project,
  isActive,
  onClick,
  onViewProject,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={`relative h-full flex flex-col cursor-pointer overflow-hidden rounded-none border transition-all duration-300 ${
        isActive
          ? "bg-[#252625] border-[#252625]"
          : "bg-white border-[#DCDCDC] hover:border-[#252625]"
      }`}
    >
      {/* top strip */}
      <div
        className={`h-1 w-full shrink-0 ${isActive ? "bg-[#F2F2F2]/20" : "bg-[#252625]"}`}
      />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* number label */}
        <p
          className={`text-xs font-semibold tracking-widest mb-3 ${
            isActive ? "text-[#F2F2F2]/50" : "text-[#252625]/40"
          }`}
        >
          ✦ {project.number}
        </p>

        {/* title */}
        <h3
          className={`font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight ${
            isActive ? "text-[#F2F2F2]" : "text-[#252625]"
          }`}
        >
          {project.title}
        </h3>

        {/* description */}
        <p
          className={`text-sm leading-relaxed mb-6 max-w-sm ${
            isActive ? "text-[#F2F2F2]/70" : "text-[#252625]/60"
          }`}
        >
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-full border ${
                isActive
                  ? "border-[#F2F2F2]/30 text-[#F2F2F2]/70"
                  : "border-[#252625]/20 text-[#252625]/60"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA — opens modal */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onViewProject(project);
          }}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-auto inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
            isActive
              ? "text-[#F2F2F2] hover:text-[#F2F2F2]/70"
              : "text-[#252625] hover:text-[#252625]/60"
          }`}
        >
          View Project
          <ArrowUpRight size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
}

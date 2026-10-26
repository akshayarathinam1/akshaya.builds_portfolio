"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, type Project } from "@/lib/data";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-[#252625]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-hand text-lg text-[#F2F2F2]/40 mb-2">
              case study
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F2F2F2] tracking-tight">
              Selected Work
            </h2>
          </motion.div>

          {/* Tab selectors */}
          <div className="flex flex-wrap gap-2 mb-8">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`text-xs font-semibold tracking-widest px-4 py-2 transition-all duration-200 ${
                  activeId === project.id
                    ? "bg-[#F2F2F2] text-[#252625]"
                    : "border border-[#F2F2F2]/20 text-[#F2F2F2]/50 hover:border-[#F2F2F2]/50 hover:text-[#F2F2F2]"
                }`}
              >
                ✦ {project.number}
              </motion.button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="h-full flex flex-col"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <ProjectCard
                  project={project}
                  isActive={activeId === project.id}
                  onClick={() => setActiveId(project.id)}
                  onViewProject={(p) => setModalProject(p)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project detail modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}

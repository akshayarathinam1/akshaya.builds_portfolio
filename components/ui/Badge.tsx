"use client";

import { motion } from "motion/react";

interface BadgeProps {
  label: string;
  variant?: "dark" | "outline";
  className?: string;
}

export default function Badge({
  label,
  variant = "dark",
  className = "",
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.06 }}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium font-body select-none cursor-default transition-colors duration-200
        ${
          variant === "dark"
            ? "bg-[#252625] text-[#F2F2F2] hover:bg-[#3A3B3A]"
            : "border border-[#252625] text-[#252625] bg-transparent hover:bg-[#252625] hover:text-[#F2F2F2]"
        }
        ${className}`}
    >
      {label}
    </motion.span>
  );
}

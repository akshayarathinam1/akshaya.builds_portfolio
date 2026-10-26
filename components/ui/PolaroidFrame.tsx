"use client";

import { motion } from "motion/react";

interface PolaroidFrameProps {
  children: React.ReactNode;
  caption?: string;
  rotate?: number;
  className?: string;
}

export default function PolaroidFrame({
  children,
  caption = "",
  rotate = -3,
  className = "",
}: PolaroidFrameProps) {
  return (
    <motion.div
      className={`polaroid w-fit ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="overflow-hidden bg-[#DCDCDC]">{children}</div>
      {caption && (
        <p className="mt-2 text-center font-hand text-sm text-[#252625]/60 leading-tight">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

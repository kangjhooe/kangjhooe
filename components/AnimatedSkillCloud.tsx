"use client";

import { motion } from "framer-motion";

const skillNodes = [
  { label: "Next.js", top: "10%", left: "5%" },
  { label: "NestJS", top: "65%", left: "15%" },
  { label: "Tailwind CSS", top: "25%", left: "70%" },
  { label: "Git", top: "60%", left: "80%" },
  { label: "Linux Server", top: "40%", left: "45%" },
  { label: "Digital Madrasah", top: "75%", left: "55%" },
];

export function AnimatedSkillCloud() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {skillNodes.map((skill, index) => (
        <motion.span
          key={skill.label}
          className="absolute rounded-full border border-white/40 bg-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-dark shadow-lg shadow-black/10 backdrop-blur dark:border-primary/40 dark:bg-white/10 dark:text-white"
          style={{ top: skill.top, left: skill.left }}
          animate={{ y: ["0px", "-12px", "0px"] }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {skill.label}
        </motion.span>
      ))}
    </div>
  );
}


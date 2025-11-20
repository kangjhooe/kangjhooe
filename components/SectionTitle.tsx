"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
};

export function SectionTitle({
  title,
  subtitle = "Kang Jhooe",
  align = "center",
  eyebrow,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`space-y-2 ${
        align === "center" ? "text-center" : "text-left"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-primary/70">
        {eyebrow ?? subtitle}
      </p>
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}


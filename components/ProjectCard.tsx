"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  demoUrl: string;
  codeUrl?: string;
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const techHighlight =
    project.tech.length > 0
      ? project.tech.slice(0, 2).join(" • ")
      : "Eksplorasi Digital";
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="glass-panel group flex flex-col overflow-hidden shadow-[0_35px_90px_-60px_rgba(0,0,0,0.95)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="relative h-56 w-full">
        <div
          aria-hidden
          className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/25 via-transparent to-[#04100b] opacity-0 blur-2xl transition duration-700 group-hover:opacity-80"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/5 bg-[#020807]/80 shadow-inner shadow-black/60">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.15),transparent_55%),radial-gradient(circle_at_85%_0,rgba(14,165,233,0.2),transparent_45%)] opacity-60 transition duration-500 group-hover:opacity-90"
          />
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,8,5,0.95)] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.15),transparent_60%)] mix-blend-overlay opacity-0 transition duration-500 group-hover:opacity-60" />
          <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-[18px] border border-white/10 bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <span className="flex items-center gap-2 text-white">
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                #{indexLabel}
              </span>
              {techHighlight}
            </span>
            <span className="text-[10px] text-white/70">Pratinjau</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
          <p className="text-sm leading-relaxed text-foreground/85">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/25 bg-[rgba(5,12,9,0.75)] px-3 py-1 text-xs font-semibold text-foreground/90"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs sm:text-sm"
          >
            <FiExternalLink />
            Demo
          </Link>
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs sm:text-sm"
            >
              <FiGithub />
              Kode
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}


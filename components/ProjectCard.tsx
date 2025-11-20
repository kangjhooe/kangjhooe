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
  codeUrl: string;
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="glass-panel group flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="relative h-56 w-full overflow-hidden rounded-[24px]">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f5f3f]/60 via-transparent to-transparent" />
        <p className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-primary">
          {project.tech[0]}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
          <p className="text-sm leading-relaxed text-foreground/80 dark:text-foreground/70">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary dark:bg-white/10 dark:text-white"
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
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs sm:text-sm"
          >
            <FiGithub />
            Kode
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


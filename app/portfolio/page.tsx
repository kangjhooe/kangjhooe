import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Koleksi proyek digital Kang Jhooe untuk mendukung transformasi pembelajaran.",
};

const typedProjects = projects as Project[];

export default function PortfolioPage() {
  return (
    <section className="space-y-8">
      <SectionTitle title="Portfolio" subtitle="Karya" align="left" />
      <p className="text-base text-foreground/75">
        Tiap proyek dirancang untuk menjawab tantangan lapangan: akses belajar, storytelling
        lembaga, hingga monitoring siswa secara real-time. Semua mengusung prinsip scalable,
        secure, dan mudah dipelihara.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {typedProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}


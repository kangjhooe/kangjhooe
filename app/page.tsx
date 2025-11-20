import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Situs resmi Kang Jhooe, Fullstack Developer pendidikan yang fokus pada inovasi digital dan produk berkelanjutan.",
};

const focusAreas = [
  {
    title: "Platform Belajar",
    detail:
      "Perancangan LMS XClass untuk kelas virtual, asesmen otomatis, dan monitoring wali.",
  },
  {
    title: "Presentasi PKKM",
    detail:
      "Website statis premium dengan storytelling visual yang memperkuat narasi lembaga.",
  },
  {
    title: "Adopsi Digital",
    detail:
      "Pendampingan guru & santri agar nyaman memanfaatkan teknologi secara mandiri.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "XClass 3.0",
    detail: "Integrasi AI tutor dan analitik pembelajaran pada XClass untuk mendukung guru di banyak daerah.",
  },
  {
    year: "2023",
    title: "Portal PKKM Interaktif",
    detail: "Membangun situs presentasi interaktif untuk proses akreditasi dan showcase lembaga.",
  },
  {
    year: "2020",
    title: "Mentor Digitalisasi",
    detail: "Mendampingi guru memahami pengelolaan server, Git, dan praktik DevOps sederhana.",
  },
];

const typedProjects = projects as Project[];

export default function Home() {
  const featuredProjects = typedProjects.slice(0, 2);

  return (
    <>
      <Hero />

      <section className="space-y-6">
        <SectionTitle
          title="Misi Premium untuk Pendidikan Digital"
          subtitle="Fokus 2025"
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="glass-panel space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                {area.title}
              </p>
              <p className="text-sm text-foreground/80">{area.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle title="Proyek Pilihan" subtitle="Portofolio" align="left" />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary inline-flex">
          Lihat proyek lainnya
        </Link>
      </section>

      <section className="space-y-8">
        <SectionTitle
          title="Jejak Transformasi Pembelajaran"
          subtitle="Timeline"
          align="left"
        />
        <div className="space-y-4">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="glass-panel flex items-start gap-4 border-l-4 border-primary/60 p-5"
            >
              <div className="text-2xl font-semibold text-primary">{item.year}</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

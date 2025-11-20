import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Koleksi proyek digital Kang Jhooe untuk mendukung transformasi madrasah.",
};

const projects = [
  {
    title: "XClass – Sistem Pembelajaran Digital",
    description:
      "Platform LMS berbasis NestJS dan Next.js dengan modul kelas virtual, penilaian otomatis, dan dashboard monitoring untuk guru MA Al-Falah Krui.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Realtime"],
  },
  {
    title: "Website Presentasi Madrasah",
    description:
      "Website statis responsif yang mempresentasikan profil madrasah, kurikulum, dan capaian PKKM secara visual serta mudah diakses.",
    tags: ["Static Site", "Tailwind CSS", "SEO"],
  },
  {
    title: "Portal Monitoring Siswa",
    description:
      "Aplikasi internal untuk memantau kehadiran dan capaian harian siswa dengan integrasi notifikasi WhatsApp gateway.",
    tags: ["Node.js", "MongoDB", "WhatsApp API"],
  },
];

export default function PortfolioPage() {
  return (
    <section className="space-y-8">
      <SectionTitle title="Portfolio" subtitle="Karya" align="left" />
      <p className="text-base text-foreground/75">
        Tiap proyek dibangun dengan pendekatan kolaboratif bersama guru dan
        pimpinan madrasah, fokus pada kemudahan penggunaan serta skalabilitas
        untuk bertumbuh.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}


import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Situs resmi Kang Jhooe, Fullstack Developer madrasah yang fokus pada inovasi digital pendidikan.",
};

const featuredProjects = [
  {
    title: "XClass – Sistem Pembelajaran Digital",
    description:
      "Platform pembelajaran berbasis madrasah yang menghubungkan guru, siswa, dan wali secara real-time dengan konten terstruktur.",
    tags: ["Next.js", "NestJS", "Digital Learning"],
  },
  {
    title: "Website Presentasi Madrasah",
    description:
      "Website statis untuk kebutuhan presentasi PKKM dan akreditasi yang menonjolkan profil lembaga secara profesional.",
    tags: ["Static Site", "Tailwind CSS"],
  },
];

const highlights = [
  {
    title: "NestJS & Next.js",
    detail: "Membangun platform edukasi modern dan aman.",
  },
  {
    title: "MA Al-Falah Krui",
    detail: "Aktif mendampingi transformasi digital kampus.",
  },
  {
    title: "Nilai Utama",
    detail: "Inovasi, manfaat, keberlanjutan.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-foreground/80">{item.detail}</p>
          </div>
        ))}
      </section>
      <section className="space-y-8">
        <SectionTitle
          title="Proyek Pilihan"
          subtitle="Portfolio"
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary inline-flex">
          Lihat proyek lainnya →
        </Link>
      </section>
    </>
  );
}

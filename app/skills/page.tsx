import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillRadarChart } from "@/components/SkillRadarChart";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Keahlian teknis dan soft skills Kang Jhooe dalam membangun solusi pendidikan.",
};

const skillGroups = [
  {
    title: "Tech Stack",
    items: ["Next.js", "NestJS", "Tailwind CSS", "Git", "Linux Server"],
    description:
      "Perpaduan teknologi yang memastikan aplikasi pendidikan berjalan cepat, aman, dan mudah di-scale.",
  },
  {
    title: "Soft Skills",
    items: ["Leadership", "Manajemen Pendidikan", "Komunikasi"],
    description:
      "Kemampuan memimpin tim kecil, mengelola kebutuhan stakeholder lembaga, dan menjembatani bahasa teknis.",
  },
];

export default function SkillsPage() {
  return (
    <section className="space-y-10">
      <SectionTitle title="Keahlian" subtitle="Skills" align="left" />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-panel space-y-4 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                  {group.title}
                </p>
                <p className="mt-1 text-sm text-foreground/70">{group.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary dark:bg-white/10 dark:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <SkillRadarChart />
      </div>
    </section>
  );
}


import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Keahlian teknis dan soft skills Kang Jhooe dalam membangun solusi pendidikan.",
};

const hardSkills = ["Next.js", "NestJS", "Tailwind CSS", "Git", "Manajemen Server Linux"];
const softSkills = ["Leadership", "Manajemen Pendidikan", "Komunikasi"];

export default function SkillsPage() {
  return (
    <section className="space-y-10">
      <SectionTitle title="Keahlian" subtitle="Skills" align="left" />
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard title="Hard Skills" items={hardSkills} />
        <SkillCard title="Soft Skills" items={softSkills} />
      </div>
    </section>
  );
}

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-primary/10 bg-white/90 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-foreground/75">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-primary"
          >
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}


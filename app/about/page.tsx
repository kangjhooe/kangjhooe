import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Profil singkat Kang Jhooe sebagai pengembang fullstack yang fokus pada digitalisasi pendidikan madrasah.",
};

const values = [
  { title: "Inovasi", detail: "Merancang solusi praktis untuk kebutuhan lapangan." },
  { title: "Manfaat", detail: "Teknologi harus memudahkan guru dan siswa." },
  { title: "Keberlanjutan", detail: "Sistem yang dirawat dan terus dikembangkan." },
];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <SectionTitle title="Tentang Kang Jhooe" subtitle="Profil" align="left" />
      <p className="text-base leading-relaxed text-foreground/80">
        Kang Jhooe adalah Fullstack Developer dengan pengalaman membangun
        aplikasi berbasis NestJS dan Next.js untuk mendukung madrasah di
        Indonesia. Saat ini aktif di MA Al-Falah Krui, mengembangkan platform
        pembelajaran serta portal presentasi lembaga yang profesional.
      </p>
      <p className="text-base leading-relaxed text-foreground/80">
        Fokus utama Kang Jhooe adalah menghadirkan teknologi yang mudah dipakai
        oleh guru, relevan dengan kebutuhan siswa, dan bisa menjadi pijakan
        transformasi digital yang nyata bagi madrasah.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{value.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


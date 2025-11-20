import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Profil lengkap Kang Jhooe sebagai Fullstack Developer pendidikan yang menekankan inovasi, manfaat, dan keberlanjutan.",
};

const timelines = [
  {
    title: "Digital Strategist - Program Pendidikan Lokal",
    period: "2022 - Sekarang",
    detail:
      "Mendesain roadmap digitalisasi lembaga, mengawal implementasi LMS XClass dan workshop literasi teknologi untuk guru.",
  },
  {
    title: "Founder XClass",
    period: "2020 - Sekarang",
    detail:
      "Membangun platform pembelajaran berbasis NestJS + Next.js yang memfasilitasi kelas virtual, asesmen adaptif, dan analitik progres siswa.",
  },
  {
    title: "Koordinator PKKM Digital",
    period: "2018 - 2021",
    detail:
      "Menangani dokumentasi serta website presentasi PKKM, memastikan narasi visual dan data lembaga tampil profesional.",
  },
];

const valuePillars = [
  {
    title: "Inovasi",
    detail: "Meracik solusi yang sesuai dengan budaya lembaga tanpa kehilangan esensi tradisi.",
  },
  {
    title: "Manfaat",
    detail: "Teknologi harus membantu guru mengajar dan memudahkan siswa belajar kapan saja.",
  },
  {
    title: "Keberlanjutan",
    detail: "Sistem dirawat bersama, dokumentasi rapi, dan siap dikembangkan oleh tim internal.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionTitle title="Tentang Kang Jhooe" subtitle="Profil" align="left" />
          <p className="text-base leading-relaxed text-foreground/80">
            Kang Jhooe adalah Fullstack Developer yang berfokus menghadirkan pengalaman
            belajar digital untuk lembaga pendidikan di Indonesia. Menggabungkan keahlian teknis
            Next.js, NestJS, dan manajemen server Linux untuk memastikan sistem stabil dan aman.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Berawal dari kebutuhan internal sebuah sekolah swasta, ia membangun XClass agar guru
            dapat mengelola kelas virtual, menjaga interaksi dengan orang tua, serta
            memonitor perkembangan siswa secara komprehensif.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Selain mengembangkan produk, Kang Jhooe rutin memfasilitasi sesi mentoring
            digitalisasi untuk pimpinan dan tim lembaga. Misinya sederhana: memastikan
            teknologi benar-benar menjadi wasilah kebermanfaatan.
          </p>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-[36px] p-0">
          <Image
            src="/assets/about-placeholder.svg"
            alt="Profil Kang Jhooe"
            width={520}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle title="Nilai yang Menjadi Pegangan" subtitle="Value" align="left" />
        <div className="grid gap-6 md:grid-cols-3">
          {valuePillars.map((value) => (
            <div key={value.title} className="glass-panel space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                {value.title}
              </p>
              <p className="text-sm text-foreground/75">{value.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle title="Perjalanan Profesional" subtitle="Timeline" align="left" />
        <div className="space-y-4">
          {timelines.map((item) => (
            <div key={item.title} className="glass-panel border-l-4 border-primary/60 p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


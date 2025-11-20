"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSkillCloud } from "./AnimatedSkillCloud";

const heroStats = [
  { label: "Tahun Fokus EdTech", value: "7+", detail: "Digitalisasi & LMS" },
  { label: "Guru & Siswa Terbantu", value: "2.5K", detail: "Sekolah & Komunitas" },
  { label: "Jam Mentoring", value: "480+", detail: "Transformasi digital" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border border-white/5 bg-gradient-to-br from-[#030a07] via-[#0b1c15] to-[#123327] shadow-[0_45px_120px_-60px_rgba(0,0,0,0.9)]">
      <div className="pointer-events-none absolute inset-px rounded-[30px] border border-white/5 opacity-40" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Salam Pendidikan Indonesia
          </motion.p>
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-semibold text-gradient sm:text-6xl">
              Kang Jhooe
            </h1>
            <p className="text-xl text-foreground/90">
              Fullstack Developer | Pendidikan | EdTech Builder
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
              Pengembang aplikasi XClass dan pendukung penuh digitalisasi pendidikan
              berbasis data. Selalu belajar untuk memberi manfaat.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/portfolio" className="btn-primary">
              Lihat Portofolio
            </Link>
            <Link href="/contact" className="btn-secondary">
              Kontak Saya
            </Link>
          </motion.div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-primary/35 bg-[rgba(3,8,6,0.92)] p-4 text-center shadow-[0_25px_55px_-35px_rgba(0,0,0,0.95)]"
              >
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
                  {stat.label}
                </p>
                <p className="text-[13px] text-foreground/80">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative min-h-[320px] rounded-[32px] border border-primary/25 bg-[rgba(2,8,5,0.95)] p-10 text-white shadow-[0_35px_95px_-50px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatedSkillCloud />
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/80">
              Fokus 2025
            </p>
            <h3 className="text-3xl font-semibold leading-snug">
              Ekosistem Digital yang <br /> mendukung pembelajaran berdaya.
            </h3>
            <p className="text-sm text-white/80">
              Riset, desain, dan pengembangan solusi teknologi untuk kelas virtual,
              portal presentasi lembaga, hingga monitoring siswa berbasis data.
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="rounded-full border border-white/40 px-3 py-1">
                NestJS
              </span>
              <span className="rounded-full border border-white/40 px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border border-white/40 px-3 py-1">
                EdTech
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

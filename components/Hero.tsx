"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSkillCloud } from "./AnimatedSkillCloud";

const heroStats = [
  { label: "Tahun Fokus Madrasah", value: "7+", detail: "Digitalisasi & LMS" },
  { label: "Guru & Siswa Terbantu", value: "2.5K", detail: "MA & MTs" },
  { label: "Jam Mentoring", value: "480+", detail: "Transformasi digital" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white/90 to-primary/5 dark:from-[#04170F] dark:to-[#0F3726]">
      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-primary/80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Salam Pendidikan Madrasah
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
            <p className="text-xl text-foreground/80 dark:text-foreground/70">
              Fullstack Developer | Pendidikan | Madrasah Tech Enthusiast
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
              Pengembang aplikasi XClass dan pendukung penuh digitalisasi pendidikan
              madrasah. Selalu belajar untuk memberi manfaat.
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
              <div key={stat.label} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                  {stat.label}
                </p>
                <p className="text-[13px] text-foreground/70">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative min-h-[320px] rounded-[32px] border border-white/30 bg-primary/10 p-10 text-white shadow-soft-xl dark:border-primary/40 dark:bg-primary-dark/40"
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
              Ekosistem Digital yang <br /> mendukung madrasah berdaya.
            </h3>
            <p className="text-sm text-white/80">
              Riset, desain, dan pengembangan solusi teknologi untuk kelas virtual,
              portal presentasi PKKM, hingga monitoring siswa berbasis data.
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="rounded-full border border-white/40 px-3 py-1">
                NestJS
              </span>
              <span className="rounded-full border border-white/40 px-3 py-1">
                Next.js
              </span>
              <span className="rounded-full border border-white/40 px-3 py-1">
                Madrasah
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

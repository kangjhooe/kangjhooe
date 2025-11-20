"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
          Salam Pendidikan Madrasah
        </p>
        <div
          className={`space-y-4 transition duration-700 ${
            isMounted ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-primary">
            Kang Jhooe
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Fullstack Developer | Pendidikan | Madrasah Tech Enthusiast
          </p>
          <p className="max-w-2xl text-base text-foreground/70">
            Pengembang aplikasi XClass dan aktif mendukung digitalisasi
            pendidikan madrasah melalui solusi berbasis NestJS dan Next.js, demi
            menghadirkan pembelajaran yang inklusif dan berkelanjutan.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <Link href="/portfolio" className="btn-primary">
            Lihat Portfolio
          </Link>
          <Link href="/contact" className="btn-secondary">
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}


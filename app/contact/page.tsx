import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Kang Jhooe untuk kolaborasi digitalisasi madrasah dan pengembangan aplikasi.",
};

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <SectionTitle title="Kontak & Kolaborasi" subtitle="Hubungi" align="left" />
      <p className="text-base text-foreground/80">
        Silakan kirimkan pesan untuk kolaborasi proyek pendidikan, konsultasi
        digitalisasi madrasah, atau undangan berbagi praktik baik.
      </p>
      <form
        className="rounded-2xl border border-primary/10 bg-white/90 p-6 shadow-sm space-y-4"
        action="mailto:hello@kangjhooe.com"
        method="POST"
        encType="text/plain"
      >
        <label className="block text-sm font-medium text-primary">
          Nama
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Pesan
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
          />
        </label>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Kirim via Email
        </button>
      </form>
      <div className="space-y-3 text-sm text-foreground/70">
        <p className="font-semibold text-primary">Sosial Media</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/kangjhooe"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kangjhooe"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}


import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Kang Jhooe untuk kolaborasi digitalisasi madrasah dan pengembangan aplikasi.",
};

const socials = [
  { label: "GitHub", href: "https://github.com/kangjhooe", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/kangjhooe", icon: FaLinkedin },
  { label: "Email", href: "mailto:hello@kangjhooe.com", icon: FaEnvelope },
];

export default function ContactPage() {
  return (
    <>
      <section className="space-y-10">
        <SectionTitle title="Kontak & Kolaborasi" subtitle="Hubungi" align="left" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel space-y-5 p-6">
            <p className="text-base text-foreground/80">
              Silakan kirim pesan untuk kolaborasi proyek pendidikan, konsultasi
              digitalisasi madrasah, atau undangan berbagi praktik baik. Saya siap
              membantu merancang roadmap, menyiapkan tim, sampai implementasi teknis.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Direct Email</p>
              <a href="mailto:hello@kangjhooe.com" className="text-lg font-semibold text-gradient">
                hello@kangjhooe.com
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary">Sosial Media</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                  >
                    <social.icon /> {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form
            className="glass-panel space-y-4 p-6"
            action="mailto:hello@kangjhooe.com"
            method="POST"
            encType="text/plain"
          >
            <label className="block text-sm font-semibold text-primary">
              Nama Lengkap
              <input
                type="text"
                name="name"
                placeholder="Nama lengkap Anda"
                required
                className="mt-2 w-full rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none dark:bg-white/10"
              />
            </label>
            <label className="block text-sm font-semibold text-primary">
              Email Aktif
              <input
                type="email"
                name="email"
                placeholder="email@madrasah.sch.id"
                required
                className="mt-2 w-full rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none dark:bg-white/10"
              />
            </label>
            <label className="block text-sm font-semibold text-primary">
              Pesan
              <textarea
                name="message"
                rows={5}
                placeholder="Ceritakan kebutuhan digitalisasi atau ide kolaborasi Anda"
                required
                className="mt-2 w-full rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none dark:bg-white/10"
              />
            </label>
            <input type="hidden" name="subject" value="Kolaborasi bersama Kang Jhooe" />
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Kirim via Email
            </button>
            <p className="text-xs text-foreground/60">
              Form ini menggunakan mailto. Anda dapat mengganti integrasi ke EmailJS dengan
              menambahkan kredensial pada file env.
            </p>
          </form>
        </div>
      </section>
      <a
        href="https://wa.me/6281234567890?text=Halo%20Kang%20Jhooe%2C%20saya%20ingin%20berkolaborasi%20untuk%20digitalisasi%20madrasah."
        className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-[#23A26F] px-4 py-3 text-sm font-semibold text-white shadow-soft-xl transition hover:-translate-y-1"
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi Kang Jhooe via WhatsApp"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </>
  );
}


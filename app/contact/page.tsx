import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { FaEnvelope, FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Kang Jhooe untuk kolaborasi transformasi digital dan pengembangan aplikasi pendidikan.",
};

const socials = [
  { label: "Website", href: "https://kangjhooe.com", icon: FaGlobe },
  { label: "Instagram", href: "https://instagram.com/kangjhooe", icon: FaInstagram },
  { label: "Email", href: "mailto:kang.jhooe@gmail.com", icon: FaEnvelope },
];

const contactDetails = [
  {
    label: "Email Utama",
    value: "kang.jhooe@gmail.com",
    href: "mailto:kang.jhooe@gmail.com",
  },
  {
    label: "Nomor Utama & WhatsApp",
    value: "0823-1616-1699",
    href: "https://wa.me/6282316161699?text=Halo%20Kang%20Jhooe%2C%20saya%20ingin%20berkolaborasi%20untuk%20transformasi%20digital%20lembaga.",
  },
  {
    label: "Kota Domisili",
    value: "Krui, Pesisir Barat",
  },
  {
    label: "Website",
    value: "kangjhooe.com",
    href: "https://kangjhooe.com",
  },
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
              transformasi digital lembaga, atau undangan berbagi praktik baik. Saya siap
              membantu merancang roadmap, menyiapkan tim, sampai implementasi teknis.
            </p>
            <div className="space-y-3">
              {contactDetails.map((item) => (
                <div key={item.label} className="space-y-1 rounded-2xl border border-primary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-semibold text-gradient transition hover:opacity-80"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
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
            action="mailto:kang.jhooe@gmail.com"
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
                placeholder="email@institusi.sch.id"
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
        href="https://wa.me/6282316161699?text=Halo%20Kang%20Jhooe%2C%20saya%20ingin%20berkolaborasi%20untuk%20transformasi%20digital%20lembaga."
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


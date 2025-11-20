import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullScreenShortcut } from "@/components/FullScreenShortcut";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteName = "Portfolio Kang Jhooe";
const siteDescription =
  "Portfolio resmi Kang Jhooe, Fullstack Developer madrasah yang membangun solusi digital seperti XClass untuk pendidikan berkelanjutan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kangjhooe.example.com"),
  title: {
    default: siteName,
    template: "%s | Kang Jhooe",
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "https://kangjhooe.example.com",
    siteName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <FullScreenShortcut />
        <Navbar />
        <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-12 space-y-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

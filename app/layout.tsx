import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FullScreenShortcut } from "@/components/FullScreenShortcut";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";
import { SplashScreen } from "@/components/SplashScreen";
import { BackToTopButton } from "@/components/BackToTopButton";
import { defaultSEO } from "@/next-seo.config";

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

export const metadata: Metadata = {
  metadataBase: new URL(defaultSEO.url),
  title: {
    default: defaultSEO.title,
    template: "%s | Kang Jhooe",
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  openGraph: defaultSEO.openGraph,
  twitter: defaultSEO.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <SplashScreen />
          <FullScreenShortcut />
          <Navbar />
          <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
            <PageTransition>{children}</PageTransition>
          </main>
          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

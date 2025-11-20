export const defaultSEO = {
  title: "Kang Jhooe | Fullstack Developer EdTech",
  description:
    "Portofolio premium Kang Jhooe, Fullstack Developer dan EdTech builder yang membangun XClass serta solusi digital pendidikan.",
  url: "https://kangjhooe.example.com",
  keywords: [
    "Kang Jhooe",
    "Fullstack Developer",
    "Pendidikan Digital",
    "XClass",
    "Next.js",
    "NestJS",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kangjhooe.example.com",
    siteName: "Portfolio Kang Jhooe",
    images: [
      {
        url: "https://kangjhooe.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kang Jhooe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@kangjhooe",
    site: "@kangjhooe",
  },
};

export type DefaultSEO = typeof defaultSEO;


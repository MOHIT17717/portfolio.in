import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOHIT S K · AI & Software Engineering Portfolio",
  description:
    "Personal portfolio of Mohit S K, Computer Science undergraduate at SRMIST. Featuring edge AI (Aura Vision), autonomous workflow engineering (MANAGE+), network diagnostics (Aero Scan), and optical simulation (EDFA Vision).",
  keywords: [
    "Mohit S K",
    "Portfolio",
    "AI Systems Engineer",
    "Software Engineer",
    "Computer Vision",
    "Aura Vision",
    "MANAGE+",
    "Aero Scan",
    "EDFA Vision",
    "Next.js",
    "SRMIST",
  ],
  authors: [{ name: "Mohit S K", url: PORTFOLIO_DATA.candidate.links.github }],
  creator: "Mohit S K",
  metadataBase: new URL("https://portfolio-in.vercel.app"),
  openGraph: {
    title: "MOHIT S K · AI & Software Engineering Portfolio",
    description:
      "Building intelligent systems. Engineering practical solutions. Personal developer portfolio showcasing edge AI, full-stack, and diagnostics.",
    url: "https://portfolio-in.vercel.app",
    siteName: "MOHIT S K Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOHIT S K · AI & Software Engineering Portfolio",
    description:
      "Building intelligent systems. Engineering practical solutions. Personal developer portfolio showcasing edge AI, full-stack, and diagnostics.",
    creator: "@mohit17717",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohit S K",
    url: "https://portfolio-in.vercel.app",
    email: "mailto:mohit17717@gmail.com",
    telephone: "+91 7418634741",
    jobTitle: "AI Systems & Software Engineer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SRM Institute of Science and Technology",
    },
    sameAs: [
      PORTFOLIO_DATA.candidate.links.linkedin,
      PORTFOLIO_DATA.candidate.links.github,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Computer Vision",
      "Edge Computing",
      "Full-Stack Web Development",
      "Cybersecurity",
      "Network Diagnostics",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#CEFF00] selection:text-[#121316]">
        {children}
      </body>
    </html>
  );
}

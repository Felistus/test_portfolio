import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Ezeugo Felistus Obieze - Frontend Developer",
  description:
    "Experienced frontend developer with 3+ years specializing in React, Next.js, and modern web technologies. Based in Port Harcourt, Nigeria. Available for freelance projects and full-time opportunities.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js",
    "web developer",
    "javascript",
    "typescript",
    "port harcourt developer",
    "nigeria developer",
    "remote",
    "freelance",
  ],
  authors: [{ name: "Ezeugo Felistus Obieze" }],
  creator: "Ezeugo Felistus Obieze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ezeugoobieze.vercel.app/",
    title: "Ezeugo Felistus Obieze - Frontend Developer",
    description:
      "Experienced frontend developer with 3+ years specializing in React, Next.js, and modern web technologies. Based in Port Harcourt, Nigeria.",
    siteName: "Ezeugo Obieze Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Ezeugo Felistus Obieze - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezeugo Felistus Obieze - Frontend Developer",
    description:
      "Experienced frontend developer with 3+ years specializing in React, Next.js, and modern web technologies. Based in Port Harcourt, Nigeria.",
    creator: "@ezeugoobieze",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

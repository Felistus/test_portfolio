import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ezeugoobieze.vercel.app/"),
  title: {
    default: "Ezeugo Felistus Obieze - Frontend Developer",
    template: "%s | Ezeugo Obieze",
  },
  description:
    "Experienced frontend developer with 3+ years specializing in React, Next.js, React Native, and modern web technologies. Based in Port Harcourt, Nigeria. Available for freelance projects and full-time opportunities.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js",
    "web developer",
    "javascript",
    "typescript",
    "react native",
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
      "Experienced frontend developer with 3+ years specializing in React, Next.js, React Native, and modern web technologies. Based in Port Harcourt, Nigeria.",
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
      "Experienced frontend developer with 3+ years specializing in React, Next.js, React Native, and modern web technologies. Based in Port Harcourt, Nigeria.",
    creator: "@ezeugoobieze",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ezeugoobieze.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ezeugo Felistus Obieze",
              jobTitle: "Frontend Developer",
              url: "https://ezeugoobieze.vercel.app/",
              email: "jarotechnologies@gmail.com",
              telephone: "+2347060858438",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Port Harcourt",
                addressCountry: "Nigeria",
              },
              sameAs: [
                "https://github.com/felistus",
                "https://www.linkedin.com/in/ezeugo-felistus-obieze",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "JavaScript",
                "Frontend Development",
              ],
              description:
                "Experienced frontend developer with 3+ years specializing in React, Next.js, React Native, and modern web technologies. Based in Port Harcourt, Nigeria.",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const siteUrl = "https://akshaya.builds";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Akshaya Rathinam | Full-Stack Developer & Builder",
    template: "%s | Akshaya.builds",
  },

  description:
    "Akshaya Rathinam is a full-stack developer who builds websites, web applications, and digital products. Open to freelance and client work.",

  keywords: [
    "Akshaya Rathinam",
    "Akshaya Rathinam developer",
    "Akshaya developer portfolio",
    "Akshaya.builds",
    "Akshaya full-stack developer",
    "freelance web developer",
    "full-stack web developer",
    "custom web application development",
    "website development for startups",
    "SaaS application development",
    "MVP development for startups",
    "ecommerce website development",
    "web development projects",
  ],

  authors: [{ name: "Akshaya Rathinam", url: siteUrl }],
  creator: "Akshaya Rathinam",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Akshaya.builds",
    title: "Akshaya Rathinam | Full-Stack Developer & Builder",
    description:
      "Akshaya Rathinam is a full-stack developer who builds websites, web applications, and digital products for startups and businesses.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akshaya Rathinam | Full-Stack Developer & Builder",
    description:
      "Akshaya Rathinam is a full-stack developer who builds websites, web applications, and digital products for startups and businesses.",
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── Person schema (includes ContactPoint) ───────────────────────────────
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akshaya Rathinam",
    url: siteUrl,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer building websites, web applications, and digital products for startups and businesses.",
    email: "mailto:hello.akshayabuilds@gmail.com",
    telephone: "+91-98845-85959",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello.akshayabuilds@gmail.com",
      telephone: "+91-98845-85959",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://github.com/akshayarathinam1",
      "https://www.linkedin.com/in/akshaya-builds/",
    ],
  };

  // ── WebSite schema ───────────────────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Akshaya.builds",
    url: siteUrl,
    description:
      "Portfolio of Akshaya Rathinam — full-stack developer building websites, web applications, and digital products.",
    author: {
      "@type": "Person",
      name: "Akshaya Rathinam",
    },
  };

  // ── Projects — ItemList + CreativeWork ───────────────────────────────────
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Projects by Akshaya Rathinam",
    description:
      "Selected web development and design projects built by Akshaya Rathinam, including live client websites and concept applications.",
    url: `${siteUrl}/#projects`,
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "Zoe Smiles",
          description:
            "A website for a multispeciality dental clinic, bringing treatment information, patient testimonials, and appointment enquiries together in one place.",
          url: "https://zoesmiles.in/",
          dateCreated: "2024-01-01",
          keywords: ["dental clinic website", "web development", "HTML", "CSS", "JavaScript"],
          creator: {
            "@type": "Person",
            name: "Akshaya Rathinam",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "Modominds",
          description:
            "A digital growth website bringing brand strategy, performance marketing, product development, and AI solutions together under one roof.",
          url: "https://modominds.com/",
          dateCreated: "2023-08-01",
          keywords: ["digital agency website", "web development", "HTML", "CSS", "JavaScript"],
          creator: {
            "@type": "Person",
            name: "Akshaya Rathinam",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "Aurevia",
          description:
            "A skincare e-commerce concept exploring a clean shopping experience, thoughtful product presentation, and simple product discovery.",
          keywords: [
            "skincare ecommerce concept",
            "ecommerce website development",
            "Next.js",
            "Python",
            "Django",
          ],
          creativeWorkStatus: "Concept",
          creator: {
            "@type": "Person",
            name: "Akshaya Rathinam",
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

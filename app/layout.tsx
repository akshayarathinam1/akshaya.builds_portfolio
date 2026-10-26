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

export const metadata: Metadata = {
  title: "Akshaya Builds — Developer & Designer",
  description:
    "Portfolio of Akshaya — a developer and designer who builds things that get out of your way. Open to new work and good problems.",
  keywords: ["developer", "designer", "portfolio", "full-stack", "UI/UX"],
  authors: [{ name: "Akshaya" }],
  openGraph: {
    title: "Akshaya Builds — Developer & Designer",
    description:
      "Portfolio of Akshaya — a developer and designer who builds things that get out of your way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bastion - Command Center for Translational Medicine",
  description: "Collapse the distance between idea and cure. Bastion unifies the entire translational stack into one federated lattice called CureGraph.",
  keywords: ["translational medicine", "clinical trials", "biomedical research", "curegraph", "bastion"],
  authors: [{ name: "Estelion" }],
  openGraph: {
    title: "Bastion - Command Center for Translational Medicine",
    description: "Two diseases cured; ten‑thousand remain. Translation must move at software speed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-grey-900 text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

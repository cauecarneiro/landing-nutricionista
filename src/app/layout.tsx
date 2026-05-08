import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pablo Moreira | Nutricionista Clínico & Comportamental em Brasília",
  description:
    "Nutrição clínica e comportamental em Brasília e online. Planos personalizados para emagrecimento, saúde da mulher, nutrição esportiva e muito mais.",
  keywords: ["nutricionista", "Brasília", "nutrição clínica", "emagrecimento", "nutrição esportiva", "Pablo Moreira"],
  openGraph: {
    title: "Pablo Moreira | Nutricionista",
    description: "Comida que transforma vidas, não apenas corpos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

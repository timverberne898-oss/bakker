import type { Metadata } from "next";
import { Fraunces, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Het Bakkershuys — Ambachtelijke bakkerij in Deurne",
  description:
    "Het Bakkershuys aan de Geijzerstraat in Deurne. Elke dag vers brood en gebak, gemaakt met aandacht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${workSans.variable} ${caveat.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

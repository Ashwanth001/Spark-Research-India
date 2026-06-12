import type { Metadata } from "next";
import { Sora, Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spark Research India — IRIS & ISEF Mentorship Programme",
  description:
    "Spark Research India guides Indian students (Classes 8–12) from a research idea to the IRIS National Fair and ISEF — the world's largest pre-college science competition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}

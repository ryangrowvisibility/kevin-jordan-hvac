import type { Metadata } from "next";
import { Geist, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayGrotesk = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const microMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kevin Jordan Heating & Air — Turlock HVAC, mini-splits, tankless. Impeccable work.",
  description:
    "Turlock, Stanislaus County HVAC. Owner Kevin Jordan on the tools since 2017; Taylor runs the office. Mini-split and tankless specialists. Repairs, installs, service agreements.",
  openGraph: {
    title: "Kevin Jordan Heating & Air — Turlock",
    description:
      "Owner-operated HVAC in Turlock. Mini-split + tankless specialty. Kevin on the tools, Taylor on the phone. Mon–Fri, 24 reviews.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayGrotesk.variable} ${bodyGrotesk.variable} ${microMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}

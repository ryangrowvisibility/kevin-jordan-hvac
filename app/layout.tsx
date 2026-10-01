import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kevin Jordan Heating & Air | HVAC, Mini-Splits & Tankless in Turlock, CA",
  description:
    "Heating and air conditioning repair and installation in Turlock and Stanislaus County. Ductless mini-splits and tankless water heaters. Owner Kevin Jordan, serving the area since 2017. Call (209) 538-2083.",
  openGraph: {
    title: "Kevin Jordan Heating & Air | Turlock, CA",
    description:
      "HVAC repair and installation, ductless mini-splits and tankless water heaters in Turlock and Stanislaus County. Call (209) 538-2083.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}

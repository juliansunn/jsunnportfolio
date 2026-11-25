import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juliansunn.com"),
  title: "Julian Sunn, AI platform engineer",
  description:
    "Senior software engineer on the AI platform team at Virta Health. Before software, 13 years as a biotech scientist. Builder of Rung, Torch and Metabolism Simulator.",
  openGraph: {
    title: "Julian Sunn, AI platform engineer",
    description: "I build the AI platform other engineers ship on.",
    url: "https://www.juliansunn.com",
    siteName: "Julian Sunn",
    images: [{ url: "/profile-photo.png", width: 1200, height: 1200, alt: "Julian Sunn" }],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#eef1f3" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}

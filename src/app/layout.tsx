import type { Metadata, Viewport } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Islah Foundation | Education and Community Development in Kishanganj",
  description:
    "Islah Foundation is a registered public charitable trust supporting underserved students and communities in Kishanganj through education, mentoring, skills and values-based development.",
  metadataBase: new URL("https://islahfoundation.org"),
  openGraph: {
    title: "Islah Foundation",
    description: "Education with knowledge, character and purpose",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable} overflow-x-hidden w-full max-w-full`}>
      <body className="antialiased font-sans bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col overflow-x-hidden w-full max-w-full">
        <Header />
        <main className="flex-1 flex flex-col w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeBootScript = `
  (() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const applySavedTheme = () => {
        const preference = localStorage.getItem("islah-theme") || "light";
        const useDark = preference === "dark" || (preference === "system" && mediaQuery.matches);
        document.documentElement.classList.toggle("dark", useDark);
        document.documentElement.dataset.theme = preference;
        document.documentElement.style.colorScheme = useDark ? "dark" : "light";
      };
      applySavedTheme();
      mediaQuery.addEventListener("change", applySavedTheme);
    } catch (_) {
      document.documentElement.classList.remove("dark");
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

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
    <html
      lang="en"
      suppressHydrationWarning
      className="w-full max-w-full overflow-x-hidden"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-white pb-[calc(4.25rem+env(safe-area-inset-bottom))] font-sans text-brand-charcoal antialiased dark:bg-[#121a18] lg:pb-0">
        <Header />
        <main className="flex-1 flex flex-col w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}

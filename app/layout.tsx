import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090e17" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dilawarali.vercel.app"),
  title: "Dilawar Ali — Multi-Platform Software Engineer & AI Architect",
  description:
    "Production-grade software engineering across Windows, Web, iOS, macOS, visionOS, Android, Cross-Platform (Flutter), and WordPress, with high-speed FastAPI backends and AI workflow automations.",
  keywords: [
    "Dilawar Ali",
    "Multi-Platform Software Engineer",
    "Windows WinUI 3",
    "Full-Stack Web Next.js",
    "iOS SwiftUI",
    "macOS Developer",
    "visionOS Spatial Computing",
    "Android Jetpack Compose",
    "Cross-Platform Flutter",
    "WordPress WooCommerce",
    "FastAPI",
    "AI Automation",
    "PyTorch",
  ],
  authors: [{ name: "Dilawar Ali" }],
  creator: "Dilawar Ali",
  openGraph: {
    title: "Dilawar Ali — Multi-Platform Software Engineer & AI Architect",
    description:
      "Production-grade software engineering across Windows, Web, iOS, macOS, visionOS, Android, Cross-Platform, and WordPress.",
    url: "https://dilawarali.vercel.app",
    siteName: "Dilawar Ali Portfolio",
    images: [
      {
        url: "/projects/saas-web.jpg",
        width: 1200,
        height: 630,
        alt: "Dilawar Ali — Multi-Platform Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilawar Ali — Multi-Platform Software Engineer",
    description:
      "Production-grade software engineering across Windows, Web, iOS, macOS, visionOS, Android, Cross-Platform, and WordPress.",
    images: ["/projects/saas-web.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem("portfolio-theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var theme = saved ? saved : (prefersDark ? "dark" : "light");
                if (theme === "light") {
                  document.documentElement.classList.remove("dark");
                  document.documentElement.classList.add("light");
                  document.documentElement.dataset.theme = "light";
                } else {
                  document.documentElement.classList.remove("light");
                  document.documentElement.classList.add("dark");
                  document.documentElement.dataset.theme = "dark";
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} min-h-screen antialiased bg-[#090e17] text-slate-100 dark:bg-[#090e17] dark:text-slate-100 light:bg-[#f8fafc] light:text-slate-900 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

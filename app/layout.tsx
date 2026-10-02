import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://dilawarali.vercel.app"),
  title: "Dilawar Ali — Data Scientist & AI Automation Engineer",
  description:
    "Portfolio of Dilawar Ali, Computer Science graduate specializing in Python, machine learning, data analysis, FastAPI backends and AI automation with n8n and Make.com.",
  keywords: [
    "Dilawar Ali",
    "Data Scientist",
    "AI Automation Engineer",
    "Machine Learning",
    "FastAPI",
    "n8n",
    "Make.com",
    "Python",
    "Multan",
    "Pakistan",
    "PyTorch",
    "Deep Learning",
  ],
  authors: [{ name: "Dilawar Ali" }],
  creator: "Dilawar Ali",
  openGraph: {
    title: "Dilawar Ali — Data Scientist & AI Automation Engineer",
    description:
      "Machine learning, data analysis, FastAPI backends and AI workflow automation — projects, skills and experience.",
    url: "https://dilawarali.vercel.app",
    siteName: "Dilawar Ali Portfolio",
    images: [
      {
        url: "/hero-abstract.jpg",
        width: 1200,
        height: 630,
        alt: "Dilawar Ali — Data Scientist & AI Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilawar Ali — Data Scientist & AI Automation Engineer",
    description:
      "Machine learning, data analysis, FastAPI backends and AI workflow automation.",
    images: ["/hero-abstract.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dilawar Ali",
    jobTitle: "Data Scientist & AI Automation Engineer",
    url: "https://dilawarali.vercel.app",
    email: "dilawarnaeem45@gmail.com",
    telephone: "+923027707095",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "PIEAS University, Islamabad",
    },
    knowsAbout: [
      "Machine Learning",
      "Data Science",
      "Python",
      "FastAPI",
      "AI Workflow Automation",
      "n8n",
      "Make.com",
      "Deep Learning",
      "Computer Vision",
    ],
    sameAs: ["https://www.linkedin.com/in/dilawar-ali-4b8185229"],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased min-h-screen bg-[#090e17] text-slate-100`}>
        {children}
      </body>
    </html>
  );
}

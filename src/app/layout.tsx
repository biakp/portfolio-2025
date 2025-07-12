import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LightingEffects } from "@/components/ui/LightingEffects";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { PageTransition } from "@/components/ui/PageTransition";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Beatriz Knabben - Front-End Developer & Digital Solutions Specialist",
  description: "Portfolio of Beatriz Knabben, a front-end developer specializing in modern web technologies, e-commerce solutions, and digital marketing automation.",
  keywords: ["frontend developer", "react", "nextjs", "typescript", "shopify", "vue.js", "tailwind css", "meta ads", "automation", "cybersecurity"],
  authors: [{ name: "Beatriz Knabben" }],
  creator: "Beatriz Knabben",
  publisher: "Beatriz Knabben",
  category: "Technology",
  metadataBase: new URL('https://beatrizknabben.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beatrizknabben.dev',
    title: 'Beatriz Knabben - Front-End Developer & Digital Solutions Specialist',
    description: 'Portfolio of Beatriz Knabben, a front-end developer specializing in modern web technologies, e-commerce solutions, and digital marketing automation.',
    siteName: 'Beatriz Knabben Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beatriz Knabben - Front-End Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@beatrizknabben',
    creator: '@beatrizknabben',
    title: 'Beatriz Knabben - Front-End Developer & Digital Solutions Specialist',
    description: 'Portfolio of Beatriz Knabben, a front-end developer specializing in modern web technologies, e-commerce solutions, and digital marketing automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://beatrizknabben.dev" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#455dff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Beatriz Knabben",
              "jobTitle": "Front-End Developer",
              "description": "Front-end developer specializing in modern web technologies, e-commerce solutions, and digital marketing automation.",
              "url": "https://beatrizknabben.dev",
              "sameAs": [
                "https://linkedin.com/in/beatrizknabben",
                "https://github.com/beatrizknabben"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Vue.js",
                "Shopify",
                "Tailwind CSS"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <SkipToContent />
        <ThemeProvider>
          <LenisProvider>
            <LightingEffects />
            <CustomCursor />
            <PageTransition>
              <main role="main" id="main-content">
                {children}
              </main>
            </PageTransition>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

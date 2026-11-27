import type { Metadata, Viewport } from "next";
import { Comfortaa, IBM_Plex_Mono, Nunito } from "next/font/google";
import { LanguageProvider } from "@/components/portfolio/i18n";
import { SkipLink } from "@/components/portfolio/ui";
import "./globals.css";

const outfit = Nunito({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
});

const syne = Comfortaa({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
});

const siteUrl = "https://portfolio-2025-rose-delta.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffd4ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bea Knabben — Front-End & Shopify Developer",
  description:
    "Beatriz Knabben (Bea), front-end and Shopify Online Store 2.0 developer in Tubarão, Brazil. Remote roles and fixed-price Shopify fixes. Native Portuguese, fluent English.",
  keywords: [
    "Beatriz Knabben",
    "Bea Knabben",
    "Shopify developer",
    "Online Store 2.0",
    "Liquid",
    "front-end developer",
    "remote",
    "accessibility",
    "Webflow",
    "React",
    "Vue",
  ],
  authors: [{ name: "Beatriz Knabben", url: "https://linkedin.com/in/biakp" }],
  creator: "Beatriz Knabben",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: siteUrl,
    title: "Bea Knabben — Front-End & Shopify Developer",
    description:
      "Online Store 2.0 specialist. Remote front-end roles and fixed-price Shopify fixes. Tubarão, SC, Brazil.",
    siteName: "Bea Knabben",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Beatriz Knabben",
  alternateName: "Bea",
  jobTitle: "Front-End & Shopify Developer",
  email: "mailto:beatriz.knabbenp@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tubarão",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  knowsLanguage: ["pt-BR", "en"],
  sameAs: ["https://linkedin.com/in/biakp", "https://github.com/biakp"],
  knowsAbout: [
    "Shopify",
    "Liquid",
    "Online Store 2.0",
    "React",
    "Vue.js",
    "Webflow",
    "Accessibility",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${syne.variable} ${plex.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <LanguageProvider>
          <SkipLink />
          <main id="main-content">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

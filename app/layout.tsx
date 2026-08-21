import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { AnalyticsWrapper } from './Analytics';
import { Geist_Mono, Karla } from "next/font/google";
import { ThemeProvider } from './components/ThemeProvider';
import { SITE, personJsonLd, organizationJsonLd } from './lib/site';

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
})

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-karla",
})

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
    images: [
      { url: '/images/profilepic.png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: ['/images/profilepic.png'],
  },
  keywords: ['Matt Jared', 'Matthew Jared', 'Matt Jared Austin', 'Matt Jared Vercel', 'Matt Jared Developer', 'Matt Jared Software Engineer', 'Matt Jared Developer Austin', 'Matt Jared Developer Vercel', 'Matt Jared Sales Engineer', 'Matt Jared Sales Engineer Austin', 'Matt Jared Sales Engineer Vercel'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="me" href="/llms.txt " type="text/plain" />
        <link rel="me" href="/llms-full.txt" type="text/plain" />
        {/* JSON-LD structured data: Person (identity) + Organization (contact/legitimacy) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`min-h-screen antialiased tracking-tighter bg-slate-50 dark:bg-slate-950 text-black dark:text-white ${geistMono.variable} ${karla.variable}`}>
        <ThemeProvider>
          <main>
            {children}
          </main>
          <Footer />
          <AnalyticsWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}

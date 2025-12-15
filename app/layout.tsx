import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { AnalyticsWrapper } from './Analytics';
import { Geist_Mono, Karla } from "next/font/google";
import { cn } from './lib/utils';
import { ThemeProvider } from './components/ThemeProvider';

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
  metadataBase: new URL('https://mattjared.xyz'),
  title: 'Matt Jared',
  description: "Matt Jared",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Matt Jared',
    description: "Matt Jared",
    url: 'https://mattjared.xyz',
    siteName: 'Matt Jared',
    images: [
      { url: '/profilepic.png' },
    ],
  },
  keywords: ['Matt Jared', 'Matthew Jared', 'Matt Jared Austin', 'Matt Jared Vercel', 'Matt Jared Developer', 'Matt Jared Software Engineer', 'Matt Jared Developer Austin', 'Matt Jared Developer Vercel', 'Matt Jared Sales Engineer', 'Matt Jared Sales Engineer Austin', 'Matt Jared Sales Engineer Vercel'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased tracking-tighter bg-slate-50 dark:bg-slate-950 text-black dark:text-white", geistMono.variable, karla.variable)}>
        <ThemeProvider>
          {/* <main className="container mx-auto px-4"> */}
          <main className="">
            {/* <Navbar /> */}
            {children}
            <Footer />
          </main>
          <AnalyticsWrapper />
        </ThemeProvider>
      </body>
    </html>
);
}

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { AnalyticsWrapper } from './Analytics';
import { Roboto_Mono } from "next/font/google";
import { cn } from './lib/utils';

// const font = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
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
    <html lang="en">
      <body className={cn("min-h-screen font-mono antialiased", robotoMono.variable)}>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
);
}

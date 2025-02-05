import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { AnalyticsWrapper } from './Analytics';

export const metadata = {
  title: 'Matt Jared',
  description: "Matt Jared",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Matt Jared',
    description: "Matt Jared",
    url: 'https://mattjared.com',
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
      <body className="min-h-screen bg-[#f8f7f4] text-black font-sans">
        <Navbar />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

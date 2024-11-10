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

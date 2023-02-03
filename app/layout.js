// import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import Header from './Navbar';
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css';
import { AnalyticsWrapper } from './Analytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-mainBlue text-altBlue ${inter.className}`}>
        <div className="py-32 px-8 max-w-4xl min-h-screen transition-all m-auto">
          <Header />
          { children }
          <Footer />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
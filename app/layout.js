// import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Source_Code_Pro } from "next/font/google";
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })
import './globals.css';
import { AnalyticsWrapper } from './Analytics';

export const metadata = {
  title: 'Matt Jared',
  description: "Matt Jared",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-mainBlue text-altBlue ${sourceCodePro.className}`}>
        <div className="py-32 px-8 max-w-4xl min-h-screen transition-all m-auto">
          <Navbar />
          { children }
          <Footer />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
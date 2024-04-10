import Footer from './Footer';
import Navbar from './Navbar';
import { Source_Code_Pro } from "next/font/google";
import './globals.css';
import { AnalyticsWrapper } from './Analytics';

const sourceCodePro = Source_Code_Pro({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Matt Jared',
  description: "Matt Jared",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const now = new Date();
  console.log(now);
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <div key="1" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans shadow-lg bg-white min-h-screen">
          <div className="max-w-2xl mx-auto">
            <Navbar />
            { children }
            <Footer />
          </div>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
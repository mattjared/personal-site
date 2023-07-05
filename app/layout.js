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
  return (
    <html lang="en" className={sourceCodePro.className}>
      <body className={`bg-mainBlue text-altBlue`}>
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
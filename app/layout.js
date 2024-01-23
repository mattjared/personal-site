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
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <div className="text-lg text-orange-600">
          asdf
        </div>
        { children }
        {/* <Footer />         */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
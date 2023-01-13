import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-mainBlue text-altBlue ${inter.className}`}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </main>
  )
}
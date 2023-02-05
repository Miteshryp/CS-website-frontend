import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import "@/styles/components/animation/TypingAnimation.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

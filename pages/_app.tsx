import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}

export default MyApp

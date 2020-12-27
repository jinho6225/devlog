import '../styles/index.css'
import "typeface-open-sans";
import "typeface-merriweather";
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

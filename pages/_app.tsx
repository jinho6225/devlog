import '../styles/index.css'
import "typeface-merriweather"
import "typeface-open-sans"
// import "typeface-lato";

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

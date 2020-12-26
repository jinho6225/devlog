import '../styles/index.css'
import '../styles/markdown.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp

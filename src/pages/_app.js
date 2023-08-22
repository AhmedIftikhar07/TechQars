import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <><Head>
      <link rel="favicon-32x32.png" href="/favicon.ico" />
    </Head>
    
      <Component {...pageProps} />
    </>
  )
}

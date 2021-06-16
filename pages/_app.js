import Head from "next/head"
import "../styles/globals.css"
import { metatags } from "../seo/metatags.config"

const { host } = metatags

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="og:url" content={`${host}${pageProps.pathname}`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = (appContext) => ({
  pageProps: {
    pathname: appContext.ctx.asPath,
  },
})

export default MyApp

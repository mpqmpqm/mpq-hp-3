import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="og:image"
          content={`https://${pageProps.host}/static/woods-walk-meta.jpg`}
        />
        <meta
          name="og:url"
          content={`https://${pageProps.host}${pageProps.pathname}`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = (appContext) => ({
  pageProps: {
    host: appContext.ctx.req.headers.host,
    pathname: appContext.ctx.asPath,
  },
})

export default MyApp

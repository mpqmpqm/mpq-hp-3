import Document, { Html, Head, Main, NextScript } from "next/document"
import { metatags } from "../seo/metatags.config"

const { host, ogImage } = metatags

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/mic1gsb.css" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏼‍💻</text></svg>"
          />
          <meta name="description" content="MPQ's site" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="og:image" content={`${host}${ogImage}`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

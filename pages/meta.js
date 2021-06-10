import Head from "next/head"

export default function page() {
  return (
    <>
      <Head>
        <title>Meta tags test</title>
        <meta name="title" content="Meta tags test" />
        <meta
          name="description"
          content="This is a quick test to establish expected metatag behavior"
        />
        <meta property="og:title" content="Meta tags test" />
        <meta
          property="og:description"
          content="This is a quick test to establish expected metatag behavior"
        />
        <meta property="og:image" content="/kitty.jpg,/dog.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta tags test" />
        <meta
          property="twitter:description"
          content="This is a quick test to establish expected metatag behavior"
        />
        <meta property="twitter:image" content="/kitty.jpg,/dog.jpg" />
      </Head>
      <h1>Meta tags test</h1>
    </>
  )
}

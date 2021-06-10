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
        <meta
          property="og:image"
          content="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg,https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2017/06/05/cat.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta tags test" />
        <meta
          property="twitter:description"
          content="This is a quick test to establish expected metatag behavior"
        />
        <meta
          property="twitter:image"
          content="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg,https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2017/06/05/cat.jpg"
        />
      </Head>
      <h1>Meta tags test</h1>
    </>
  )
}

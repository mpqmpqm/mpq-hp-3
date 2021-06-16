import Head from "next/head"
import Layout from "../components/Layout"
import Index from "../components/pages/index/Index"
import { fetchGithubMarkdown } from "../utils/fetchGithub"

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>MPQ | Home</title>
        <meta name="og:title" content="Home | MPQ" />
      </Head>

      <Layout>
        <Index {...{ content }} />
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `About.md`,
  })

  return {
    props: {
      content,
    },
  }
}

import Head from "next/head"
import PageNav from "../components/PageNav"
import Index from "../components/pages/index/Index"
import { fetchGithubMarkdown } from "../utils/fetchGithub"

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>MPQ</title>
      </Head>
      <PageNav />
      <Index {...{ content }} />
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

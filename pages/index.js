import Head from "next/head"
import PageNav from "../components/PageNav"
import Index from "../components/pages/index/Index"
import { fetchGithubMarkdown } from "../utils/fetchGithubMarkdown"

export default function Home({ md }) {
  return (
    <>
      <Head>
        <title>MPQ</title>
      </Head>
      <PageNav />
      <Index {...{ md }} />
    </>
  )
}
export async function getServerSideProps() {
  return {
    props: { ...(await fetchGithubMarkdown({ file: `About.md` })) },
  }
}

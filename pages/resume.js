import Layout from "../components/Layout"
import Resume from "../components/pages/work/resume/Resume"
import { markdownToReact } from "../utils/markdownToReact"
import { fetchGithubMarkdown } from "../utils/fetchGithub"
import Head from "next/head"

const resume = ({ content }) => {
  return (
    <>
      <Head>
        <title>MPQ | Résumé</title>
        <meta name="og:title" content="Résumé | MPQ" />
      </Head>
      <Layout>
        <Resume>{markdownToReact({ content })}</Resume>
      </Layout>
      <style global jsx>
        {`
          @media print {
            body {
              background-color: white;
            }

            nav {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  )
}

export default resume

export async function getStaticProps() {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `Resume.md`,
  })
  return {
    props: {
      content,
    },
  }
}

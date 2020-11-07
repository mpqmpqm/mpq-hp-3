import Layout from "../components/Layout"
import Resume from "../components/pages/work/resume/Resume"
import { markdownToReact } from "../utils/markdownToReact"
import { fetchGithubMarkdown } from "../utils/fetchGithub"

const resume = ({ content }) => {
  return (
    <>
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

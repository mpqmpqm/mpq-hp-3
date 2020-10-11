import Layout from "../components/Layout"
import Resume from "../components/pages/work/resume/Resume"
import { markdownToReact } from "../utils/markdownToReact"
import { fetchGithubMarkdown } from "../utils/fetchGithubMarkdown"

const resume = ({ md }) => {
  return (
    <Layout>
      <Resume>{markdownToReact({ md })}</Resume>
    </Layout>
  )
}

export default resume

export async function getServerSideProps() {
  return {
    props: { ...(await fetchGithubMarkdown({ file: `Resume.md` })) },
  }
}

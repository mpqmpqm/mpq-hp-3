import { fetchGithubMarkdown } from "../../utils/fetchGithubMarkdown"
import { markdownToReact } from "../../utils/markdownToReact"
import Layout from "../../components/Layout"

const project = ({ md }) => {
  return (
    <Layout>
      <main>{markdownToReact({ md })}</main>
    </Layout>
  )
}

export default project

export async function getServerSideProps(context) {
  const { project } = context.params
  return {
    props: {
      ...(await fetchGithubMarkdown({ file: `/portfolio/${project}.md` })),
    },
  }
}

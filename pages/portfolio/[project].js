import { fetchGithubLinks, fetchGithubMarkdown } from "../../utils/fetchGithub"
import { markdownToReact } from "../../utils/markdownToReact"
import Layout from "../../components/Layout"
import Link from "next/link"
import styles from "../../styles/pages/project.module.css"

const project = ({ content, title }) => {
  return (
    <Layout subPath={title}>
      <main className={styles.main}>
        {/* <Link href="/portfolio">
          <a>&larr; Portfolio</a>
        </Link> */}
        {markdownToReact({ content })}
      </main>
    </Layout>
  )
}

export default project

export async function getStaticProps(context) {
  const { project } = context.params
  const {
    content,
    data: { title },
  } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `/portfolio/${project}.md`,
  })
  return {
    props: {
      content,
      title,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      ...(await fetchGithubLinks({
        repo: `resume`,
        path: `portfolio`,
        pathsOnly: true,
      })),
    ],
    fallback: false,
  }
}

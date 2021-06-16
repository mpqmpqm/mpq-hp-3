import { fetchGithubLinks, fetchGithubMarkdown } from "../../utils/fetchGithub"
import { markdownToReact } from "../../utils/markdownToReact"
import Layout from "../../components/Layout"
import styles from "../../styles/pages/project.module.css"
import Head from "next/head"

const project = ({ content, title }) => {
  return (
    <>
      <Head>
        <title>MPQ | {title}</title>
        <meta name="og:title" content={`${title} | MPQ`} />
      </Head>
      <Layout subPath={title}>
        <main className={styles.main}>{markdownToReact({ content })}</main>
      </Layout>
    </>
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
    paths: await fetchGithubLinks({
      repo: `resume`,
      path: `portfolio`,
      pathsOnly: true,
    }),

    fallback: false,
  }
}

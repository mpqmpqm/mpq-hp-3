import Layout from "../components/Layout"
import Link from "next/link"
import styles from "../styles/pages/portfolio.module.css"
import { fetchGithubMarkdown, fetchGithubLinks } from "../utils/fetchGithub"
import { markdownToReact } from "../utils/markdownToReact"

const portfolio = ({ content, links }) => {
  return (
    <Layout>
      <main>
        {markdownToReact({ content })}
        {links.map(({ path, title, tags }) => (
          <div className={styles.project} key={path}>
            <h2 className={styles.title}>
              <Link href={`/${path}`}>
                <a>{title}</a>
              </Link>
            </h2>
            <p className={styles.tags}>
              <i>Tags:</i> {tags}
            </p>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default portfolio

export async function getStaticProps() {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `Portfolio.md`,
  })

  return {
    props: {
      links: await fetchGithubLinks({
        repo: `resume`,
        path: `portfolio`,
        pathsOnly: false,
      }),
      content,
    },
  }
}

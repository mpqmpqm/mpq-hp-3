import Layout from "../components/Layout"
import Link from "next/link"
import styles from "../styles/pages/portfolio.module.css"
import { fetchGithubLinks } from "../utils/fetchGithub"

const portfolio = ({ links }) => {
  return (
    <Layout>
      <main>
        <h1 className={styles.h1}>Selected projects</h1>
        {links.map(({ path, title, tags }) => (
          <div className={styles.project} key={path}>
            <Link href={`/${path}`}>
              <a>{title}</a>
            </Link>
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
  return {
    props: {
      links: await fetchGithubLinks({
        repo: `resume`,
        path: `portfolio`,
        pathsOnly: false,
      }),
    },
  }
}

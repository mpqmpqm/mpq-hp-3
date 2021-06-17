import Layout from "../components/Layout"
import Link from "next/link"
import styles from "../styles/pages/portfolio.module.css"
import {
  fetchGithubMarkdown,
  fetchGithubLinks,
  fetchGithubOrder,
} from "../utils/fetchGithub"
import { markdownToReact } from "../utils/markdownToReact"
import Head from "next/head"

const portfolio = ({ content, links }) => {
  return (
    <>
      <Head>
        <title>MPQ | Work</title>
        <meta name="og:title" content="Work | MPQ" />
      </Head>
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
    </>
  )
}

export default portfolio

export async function getStaticProps() {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `Portfolio.md`,
  })

  const links = await fetchGithubLinks({
    repo: `resume`,
    path: `portfolio`,
    pathsOnly: false,
  })

  const { order } = await fetchGithubOrder({
    repo: `resume`,
    path: `z_order/portfolio.txt`,
  })

  return {
    props: {
      links: links.sort(
        ({ filename: a }, { filename: b }) =>
          order.indexOf(a) - order.indexOf(b)
      ),
      content,
    },
  }
}

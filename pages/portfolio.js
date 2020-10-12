import Layout from "../components/Layout"
import Link from "next/link"
import { fetchGithubLinks } from "../utils/fetchGithub"

const portfolio = ({ links }) => {
  return (
    <Layout>
      <main>
        {links.map(({ path, title }) => (
          <Link href={`/${path}`} key={path}>
            <a>{title}</a>
          </Link>
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

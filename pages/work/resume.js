import showdown from "showdown"
import { Octokit } from "@octokit/core"
import Resume from "../../components/pages/work/resume/Resume"
import styles from "../../styles/pages/resume.module.css"

const resume = ({ markdown }) => {
  const converter = new showdown.Converter()
  const html = converter.makeHtml(markdown)
  return (
    <main className={styles.page}>
      <Resume {...{ html }} />
    </main>
  )
}

export default resume

export async function getServerSideProps() {
  const octokit = new Octokit({ auth: process.env.GITHUB_KEY })

  const res = await octokit.request(
    "GET /repos/mpqmpqm/resume/contents/Resume.md",
    {
      owner: "mpqmpqm",
      repo: "resume",
      type: "private",
    }
  )

  return {
    props: {
      markdown: Buffer.from(res.data.content, "base64").toString(),
    },
  }
}

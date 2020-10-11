import { Octokit } from "@octokit/core"

export const fetchGithubMarkdown = async ({ file }) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_KEY })

  const res = await octokit.request(
    `GET /repos/mpqmpqm/resume/contents/${file}`,
    {
      owner: "mpqmpqm",
      repo: "resume",
      type: "private",
    }
  )

  return {
    md: Buffer.from(res.data.content, "base64").toString(),
  }
}

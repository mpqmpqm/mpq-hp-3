import { fetchGithubMarkdown } from "../../utils/fetchGithub"

const cover = async (req, res) => {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `Cover.md`,
  })

  res.send(content)
}

export default cover

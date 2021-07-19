import { fetchGithubMarkdown } from "../../utils/fetchGithub"

const cover = async (req, res) => {
  const { content } = await fetchGithubMarkdown({
    repo: `resume`,
    path: `Cover.md`,
  })

  const copyableContent = content
    .replace(/\n/g, " ")
    .replace(/  /g, "\n\n")
    .replace(/\\(.)/g, "$1")

  res.send(`
    <pre>${copyableContent}</pre>
    <script>
      window.addEventListener('DOMContentLoaded', (e) =>
        navigator.clipboard.writeText(document.querySelector('pre').innerText)
      )
    </script>
    `)
}

export default cover

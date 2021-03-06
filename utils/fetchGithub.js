import { Octokit } from "@octokit/core"
import * as matter from "gray-matter"

const octokit = new Octokit({ auth: process.env.GITHUB_KEY })

export const fetchGithubMarkdown = async ({ repo, path }) => {
  try {
    const res = await octokit.request(
      `GET /repos/mpqmpqm/${repo}/contents/${path}`,
      {
        owner: "mpqmpqm",
        repo,
        type: "private",
      }
    )

    return {
      ...matter(Buffer.from(res.data.content, "base64").toString()),
    }
  } catch (err) {
    return null
  }
}

export const fetchGithubOrder = async ({ repo, path }) => {
  const order = await octokit.request(
    `GET /repos/mpqmpqm/${repo}/contents/${path}`,
    {
      owner: "mpqmpqm",
      repo,
      type: "private",
    }
  )
  return {
    order: Buffer.from(order.data.content, "base64").toString().split(`\n`),
  }
}

export const fetchGithubLinks = async ({ repo, path, pathsOnly }) => {
  const fileNames = await octokit.request(
    `GET /repos/mpqmpqm/${repo}/contents/${path}`,
    {
      owner: "mpqmpqm",
      repo,
      type: "private",
    }
  )

  if (pathsOnly)
    return fileNames.data.map(({ name }) => ({
      params: { project: name.replace(`.md`, ``) },
    }))

  const files = await Promise.all(
    fileNames.data.map(async ({ name: filename, path }) => ({
      filename,
      path: path.replace(`.md`, ``),
      file: await fetchGithubMarkdown({ repo, path }),
    }))
  )

  const titles = files.map(
    ({
      filename,
      path,
      file: {
        content,
        data: { title, tags },
      },
    }) => ({
      filename,
      path,
      title,
      tags: tags || null,
      content,
    })
  )

  return titles
}

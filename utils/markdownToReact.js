import React from "react"
import Link from "next/link"
import raw from "rehype-raw"
import rehype2react from "rehype-react"
import markdown from "remark-parse"
import remark2rehype from "remark-rehype"
import unified from "unified"

export const markdownToReact = ({ content }) =>
  unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      components: {
        "next-link": ({
          node: {
            properties: { href },
            children,
          },
        }) => (
          <Link href={href}>
            <a>{children[0].value}</a>
          </Link>
        ),
      },
      passNode: true,
    })
    .processSync(content).result

import Link from "next/link"
import styles from "./PageNav.module.css"

import { useRouter } from "next/router"

export const routes = [
  {
    href: "/",
    text: `Home`,
  },
  {
    href: `/portfolio`,
    text: `Portfolio`,
  },
  {
    href: `/resume`,
    text: `Resume`,
  },
]

const PageNavLink = ({ active, href, text, subPath }) => {
  return (
    <li className={active ? styles.active : null}>
      <Link href={href}>
        <a className={`${styles.anchor}`}>{text}</a>
      </Link>
      {href === `/portfolio` && subPath && ` / ${subPath}`}
    </li>
  )
}

const PageNav = ({ subPath }) => {
  const router = useRouter()
  const { pathname, asPath } = router

  const portfolioSubroute = asPath.includes(`/work/`)
    ? asPath.replace(`/work/`, ``)
    : null

  return (
    <nav className={styles.nav}>
      <ul>
        {routes.map(({ href, text }) => (
          <PageNavLink
            href={href}
            text={text}
            subPath={subPath}
            active={href === `/` ? href === pathname : pathname.includes(href)}
            key={href}
          />
        ))}
      </ul>
    </nav>
  )
}

export default PageNav

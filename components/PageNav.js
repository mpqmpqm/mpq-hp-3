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
    text: `Résumé`,
  },
]

const PageNavLink = ({ active, href, text, subPath }) => {
  const portfolioSubPath = href === `/portfolio` && subPath
  return (
    <li className={active ? styles.active : null} name={href}>
      <Link href={href}>
        <a className={`${styles.anchor}`}>
          {portfolioSubPath && <span>&larr;</span>}
          {text}
        </a>
      </Link>
      {portfolioSubPath && ` / ${subPath}`}
    </li>
  )
}

const PageNav = ({ subPath }) => {
  const router = useRouter()
  const { pathname } = router

  const isActive = (href) =>
    href === `/` ? href === pathname : pathname.includes(href)

  const isProjectPage = pathname.includes(`/portfolio/`)

  return (
    <nav className={styles.nav}>
      <ul className={isProjectPage ? styles.projectPage : null}>
        {routes.map(({ href, text }) => (
          <PageNavLink
            href={href}
            text={text}
            subPath={subPath}
            active={isActive(href)}
            key={href}
          />
        ))}
      </ul>
    </nav>
  )
}

export default PageNav

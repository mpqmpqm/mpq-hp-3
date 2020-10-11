import Link from "next/link"
import styles from "./PageNav.module.css"

import { useRouter } from "next/router"

export const routes = [
  {
    href: "/",
    text: `Home`,
  },
  {
    href: `/work`,
    text: `Portfolio`,
  },
  {
    href: `/resume`,
    text: `Resume`,
  },
]

const portfolioRoutes = {
  "fac-mem": "Faculty and Members",
}

const PageNavLink = ({ active, href, text, path }) => {
  return (
    <li className={active ? styles.active : null}>
      <Link href={href}>
        <a className={`${styles.anchor}`}>{text}</a>
      </Link>
      {path && ` / ${path}`}
    </li>
  )
}

const PageNav = () => {
  const router = useRouter()
  const { pathname, asPath } = router

  console.log(router)

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
            path={
              text === `Portfolio` && portfolioSubroute
                ? `${portfolioRoutes[portfolioSubroute]}`
                : null
            }
            active={href === `/` ? href === pathname : pathname.includes(href)}
            key={href}
          />
        ))}
      </ul>
    </nav>
  )
}

export default PageNav

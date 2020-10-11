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
    text: `Work`,
  },
  {
    href: `/work/resume`,
    text: `Resume`,
  },
  {
    href: `/about`,
    text: "About Moi",
  },
]

const PageNavLink = ({ active, href, text }) => {
  return (
    <li className={active ? styles.active : null}>
      <Link href={href}>
        <a className={`${styles.anchor}`}>{text}</a>
      </Link>
    </li>
  )
}

const PageNav = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <nav className={styles.nav}>
      <ul>
        {routes.map(({ href, text }) => (
          <PageNavLink
            {...{ href, text }}
            active={href === pathname}
            key={href}
          />
        ))}
      </ul>
    </nav>
  )
}

export default PageNav

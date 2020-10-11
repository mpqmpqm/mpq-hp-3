import styles from "./LandingNav.module.css"
import Link from "next/link"

const LandingLink = ({ href, text, i }) => {
  return (
    <li className={styles.listItem}>
      <Link href={href}>
        <a className={styles.anchor} style={{ animationDelay: `${i / 20}s` }}>
          {text}&nbsp;
        </a>
      </Link>
    </li>
  )
}

const LandingNav = ({ routes }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {routes.map(({ href, text }, i) => (
          <LandingLink {...{ href, text, i }} key={href} />
        ))}
      </ul>
    </nav>
  )
}

export default LandingNav

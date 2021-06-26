import styles from "./Resume.module.css"

const Resume = ({ children }) => {
  return (
    <>
      <main className={styles.container}>{children}</main>
    </>
  )
}

export default Resume

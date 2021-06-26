import styles from "./Resume.module.css"
import DownloadButton from "./DownloadButton"

const Resume = ({ children }) => {
  return (
    <>
      <main className={styles.container}>
        <DownloadButton fetchPath="api/resume" />
        {children}
      </main>
    </>
  )
}

export default Resume

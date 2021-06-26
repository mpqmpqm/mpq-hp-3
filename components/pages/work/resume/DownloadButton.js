import { useState } from "react"
import styles from "./DownloadButton.module.css"

const DownloadButton = ({ fetchPath }) => {
  return (
    <a
      className={`${styles.anchor} online-only`}
      title="Download resume"
      href={fetchPath}
      // download
    >
      Download (PDF)
    </a>
  )
}

export default DownloadButton

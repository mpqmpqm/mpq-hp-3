import { useEffect, useState } from "react"
import styles from "./DownloadButton.module.css"
import Spinner from "../../../Spinner"

const DownloadButton = ({ fetchPath }) => {
  const [fetching, setFetching] = useState(false)
  const handleClick = async () => {
    setFetching(1)
    try {
      const blob = await fetch(fetchPath, {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/pdf",
        },
      }).then(async (res) => await res.blob())

      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(blob)
      link.download = "MPQ_Resume.pdf"
      link.click()
    } catch (e) {
      console.error(e)
      alert(
        `Something went wrong. Please try again, or use your browser's native print dialog.`
      )
    }
    setFetching(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fetching) setFetching(2)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [fetching])

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
        disabled={fetching}
      >
        Download
      </button>
      {fetching &&
        [
          <Spinner
            color="var(--bright-purple)"
            size="1em"
            reverse
            key="spinner"
          />,
          <p key="still-working">Still working 😉</p>,
        ].slice(0, fetching)}
    </div>
  )
}

export default DownloadButton

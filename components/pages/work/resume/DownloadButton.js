import { useEffect, useState } from "react"
import styles from "./DownloadButton.module.css"
import Spinner from "../../../Spinner"

const DownloadButton = ({ fetchPath }) => {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(null)
  const handleClick = async () => {
    setFetching(1)
    setError(false)
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
      setError(e)
    }
    setFetching(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fetching) setFetching(fetching + 1)
    }, 2000)
    let timeout2
    if (error)
      setTimeout(() => {
        setError(null)
      }, 5000)
    return () => {
      clearTimeout(timeout)
      clearTimeout(timeout2)
    }
  }, [fetching, error])

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
          <Spinner color="var(--bright-purple)" size="1em" reverse />,
          fetching === 2 ? (
            <p key="still-working">Still working 😉</p>
          ) : (
            <p key="still-working-2">Stiiill working ⏳</p>
          ),
        ].slice(0, fetching)}
      {error && (
        <p key="error" className={styles.error}>
          Something went wrong. Please try again, or try using your browser's
          native print dialog.
        </p>
      )}
    </div>
  )
}

export default DownloadButton

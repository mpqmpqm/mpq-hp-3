import { useEffect, useRef, useState } from "react"

const useSafariNav = (navRef) => {
  const [debug, setDebug] = useState(``)

  const lastWindowHeight = useRef(null)
  const initNavBottom = useRef(null)

  const [nativeUIMinimized, setNativeUIMinimized] = useState(false)

  useEffect(() => {
    lastWindowHeight.current = window.innerHeight

    if (navRef?.current) {
      initNavBottom.current = navRef.current.getBoundingClientRect().bottom
    }

    const listener = () => {
      // const currentBottom = navRef.current.getBoundingClientRect().bottom
      const windowHeightRatio = window.innerHeight / lastWindowHeight.current

      if (
        window.innerHeight > lastWindowHeight.current &&
        windowHeightRatio > 1.15
        // initNavBottom.current < currentBottom
      ) {
        setNativeUIMinimized(true)
      } else {
        if (window.innerHeight <= lastWindowHeight.current) {
          lastWindowHeight.current = window.innerHeight
        }
        setNativeUIMinimized(false)
      }
      setDebug(
        `last: ${lastWindowHeight.current}\ncurrent: ${window.innerHeight}\nratio:${windowHeightRatio}`
      )

      // setWindowHeight(window.innerHeight)
    }

    window.addEventListener(`scroll`, listener)
    return () => window.removeEventListener(`scroll`, listener)
  }, [])

  return {
    nativeUIMinimized,
    debug,
  }
}

export default useSafariNav

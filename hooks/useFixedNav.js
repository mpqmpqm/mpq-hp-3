import { useState, useEffect } from "react"

const useFixedNav = () => {
  const [menuHeight, setMenuHeight] = useState(0)

  useEffect(() => {
    const media = window.matchMedia(`(min-width: 700px)`)

    const listener = () => {
      if (!media.matches) {
        const nav = document.querySelector(`nav`)
        const { height } = nav.getBoundingClientRect()
        setMenuHeight(height * 2)
      } else setMenuHeight(0)
    }

    listener()
    media.addEventListener(`change`, listener)

    return () => {
      media.removeEventListener(`change`, listener)
    }
  }, [])

  return menuHeight
}

export default useFixedNav

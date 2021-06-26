import { useEffect, useState } from "react"

const vh = (qty) => window.innerHeight * 0.01 * qty
const vhRamped = (qty, factor) => vh(qty) ** factor

const useSafariNav = () => {
  useEffect(() => {
    const listener = () => {
      {
        document.documentElement.style.setProperty(
          `--nav-padding-bottom`,
          `${Math.min(45, vhRamped(0.25, 5))}px`
        )
      }
    }
    if (new RegExp(/apple/i).test(navigator.vendor))
      window.addEventListener(`scroll`, listener)
    return () => window.removeEventListener(`scroll`, listener)
  }, [])
}

export default useSafariNav

import PageNav from "./PageNav"
import useFixedNav from "../hooks/useFixedNav"

const Layout = ({ children, subPath }) => {
  const menuHeight = useFixedNav()
  return (
    <>
      <PageNav {...{ subPath }} />
      <div style={{ marginBottom: menuHeight }}>{children}</div>
    </>
  )
}

export default Layout

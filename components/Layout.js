import PageNav from "./PageNav"

const Layout = ({ children, subPath }) => {
  return (
    <>
      <PageNav {...{ subPath }} />
      {children}
    </>
  )
}

export default Layout

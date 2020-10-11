const { default: PageNav } = require("./PageNav")

const Layout = ({ children }) => {
  return (
    <>
      <PageNav />
      {children}
    </>
  )
}

export default Layout

import styles from "./Resume.module.css"

const Resume = ({ children }) => {
  return (
    <>
      <main className={styles.container}>{children}</main>
      <style global jsx>
        {`
          h3 + p.dates {
            margin-top: 0;
          }

          @media print {
            body {
              background-color: white;
            }

            nav {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Resume

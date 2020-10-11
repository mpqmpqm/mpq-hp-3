import styles from "./Resume.module.css"

const Resume = ({ html }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.container}
      />
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

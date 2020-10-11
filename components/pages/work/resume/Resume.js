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
        `}
      </style>
    </>
  )
}

export default Resume

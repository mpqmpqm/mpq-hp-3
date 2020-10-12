import { markdownToReact } from "../../../utils/markdownToReact"
import styles from "./Index.module.css"

const Index = ({ content }) => {
  return (
    <main className={styles.main}>
      <h1>My name is MPQ 👋</h1>
      {markdownToReact({ content })}
    </main>
  )
}

export default Index

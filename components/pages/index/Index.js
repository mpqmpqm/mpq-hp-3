import { markdownToReact } from "../../../utils/markdownToReact"
import styles from "./Index.module.css"

const Index = ({ md }) => {
  return (
    <main className={styles.main}>
      <h1>My name is MPQ 👋</h1>
      {markdownToReact({ md })}
    </main>
  )
}

export default Index

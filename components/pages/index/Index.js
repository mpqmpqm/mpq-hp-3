import { markdownToReact } from "../../../utils/markdownToReact"
import styles from "./Index.module.css"

const Index = ({ content }) => {
  return <main className={styles.main}>{markdownToReact({ content })}</main>
}

export default Index

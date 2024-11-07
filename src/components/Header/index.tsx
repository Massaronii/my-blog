import { Link } from "react-router-dom"
import styles from "./style.module.css"


export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Projetos</Link>
        <Link to="/articles">Artigos</Link>
      </nav>
    </header>
  )
}

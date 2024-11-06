import styles from "./Header.module.css"


export function Header() {
  return (
    <header className={styles.header}>
      <a href="">
        <span>Home</span>
      </a>
      <a href="">
        <span>Projetos</span>
      </a>
    </header>
  )
}

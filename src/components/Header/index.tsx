import styles from "./Header.module.css"


export function Header() {
  return (
    <header className={styles.header}>
      <a href="">
       Home
      </a>
      <a href="">
        Projetos
      </a>
      <a href="">
        Artigos
      </a>
    </header>
  )
}

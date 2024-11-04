import styles from "./Header.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"


export function Header() {
  return (
    <header className={styles.header}>
      <a
        href="https://www.linkedin.com/in/yago-massaroni-a226281ba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={40} color="white" />
      </a>

      <a
        href="https://github.com/Massaronii"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={40} color="white" />{" "}
      </a>

      <a
        href="https://twitter.com/seu_usuario"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={40} color="white" />
      </a>
    </header>
  )
}

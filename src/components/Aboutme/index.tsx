import styles from "./style.module.css"

export function Aboutme() {
  return (
    <aside className={styles.technologies}>
      <strong>Sobre mim:</strong>

      <div>
        <p>
          Sou um Desenvolvedor Fullstack comprometido com o aprendizado contínuo
          e evolução profissional, com mais de 1 ano de experiência
          profissional em tecnologias como Next.js, Node.js, React.js, AWS,
          TypeScript, JavaScript e Python. Atualmente, estou me graduando em
          Análise e Desenvolvimento de Software.
        </p>
      </div>
    </aside>
  )
}

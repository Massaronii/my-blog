import styles from "./Aboutme.module.css"

export function Aboutme() {
  return (
    <aside className={styles.technologies}>
      <strong>Sobre mim:</strong>

      <div>
        <p>
          Me chamo Yago, tenho 21 anos e sou do Rio de Janeiro. Me interessei
          por tecnologia através de amigos e comecei a procurar um curso de
          programação. Encontrei um em outra cidade, comecei e o pessoal era
          muito de boa. Todos se ajudavam, brincávamos após a aula e tudo mais.
          Eu não tinha um computador na época e meu professor me deu um (sou
          muito grato por isso), o que me fez continuar na área. Hoje, estou
          aqui.
        </p>
      </div>
    </aside>
  )
}

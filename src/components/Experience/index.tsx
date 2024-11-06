import styles from "./Experience.module.css"
import { FaWhatsapp } from "react-icons/fa"


export function Experience() {
  return (
    <aside className={styles.sidebar}>
      <br />
      <h3 className={styles.experience}>
        <strong>Experiência profissional</strong>
      </h3>

      <br />
      <div>
        <p>
          <strong>Desenvolvedor de Software </strong>
          <span>SegMedic: out/2023 - atual</span>
        </p>
        <br />
        <strong>Atividades:</strong>
        <p>
          Atuo desde a analise e levantamento de requisitos até desenvolvimento e
          implementação do software.
        </p>
        <br />
        <p>
          <strong>Projetos realizados:</strong>
        </p>
        <p>
          <span>
            Automatização do chatbot, podendo se agendar,confirmar,cancelar e
            reagendar agendamentos de forma automática.
            <br />
            Clique no ícone abaixo
            para testar o software:
          </span>
          <a
            href="https://wa.me/552126665800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </p>
      </div>
    </aside>
  )
}

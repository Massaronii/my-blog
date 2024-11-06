import styles from "./Experience.module.css"


export function Experience() {
  return (
    <main className={styles.experience}>
      <div>
        <h3>
          <strong>Experiência Profissional</strong>
        </h3>
        <br />
        <p>
          <strong>Desenvolvedor de Software</strong>
          <span> | SegMedic: Out/2023 - Atual</span>
        </p>
        <br />
        <strong>Atividades:</strong>
        <p>
          Atuação em todas as etapas de desenvolvimento, desde análise e
          levantamento de requisitos até a implementação e deploy de software.
        </p>
        <br />
        <strong>Realizações:</strong>
        <ul className={styles.projectList}>
          <li>
            <strong>Automatização de Chatbot no WhatsApp:</strong> Desenvolvi um
            chatbot com funcionalidades como verificação de clientes e
            parceiros, agendamento, confirmação e cancelamento de consultas,
            reagendamentos automáticos e notificações para consultas próximas.
          </li>
          <li>
            <strong>Automação de Tarefas Manuais:</strong> Automatizei processos
            como campanhas de satisfação (CSAT, MHS, NPS), gerenciamento de
            no-shows, confirmações de agendamento e lembretes automáticos,
            aumentando a produtividade da equipe.
          </li>
          <li>
            <strong>Melhoria e Manutenção de Sistemas Legados:</strong>{" "}
            Refatorei código legado, organizando e desacoplando serviços para
            melhorar a manutenção e o desempenho do sistema.
          </li>
          <li>
            <strong>Agendamento Online:</strong> Realizei a adição de novas
            funcionalidades e correção de bugs no sistema de agendamento online,
            otimizando a experiência do usuário e o fluxo de atendimento.
          </li>
          <li>
            Além desses projetos, meu papel frequentemente envolve ajustes
            adicionais como: criação de novas features e como a correção de bugs
            não listados, garantindo que o sistema funcione de forma eficiente e
            evolua conforme necessário.
          </li>
        </ul>
      </div>
      <div>
        <p>
          <strong>Vendedor Autônomo</strong>
          <span> | Minhas vendas: Out/2022 - Out/2023</span>
        </p>
        <br />
        <strong>Atividades:</strong>
        <p>
          Gerenciei meu negócio de vendas de informática, cuidando de
          importação, estoque, atendimento, entregas e marketing em plataformas
          como Facebook e OLX. Conciliei com meus estudos, organizando meu tempo
          para atender clientes e oferecer uma experiência de compra positiva,
          sugerindo produtos adicionais e incentivando novas compras.
        </p>
        <br />
      </div>
 
      <div>
        <h3>
          <strong>Formação</strong>
        </h3>
        <br />
        <p>
          <strong>Análise e Desenvolvimento de Sistemas </strong>
          <span>| Centro Universitário União das Américas Descomplica.</span>
          <span>Set/2022 - Dez/2025</span>
          <br />
          <br />
          <p>
            Graduando em Análise e Desenvolvimento de Sistemas, aprendo sobre
            desenvolvimento de software, análise e levantamento de requisitos,
            banco de dados, ciclo de desenvolvimento do software, tipos de
            gestão, gestão de software e segurança. Exploro algoritmos e lógica
            de programação, o que aprimora meu pensamento analítico e minha
            capacidade de resolver problemas. Tenho um foco especial em análise
            e levantamento de requisitos para criar softwares precisos,
            minimizando erros e garantindo que as entregas atendam exatamente às
            necessidades do cliente final, evitando retrabalho.
          </p>
        </p>
      </div>
      <div>
        <p>
          <strong> Curso Practitioner Cloud Aws</strong>
          <span> | Campinho digital: Set/2024 - Nov/2024</span>
        </p>

        <br />
        <span>
          Conclui o programa de treinamento e desenvolvimento de habilidades em
          sala de aula, em tempo integral, sobre fundamentos de TI, nuvem AWS e
          habilidades profissionais. Desenvolvi habilidades fundamentais de TI,
          incluindo: conhecimento de trabalho do sistema operacional Linux e
          scripts de gravação no Python e Shell. Aprendi como aplicar os
          principais serviços da AWS nas áreas de computação, armazenamento e
          rede, incluindo EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS e
          Route 53. Demonstrei fortes habilidades de comunicação verbal e
          escrita, incluindo a capacidade de explicar informações técnicas e
          terminologia para usuários finais não técnicos. Aprendi a configurar,
          monitorar e oferecer suporte ao conjunto de serviços principais da
          AWS.
        </span>
        <br />
      </div>
      <div>
        <p>
          <strong>Curso de Desenvolvedor fullstack</strong>
          <span> | BRASAS: Jan/2024 - Atual</span>
        </p>

        <br />
        <span>
          Desenvolvi uma sólida base em HTML, CSS, JavaScript, React e Node.js,
          e atualmente estou me aprofundando em Next.js, TypeScript e ORM como
          Prisma. Além disso, adquiri conhecimentos sobre bancos de dados e
          infraestrutura como código (IaC) utilizando o framework Serverless, o
          que me permite implementar serviços na nuvem AWS de forma rápida e
          eficiente.
        </span>
        <br />
      </div>
      <div>
        <p>
          <strong>Curso de inglês</strong>
          <span> | rocketseat: Jun/2023 - Jun/2024</span>
        </p>

        <br />
        <span>
          Cursando inglês no Brasas English Course, com foco em aprimorar minha
          conversação e ganhar confiança em situações reais. A metodologia
          prática do curso fortalece minhas habilidades de fala e escuta, me
          preparando para o dia a dia e o ambiente profissional.
        </span>
        <br />
      </div>
    </main>
  )
}

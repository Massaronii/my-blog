import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { PostProps } from "../../utils/types"

import styles from "./Post.module.css"

export function Post({ publishedAt, content }: PostProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <h3>Titulo</h3>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href={line.content
                }>{line.content}</a>
              </p>
            )
          }
        })}
      </div>
    </article>
  )
}

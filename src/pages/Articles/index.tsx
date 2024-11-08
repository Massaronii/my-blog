import { Post } from "../../components/Post";
import {responseArticles} from "../../utils/constantes"

export function Articles() {
  return (
    <main>
      {responseArticles.map((post) => {
        return (
          <Post
            key={post.id}
            content={post.content}
            publishedAt={post.publishedAt}
            id={post.id}
          />
        )
      })}
    </main>
  )
}

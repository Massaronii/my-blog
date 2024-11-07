import { Post } from "../../components/Post";
import {responsePosts} from "../../utils/constantes"

export function Articles() {
  return (
    <main>
      {responsePosts.map((post) => {
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

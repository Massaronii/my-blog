import { Header } from "./components/Header"
import styles from "./App.module.css"

import "./global.css"
import { Post } from "./components/Post"
import { responsePosts } from "./utils/constantes"
import { Experience } from "./components/Experience"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
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
        <Experience />
      </div>
    </div>
  )
}

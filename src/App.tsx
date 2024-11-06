import { Header } from "./components/Header"
import styles from "./App.module.css"

import "./global.css"
import { Experience } from "./components/Experience"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Experience/>
      </div>
    </div>
  )
}

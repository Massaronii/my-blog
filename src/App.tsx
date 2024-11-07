import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Header } from "./components/Header"
import './global.css';
import styles from "./App.module.css"
import { Articles } from "./pages/Articles";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <Router>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  )
}

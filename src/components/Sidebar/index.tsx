import styles from "./Sidebar.module.css"
import { Avatar } from "../Avatar"
import {  FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaEnvelope, FaXTwitter } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import { Technologies } from "../Technologies"
import { Aboutme } from "../Aboutme"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/massaronii.png" />

        <strong>Yago Massaroni</strong>
        <span>Software Developer</span>

        <div>
          <a
            href="https://x.com/devyagoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={25} color="white" />
          </a>

          <a
            href="https://github.com/Massaronii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} color="white" />{" "}
          </a>

          <a
            href="https://www.linkedin.com/in/yago-massaroni-a226281ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} color="white" />
          </a>

          <a
            href="https://wa.me/5521971787414"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="white" />
          </a>

          <a href="mailto:yagosonicmassaroni@gmail.com">
            <FaEnvelope size={30} color="white" />
          </a>
        </div>
      </div>
      <Aboutme/>
      <Technologies />
    </aside>
  )
}

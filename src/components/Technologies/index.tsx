import styles from "./Technologies.module.css"
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa'; 
import { SiTypescript } from 'react-icons/si'; 
import { FaPython } from 'react-icons/fa'; 
import { FaAws } from 'react-icons/fa'; 
import { FaNodeJs } from 'react-icons/fa'; 
import { SiNextdotjs } from 'react-icons/si'; 
import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import { DiDatabase } from "react-icons/di";



export function Technologies() {
  return (
    <aside className={styles.technologies}>
      <strong>Tecnologias:</strong>

      <div>
        <span>
          <FaReact size={30} color="#61dafb" />
        </span>
        <span>
          <FaJsSquare size={30} color="#F7DF1E" />
        </span>

        <span>
          <FaNodeJs size={30} color="#68A063" />
        </span>
        <span>
          <FaAws size={30} color="#FF9900" />
        </span>
        <span>
          <SiTypescript size={30} color="#3178C6" />
        </span>

        <div>
          <span>
            <FaPython size={30} color="#3776AB" />
          </span>
          <span>
            <SiNextdotjs size={30} color="#000000" />
          </span>
          <span>
            <FaHtml5 size={30} color="#e64f0a" />
          </span>
          <span>
            <FaCss3Alt size={30} color="#2a85cf" />
          </span>
          <span>
            <DiDatabase size={32} color="#2a85cf" />
          </span>
        </div>
      </div>
    </aside>
  )
}

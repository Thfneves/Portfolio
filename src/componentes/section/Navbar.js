import styles from "./Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Nav.Link href="#Presentation" className={styles.navbarr}>
            Apresentacao{" "}
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skill">Habilidade </Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Project">Projeto </Nav.Link>
        </li>
      </ul>
      <ul>
        <li>
          <FaInstagram size={30} />
        </li>
        <li>
          <a href="https://github.com/Thfneves">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/thiago-ferreira-neves-7305b0190/">
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

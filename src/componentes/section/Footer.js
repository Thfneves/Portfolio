import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footer}>
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
      <div>
        <p>Thiago_neves1997@hotmail.com</p>
        <p> Thiago F Neves @ 2023</p>
      </div>
    </div>
  );
}

export default Footer;

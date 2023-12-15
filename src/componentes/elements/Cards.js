import styles from "./card.module.css";
import arquitet from "../../Image/portfolio/arquitet.svg";
import ButtonB from "./ButtonB";
import { useState } from "react";
function Card({ img, title, tech, description, repo, site }) {
  const [info, setInfo] = useState(false);

  function InfoOf() {
    setInfo(false);
  }

  function InfoOn() {
    setInfo(true);
  }
  return (
    <div onMouseLeave={InfoOf} className={styles.card}>
      <a onMouseEnter={InfoOn} href={site}>
        <img src={img}></img>
      </a>
      {info === true && (
        <section>
          <h3>{title}</h3>
          <p>
            <strong>Tecnologia</strong> {tech}
          </p>

          <p>{description}</p>
          <ButtonB text="Acesse o repositorio" link={repo}></ButtonB>
        </section>
      )}
    </div>
  );
}

export default Card;

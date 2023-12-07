import styles from "./card.module.css";
import arquitet from "../../Image/portfolio/arquitet.svg";
import ButtonB from "./ButtonB";
function Card({ img, title, tech, description, repo, site }) {
  return (
    <div className={styles.card}>
      <a href={site}>
        <img src={img}></img>
      </a>

      <section>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologia</strong> {tech}
        </p>

        <p>{description}</p>
        <ButtonB text="Acesse o repositorio" link={repo}></ButtonB>
      </section>
    </div>
  );
}

export default Card;

import styles from "./skill.module.css";
import javascript from "../../Image/Skill/JavaScript.svg";
import html from "../../Image/Skill/Html.svg.svg";
import react from "../../Image/Skill/react.svg";
import css from "../../Image/Skill/Css.svg";

function Skill() {
  return (
    <div className={styles.skill} id="Skills">
      <h1> Habilidades</h1>
      <p>Conheca um pouco das minhas habilidades e conhecimentos</p>
      <div>
        <img src={javascript} />
        <img src={html} />
        <img src={react} />
        <img src={css} />
      </div>
    </div>
  );
}

export default Skill;

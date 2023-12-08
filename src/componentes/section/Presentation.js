import styles from "./Presentation.module.css";

import ButtonA from "../elements/ButtonA";
function Presentation() {
  return (
    <div className={styles.Presentation}>
      <h4>
        <strong>Bem vindo ao meu portfolio</strong>
      </h4>
      <h1>Ola me chamo Thiago Neves!</h1>
      <p> Texto introdutorio</p>
      <ButtonA
        link="https://github.com/Thfneves"
        text="Conecte-se Comigo"
      ></ButtonA>
    </div>
  );
}

export default Presentation;

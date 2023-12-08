import ButtonB from "../elements/ButtonB";
import styles from "./Projects.module.css";
import Card from "../elements/Cards";
import arquitet from "../../Image/portfolio/arquitet.svg";
import portfolio from "../../Image/portfolio/portfolio.svg";
import tempo from "../../Image/portfolio/tempo.svg";
import ccxp from "../../Image/portfolio/ccxp.svg";
function Project() {
  return (
    <div className={styles.projects} id="Project">
      <h1> Projetos</h1>
      <Card
        img={arquitet}
        title={"Arquitetura"}
        tech={"HTML, CSS"}
        description={"Desenvolvimento de uma pagina de arquitetura"}
        repo={"https://github.com/Thfneves/Desafio1DNCArquitetura"}
        site={"https://projetos-dnc-arquitetura-para-voce.netlify.app/"}
      ></Card>
      <Card
        img={portfolio}
        title={"portfolio"}
        tech={"HTML, CSS, REACT"}
        description={"Desenvolvimento do portfolio usando React"}
        repo={"https://github.com/Thfneves/Portfolio"}
        site={" https://portfolio-six-mu-88.vercel.app/"}
      ></Card>
      <Card
        img={tempo}
        title={"tempo"}
        tech={"HTML, CSS, Java Script"}
        description={"Construcao de uma pagina que mostra a previsao do tempo"}
        repo={"https://github.com/Thfneves/Projeto-Previsao-Tempo"}
        site={"https://rad-klepon-1ccb24.netlify.app/"}
      ></Card>
      <Card
        img={ccxp}
        title={"tempo"}
        tech={"HTML, CSS, Java Script"}
        description={"Construcao de uma pagina que mostra a previsao do tempo"}
        repo={"https://github.com/Thfneves/DESAFIO-CCXP"}
        site={"https://desafio-ccxp-five.vercel.app/"}
      ></Card>
      <ButtonB
        link="https://github.com/Thfneves"
        text="Acesse meu repositorio"
      ></ButtonB>
    </div>
  );
}

export default Project;

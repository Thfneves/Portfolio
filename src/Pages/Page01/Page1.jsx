import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Page3 from "../Page03/Page3";

const Page1 = () => {
  return (
    <div className="Container1">
      <div className="Container">
        <h1 className="organizacao">Organizacao</h1>
        <h1 className="tarefas">Tarefas</h1>
      </div>
      <Page3></Page3>
    </div>
  );
};

export default Page1;

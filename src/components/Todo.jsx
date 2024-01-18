import React from "react";
import "../components/status.scss";
import Lixo from "../components/lixo.svg";
import Editar from "../components/editar.svg";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.title}</p>
      </div>
      <div className="desespero">
        <input className="checkbox" type="checkbox"></input>
        <button className="complete">
          {" "}
          <img src={Editar} alt="" />
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          {" "}
          <img src={Lixo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Todo;

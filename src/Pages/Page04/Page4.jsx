import "./index.scss";
import Todo from "../../components/Todo";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";

function Page4() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Exercicios",
      description: "Ir para academia fazer exercicios",
      completed: true,
    },
    {
      id: 2,
      title: "Limpar o carro",
      description: "Limpar o carro inteiro, de dentro pra fora",
      completed: false,
    },
    {
      id: 3,
      title: "Banho e tosa",
      description: "Levar o cachorro ao pet shop",
      completed: false,
    },
    {
      id: 4,
      title: "Limpar quarto",
      description: "Limpar toda bagunça que está dentro do quarto",
      completed: true,
    },
    {
      id: 5,
      title: "trabalhar",
      description: "Chegar ao escritorio antes das 20:00",
      completed: true,
    },
    {
      id: 6,
      title: "Ir ao banco",
      description: "Chear ao banco antes das 10:00",
      completed: false,
    },
    {
      id: 7,
      title: "Almoçar",
      description: "Preparar a comida para a janta",
      completed: false,
    },
    {
      id: 8,
      title: "Jogar volei",
      description: "Ir a quadra para jogar volei com os amigos",
      completed: true,
    },
    {
      id: 9,
      title: "Estudar programação",
      description: "Entrar na plataforma dos alunos para estudar",
      completed: false,
    },
    {
      id: 10,
      title: "shopping",
      description: "Fazer algumas compras no shopping",
      completed: true,
    },
  ]);
  // criamos uma funcao, que recebe um texto e uma categoria. na linha 82, e criado um const que AGRUPA TODOS TODO
  //
  const addTodo = (title, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        category,
        isCompleted: false,
      },
    ];
    //acima foi criado meio que um array para identificar os mmockups, abaixo vamos criar um estado dos Todos
    //o newTodos vai atualizar a lista
    setTodos(newTodos);
  };
  //abaixo vamos criar a interacao de confirmar ou excluir a tarefa
  //primeiramente chamamos todos o Todo, apos isso criamos uma variavel nova com uma funcao filter para filtrar
  //e encontrar quais itens sao diferentes dos Id que estao na lista.
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    // todo.id for diferente do ID informado ele retorna a lista.
    //Caso tenha um todo com ID igual ele volta como nullo
    setTodos(filteredTodos);
    // setTodos usado para atualizar a lista.
  };

  //iremos criar uma tarefa de

  return (
    <div className="app">
      <div className="Situacao">
        <div className="tarefa">
          {" "}
          <h1> Tarefa</h1>
        </div>
        <div className="status">
          {" "}
          <h1> Status</h1>
        </div>

        <div className="opcoes">
          {" "}
          <h1> Opcoes</h1>
        </div>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    //apos criar o array e o newTodos, precisamos declarar essas funcoes em algum lugar, no caso coloquei acima jundo to form
    //
  );
}

export default Page4;

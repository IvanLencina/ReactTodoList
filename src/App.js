// import './App.css';

import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Pelar papas", completed: false },
  { text: "Salir a correr", completed: false },
];

function App(props) {
  const [ searchValue, setSearchValue ] = React.useState('');

  return (
    // React.Fragments inserts an Invisible tag in order to avoid using a div.
    <React.Fragment>
      <TodoCounter />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

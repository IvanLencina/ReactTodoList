// import './App.css';

import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Pelar papas', completed: false },
  { text: 'Salir a correr', completed: false }
]

function App(props) {
  return (
    // React.Fragments inserts an Invisible tag in order to avoid using a div.
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        { todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        )) }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

// import './App.css';

import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Pelar papas", completed: false },
  { text: "Salir a correr", completed: false },
];

function App(props) {
  const [ todos, setTodos] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodosCount = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  return (
    // React.Fragments inserts an Invisible tag in order to avoid using a div.
    <React.Fragment>
      <TodoCounter
        completedTodosCount={completedTodosCount}
        totalTodos={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

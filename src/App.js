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
  // Set todos as an app level state because we will be connecting that with other components.
  const [ todos, setTodos] = React.useState(defaultTodos);
  // The same for the searchValue state. It was moved from TodoSearch component because we will performing
  // different actions with that shared state, eg: filtering by input search in the renderer list of todos.
  const [ searchValue, setSearchValue ] = React.useState('');

  // Calculating the completed and total todos to pass them to the TodoCounter component.
  // these properties are being updated every todo state change.
  const completedTodosCount = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filter implementation. If the user didn't write any value, the filtered array will have the default todos state value.
  // if not, it will filter by the searchValue through all the todos by their text property.
  // NOTE that we updated the TodoList children to loop over the searchedTodos array insted the original todos' state.
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

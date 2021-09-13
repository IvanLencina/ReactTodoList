// import './App.css';

import React from "react";

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
        { todos.map(todo => (
          <TodoItem />
        )) }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    
  );
}

export default App;

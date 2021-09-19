import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css';

function TodoCounter() { // Shorthand for props.
  const { completedTodosCount, totalTodos } = React.useContext(TodoContext);

  return (
    <h2 className="todo_counter">Has completado {completedTodosCount} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter };
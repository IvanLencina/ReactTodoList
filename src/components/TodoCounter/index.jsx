import React from "react";
import './TodoCounter.css';

function TodoCounter({ completedTodosCount, totalTodos }) { // Shorthand for props.
  return (
    <h2 className="todo_counter">Has completado {completedTodosCount} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter };
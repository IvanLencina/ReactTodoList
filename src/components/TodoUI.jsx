import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

function TodoUI({
  completedTodosCount,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleTodoCompletion,
  deleteTodo,
}) {
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
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => toggleTodoCompletion(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  )
}

export { TodoUI };
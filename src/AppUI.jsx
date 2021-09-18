import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

function AppUI({
  loading,
  error,
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
        { error && <p>Desespérate, hubo un error...</p> }
        { loading && <p>Estamos cargando, no desesperes...</p> }
        { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }
  
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

export { AppUI };
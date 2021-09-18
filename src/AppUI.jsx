import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./TodoContext";


function AppUI() {
  return (
    // React.Fragments inserts an Invisible tag in order to avoid using a div.
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, toggleTodoCompletion, deleteTodo }) => ( //** {(value) => ( */}
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  )
}

export { AppUI };
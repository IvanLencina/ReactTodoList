import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./TodoContext";


/**
 * Explicacion:
 * 
 * Las props en TodoCounter y TodoSearch ya no son enviadas porque las vamos a consumir desde el TodoContext luego.
 * 
 * Ahora bien, tanto TodoList como TodoItem, dependian de props que ya no se envian al componente AppUI.
 * Para esto, se usa TodoContex.Consumer, y dentro de este vamos a poner el codigo que necesita consumir datos desde el provider.
 * 
 * Dentro de TodoContex.Consumer antes que nada, se puede usar {(value) => { return () } }  o lo que es lo mismo {(value) => ()}.
 * Este value, es el que seteamos como atributo en el provider  ===>  <TodoContext.Provider value={{}}
 * 
 * Pero como es un objeto, podemos destructurarlo directamente obteniendo las RenderProps que necesitamos de ese provider.
 * Entonces simplemente, las traemos y las usamos en donde antes pasabamos props comunes. Ahora son reemplazadas por RenderProps.
 */

function AppUI() {
  return (
    // React.Fragments inserts an Invisible tag in order to avoid using a div.
    <React.Fragment>
      <TodoCounter />
      <TodoSearch/>

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, toggleTodoCompletion, deleteTodo }) => ( //** {(value) => ()} */}
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
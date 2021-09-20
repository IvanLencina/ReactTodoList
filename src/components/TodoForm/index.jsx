import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  // Estado para almacenar el value del textarea donde creamos la tarea.
  // se crea aca nomas y no en el context ya que es un pequeño estado que solo se usara en este TodoForm component. (no necesita ser compartido).
  const [ newTodoValue, setNewTodoValue ] = React.useState('');

  // Traemos addTodo del context para agregar todos al guardar.
  // Traemos setIsModalOpened para cambiar el estado de la modal al hacer un submit o cancelar desde el formulario.
  const {
    addTodo,
    setIsModalOpened,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setIsModalOpened(false);
  }

  const onSubmit = (event) => {
    event.preventDefault(); // By default, a submit reloads the page. We are preventing this.

    addTodo(newTodoValue); // Calling addTodo from the Context.

    setIsModalOpened(false);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Crea un TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>

      <div>
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  )
}

export  { TodoForm };
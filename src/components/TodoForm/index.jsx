import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const {
    saveTodo
  } = React.useContext(TodoContext);

  const onCancel = () => {
    //TODO
  }

  const onSubmit = () => {
    //TODO
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Crea un TODO</label>
      <textarea 
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
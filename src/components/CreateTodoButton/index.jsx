import React from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { isModalOpened, setIsModalOpened } = React.useContext(TodoContext);

  const onButtonClick = () => {
    // setIsModalOpened(prevState => !prevState); // Ejemplo con prevState (setState admite una funcion que devuelve el estado previo).
    setIsModalOpened(!isModalOpened);
  }

  return (
    <button 
    className="create_todo_button"
    onClick={() => onButtonClick()}>
      +
    </button>
  );
}

export { CreateTodoButton };
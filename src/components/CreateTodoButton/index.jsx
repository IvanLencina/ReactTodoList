import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setIsModalOpened }) {
  const onButtonClick = () => {
    setIsModalOpened(true);
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
import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onButtonClick = (msg) => {
    alert(msg);
  }

  return (
    <button 
    className="create_todo_button"
    onClick={() => onButtonClick('Aqui se abrira una modal')}>
      +
    </button>
  );
}

export { CreateTodoButton };
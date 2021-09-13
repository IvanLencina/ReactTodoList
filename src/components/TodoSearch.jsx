import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <input 
      className="todo_search"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

import React from "react";
import "./TodoSearch.css";

// Specific props declared replacing the useSate in order to expect
// that information from other component. The state will be handled by a higher component.
function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);

    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="todo_search"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

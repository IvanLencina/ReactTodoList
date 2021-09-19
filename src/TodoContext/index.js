import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * createContext devuelve dos objetos. Provider y Consumer.
 * Podriamos llamarlo TodoContext y despues hacer TodoContext.Provider y TodoContext.Consumer
 */
// const { Provider, Consumer } = React.createContext();
const TodoContext = React.createContext();

/**
 * Creamos un componente que nos sirva de atajo a ese TodoContext.Provider
 */
function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  // The same for the searchValue state. It was moved from TodoSearch component because we will be performing
  // different actions with that shared state, eg: filtering by input search in the renderer list of todos.
  const [ searchValue, setSearchValue ] = React.useState('');

  // Calculating the completed and total todos to pass them to the TodoCounter component.
  // these properties are being updated every todo state change.
  const completedTodosCount = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filter implementation. If the user didn't write any value, the filtered array will have the default todos state value.
  // if not, it will filter by the searchValue through all the todos by their text property.
  // NOTE that we updated the TodoList children to loop over the searchedTodos array insted the original todos' state.
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const toggleTodoCompletion = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);

    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodosCount,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleTodoCompletion,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };
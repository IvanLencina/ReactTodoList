import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo_item">
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>
        √
      </span>
      <p className={`todo_item-p ${props.completed && 'todo_item-p--complete'}`}>
        {props.text}
      </p>
      <span className="icon icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
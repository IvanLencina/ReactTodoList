import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste el TODO: ' + props.text);
  }

  const onDelete = () => {
    alert('Borraste el TODO: ' + props.text);
  }

  return (
    <li className="todo_item">
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`} onClick={onComplete}>
        √
      </span>
      <p className={`todo_item-p ${props.completed && 'todo_item-p--complete'}`}>
        {props.text}
      </p>
      <span className="icon icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {
  const onComplete = () => {
    props.onComplete();
  }

  const onDelete = () => {
    props.onDelete();
  }

  return (
    <li className="todo_item">
      <CompleteIcon
        completed={props.completed}
        onComplete={onComplete}
      />
      <p className={`todo_item-p ${props.completed && 'todo_item-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  );
}

export { TodoItem };
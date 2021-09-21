import React from "react";
import './TodoIcon.css';
import { ReactComponent as DeleteSVG } from './remove.svg';
import { ReactComponent as CheckSVG } from './check.svg';

function TodoIcon({ type, color='gray', onClick }) {
  // Primera version de iconTypes, sin ser funciones con parametros
  const iconTypes = {
    'check': (
      <CheckSVG className='Icon-svg Icon-svg--check' fill={color}/>
    ),
    'delete': (
      <DeleteSVG className='Icon-svg Icon-svg--delete' fill={color}/>
    )
  }

  // We can define icon types without Typesctript that have JSX associated or functions that return JSX.
  // const iconTypes = {
  //   'check': color => (
  //     <CheckSVG className='Icon-svg Icon-svg--check' fill={color}/>
  //   ),
  //   'delete': color => (
  //     <DeleteSVG className='Icon-svg Icon-svg--delete' fill={color}/>
  //   ),
  // }

  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}>
      { /** And then, we can render diferent icons defined in the iconTypes object */}
      { iconTypes[type] }
    </span>
  )
}

export { TodoIcon };
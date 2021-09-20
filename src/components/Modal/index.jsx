import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

/**
 * Modal fue pensada para mostrar un children. Este puede ser un componente, o cualquier tag html. 
 * 
 * Usamos ReactDOM.createPortal(). Este funciona parecido al render comun, pero nos permite meter codigo react de nuestra app corriendo en react,
 * fuera de ese contexto en si, dentro de una etiqueta a parte que le definamos como segundo parametro.
 */
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
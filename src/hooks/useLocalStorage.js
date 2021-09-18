import { useState, useEffect } from "react";

/**
 * Como se usa el hook useEffect:
 * 
 * Si no le pasamos ningun parametro, se ejecuta cada vez que actualizamos el estado.
 * Si le pasamos un array vacio [] se ejecuta solamente antes de renderizar la primera vez y despues ya no.
 * Si le pasamos una referencia, escucha eso. Por ejemplo le pasamos totalTodos y cada vez que haya cambios en totalTodos, se va a ejecutar.
 */

/**
 * Este Hook simula una llamada a una api. Por eso tiene un timeout.
 * 
 * Se usa useEffect para encapsular esta simulacion. Lo que hacemos es crear un estado loading en true y que luego de 1s, corra el codigo para obtener los datos
 * y setee este estado en false.
 * 
 * Encerramos toda la logica del timeout en un try catch para atrapar errores y asi poder mostrar si hubo un error. Para esto tambien creamos un estado error que
 * actualizamos en el catch.
 * 
 * La funcion saveItem permanece afuera del useEffect porque no va a ser ejecutada por el useEffect automaticamente. Es un funcion que llamamos cuando lo deseamos.
 * 
 * Por ultimo, al necesitar devolver mas datos que el estandar en un hook (2 parametros), se devuelve un objeto por convencion de React.
 * 
 * RESUMEN DE FUNCIONAMIENTO:
 * Inicializamos el estado item con un valor inicial.
 * Una vez ejecutado el timeout, obtiene los datos de localstorage, osea nuestra "api", para luego
 * actualizar ese estado item.
 */

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  // Esta funcion no esta en nuestro effect porque no la vamos a ejecutar por defecto.
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));

      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

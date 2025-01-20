import PropTypes from "prop-types"; //npm install prop-types --save
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //
  const [inputValue, setInputValue] = useState("");

  const onIputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onIputChange}
      />
    </form>
  );
};

/**
 * AddCategory = ({ onNewCategory }) recibimos la funcion onNewCategory ahi nos vamos a llevar el valor del input
 * inputValue: es el valor del input=text que se actualiza cada vez que presionamos uan tecla
 * El form tiene un onSubmit que a su vez ejecuta una funcion onSubmit() cada vez que se presiona enter sobre el input
 * Cada vez que se presiona una tecla sobre el input se ejecuta la funcion onIputChange() esta funcion guarda el valor del input
 * la constante "inputValue" se asignara a la funcion onNewCategory(inputValue) que se ejecutara en el GifExpertApp
 * si el valor de entrada en el input es de 1 caracter o menos no avanza la funcion, se sale por medio del "return"
 * Si tiene 2 o mas caracteres la funcion avanza y se le asigna "inputValue" a la funcion onNewCategory(inputValue)
 * Despues de presionar enter sobre el input entra el setInputValue(""); que borra lo escrito en el "input"
 */

import { useState } from "react";
//Esto hace referencia al archivo index.js que se encuentra en /components/ este es un archivo de barril,
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  //ARRAY CANCIONES
  const [categories, setCategories] = useState(['Amy winehouse','Shirley manson','Bob Esponja']);
  const [status, setStatus] = useState(true);

  const onAddCategory = (newCategory) => {
    //
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>

      <div className="d-flex align-items-center flex-column mb-3">

        <div><h1>Gif-Expert_App</h1></div>
        <div><button onClick={e => setStatus(!status)}>PRESS</button></div>
        <div style={{ fontSize: "22px" }}>Status: {status ? "ON" : "OFF"}</div>        
      </div>

      <div className="d-flex flex-column mb-3 container_input">
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      </div>
            
{status &&
      <div className="">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
}

    </>
  );
};

/*
Categories: Es un array con metodo useSate

<AddCategory onNewCategory={(value) => onAddCategory(value)} />: Nuestro componente devuelve un valor por medio de sus propiedades
Este componente se trata de un input text

<ol><li></li></ol>: Por medio de una lista ordenada y un map() listamos el array, agregamos un key con numeros consecutivos

setCategories([newCategory, ...categories]); Actualiza el array llamado "categories"

El componente tiene como propiedad "onNewCategory" que a su vez lleva una funcion llamada onAddCategory(value)

El valor de "onNewCategory" que nos sirve para ejecutar la funcion "onAddCategory()" se obtiene en el addCategory
"onAddCategory": recibe el valor del input y lo agrega al array categories[], poniendo primero el valor nuevo y desestructurando 
el array viejo, creando uno nuevo que se asignara al categories[]

if (categories.includes(newCategory)) {return;} Esto no permite que se guarde una categoria ya existente

categories.map(): El elemento que se intera, es el elemento que lleva la "key"
*/

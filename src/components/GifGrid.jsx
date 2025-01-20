import { LoadingMessage } from "./LoadingMessage";
import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs ( category );//hook
    
  return (
    <>
    <div className="d-flex align-items-center flex-column mb-3">
      
      <h2>{category}</h2>       
      <LoadingMessage isLoading={isLoading}/>
            
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>      
      
      <div style={{ borderTop: "2px solid rgb(92, 93, 93) ", width: "85%" }}></div>
    </div>


    </>
  );
};

/**
 * Al crear un componente comenzamos con "rafc + tab" para crear la funcion de flecha con todos los elementos
 * Este componente sirve unicamente para devolver una categoria organizada como nosotros queramos
 * https://tenor.googleapis.com/v2/$simpsons?q=excited&key=AIzaSyBjW04yC4O0b7pV6NDzpVj4lWZN4UbYdA8&client_key=my_test_app&limit=1
 * const gifs: creamos un objeto nuevo, (img) es el objeto que le pasamos a la funcion y viene de "results"
 * "useEffect": Dispara efectos secundarios, en este caso utilizamos useEffect para que solo una vez se ejecute la funcion
 * de getGifs(category)
 * <GifItem key={image.id} image={image} />: Al poner image={image} estamos mandando
 * el objeto en la propiedad "image"
 * {...image}: Esparse las propiedades del objeto y ya no es necesario mandarlas una por una
 * cada propiedad del objeto se convierte en una propiedad del componente
 */

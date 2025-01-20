//rafc + tab
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImage = async () => {
        const newImages = await getGifs(category);
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));//Esperar...1segundo
        setImages(newImages);
        setIsLoading(false);    }
    
    useEffect(() => {
      getImage();    
    }, []);


  return {
    images: images,
    isLoading: isLoading
  }
}




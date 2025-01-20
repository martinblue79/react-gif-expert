export const getGifs = async (category) => {
  
  // TENOR
  const API_KEY = "AIzaSyBjW04yC4O0b7pV6NDzpVj4lWZN4UbYdA8";
  const num = 5;
  const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${API_KEY}&client_key=GifExper&limit=${num}`;
  //https://tenor.googleapis.com/v2/search?q=pollo&key=AIzaSyBjW04yC4O0b7pV6NDzpVj4lWZN4UbYdA8&client_key=GifExper&limit=5

  const query = await fetch(url);
  const { results } = await query.json();

  //creamos un nuevo objeto
  const gifs = results.map((img) => ({
    id: img.id,
    description: img.content_description,
    url: img.media_formats.mediumgif.url,
  }));  

  //console.log(gifs);
  return gifs;
};

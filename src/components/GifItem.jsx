export const GifItem = ({ url, description, id }) => {
  // console.log({ description, url, id });
  return (
    <div className="card">
      <img src={url} alt="Error!" />
      
      <p> {description} </p>
          ID:{id} <br/>

    </div>
  );
};

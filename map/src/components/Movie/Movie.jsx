import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="film-wrapper">
      <h1>{props.item.title}</h1>
      <p>{props.item.year}</p>
      <p>{props.item.director}</p>
      <p>{props.item.duration}</p>
      <div className="genre-wrapper">
        {props.item.genre.map((everyGenre, index) => (
          <p key={index}>{everyGenre}</p>
        ))}
      </div>
      <h2>{props.item.rate}</h2>
    </div>
  );
};

export default Movie;

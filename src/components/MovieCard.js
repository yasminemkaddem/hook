import Rating from "./Rating";

const MovieCard = ({ title, description, posterUrl, rating }) => {
    return (
      <div className="container">
        <div className="movie_card">
          <img src={posterUrl} alt={title} className="poster" />
          <div className="movie_details">
            <h3>{title}</h3>
          </div>
          <div className="synopsis">
            <h3>Synopsis :</h3>
            <p>{description}</p>
            <h3>Rating :</h3>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  
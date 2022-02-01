import { list } from "../list";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie_list">
      {list.map((movie) => (
        <MovieCard
          className="movies"
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
          posterUrl={movie.posterUrl}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;


import Header from "./components/Header";
import "./styles.css";
import MovieList from "./components/MovieList";
import React, { useState } from "react";
import { list } from "../src/list";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(MovieList);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value) {
      const results = list.filter((title) =>
        title.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setFiltered(results);
      console.log("results: ", results);
    } else {
      setFiltered(filtered);
    }
  };
  const handleAddMovie = (id, title, description, posterUrl) => {
    setMovies([
      ...list,
      {
        id: MovieList.length + 1,
        title: title,
        description: description,
        posterUrl: posterUrl
      }
    ]);
  };

  return (
    <div>
      <div className="recherche">
        <Header
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <MovieList movies={MovieList} />
        <AddMovie movies={movies} AddMovie={handleAddMovie} />
      </div>
    </div>
  );
};

export default App;


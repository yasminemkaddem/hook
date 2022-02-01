import { useState, useCallback } from "react";

const AddMovie = ({ AddMovie }) => {
  const [title, setTitle] = useState({
    new_player: ""
  });
  const [description, setDescription] = useState({
    new_description: ""
  });
  const [posterurl, setPosterurl] = useState({
    new_posterurl: ""
  });

  const handleValueChange = useCallback((event) => {
    setTitle({
      [event.target.name]: event.target.value
    });
    setDescription({
      [event.target.name]: event.target.value
    });
    setPosterurl({
      [event.target.name]: event.target.value
    });
  }, []);
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (title.new_movie && title.new_movie !== " ") {
        AddMovie(title.new_movie);
        setTitle({ new_movie: "" });
        AddMovie(description.new_movie);
        setDescription({ new_description: "" });
        AddMovie(posterurl.new_movie);
        setPosterurl({ new_posterurl: "" });
      }
    },
    [AddMovie, title, description, posterurl]
  );

  return (
    <form className="contenant">
      <label htmlFor="title">Title : </label>
      <input
        className="contenu"
        placeholder="Entre a movie's name"
        onChange={handleValueChange}
        title={title.new_movie}
      />
      <label htmlFor="title">description : </label>
      <input
        className="contenu"
        placeholder="Entre a description "
        onChange={handleValueChange}
        title={description.new_movie}
      />
      <label htmlFor="title">posterurl : </label>
      <input
        className="contenu"
        placeholder="Entre a posterurl "
        onChange={handleValueChange}
        title={posterurl.new_movie}
      />
      <input
        class="sub"
        type="submit"
        value="Add movie"
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default AddMovie;

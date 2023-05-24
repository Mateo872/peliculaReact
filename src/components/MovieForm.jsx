import { useState } from "react";

function MovieForm({ handleMovieSubmit }) {
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    genre: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleMovieSubmit(movie);
    setMovie({
      name: "",
      description: "",
      genre: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Título:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={movie.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción:
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={movie.description}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          Género:
        </label>
        <select
          className="form-select"
          id="genre"
          name="genre"
          value={movie.genre}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default MovieForm;

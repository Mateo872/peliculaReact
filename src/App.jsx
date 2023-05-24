import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieForm from "./components/MovieForm";
import MovieCard from "./components/MovieCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([]);

  function handleMovieSubmit(movie) {
    const movieWithId = { ...movie, id: uuidv4() };
    const storedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    storedMovies.push(movieWithId);
    localStorage.setItem("movies", JSON.stringify(storedMovies));
    setMovies([...movies, movieWithId]);
  }

  function handleMovieDelete(movieId) {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== movieId);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  }

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    setMovies(storedMovies);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Películas</h1>
      <MovieForm handleMovieSubmit={handleMovieSubmit} />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} onDelete={handleMovieDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

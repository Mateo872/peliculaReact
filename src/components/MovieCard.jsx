function MovieCard({ movie, onDelete }) {
  const truncatedTitle =
    movie.name.length > 25 ? `${movie.name.slice(0, 25)}...` : movie.name;
  const truncatedDescription =
    movie.description.length > 25
      ? `${movie.description.slice(0, 25)}...`
      : movie.description;

  function handleDelete() {
    onDelete(movie.id);
  }

  return (
    <div className="card mb-3" style={{ width: "22rem", height: "12rem" }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-text mb-0">
          <strong>Título:</strong>{" "}
          <span style={{ opacity: 0.7 }}>{truncatedTitle}</span>
        </p>
        <p className="card-text mb-0">
          <strong>Descripción:</strong>{" "}
          <span style={{ opacity: 0.7 }}>{truncatedDescription}</span>
        </p>
        <p className="card-text mb-0">
          <strong>Género:</strong>{" "}
          <span style={{ opacity: 0.7 }}>{movie.genre}</span>
        </p>
        <button className="btn btn-danger mt-2" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

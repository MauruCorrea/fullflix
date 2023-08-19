export default function MovieItem({ movie }) {
  return (
    <li>
      <h3>{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        id={movie.id}
        width={'200px'}
      />
    </li>
  );
}

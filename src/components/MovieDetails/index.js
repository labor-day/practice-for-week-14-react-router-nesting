import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  const choice = movies.find((movie) => {
    return movie.id == movieId;
  });

  return (
    <div className="comp purple">
      <h1>{choice.title}</h1>
      <p>{choice.description}</p>
    </div>
  );
}

export default MovieDetails;

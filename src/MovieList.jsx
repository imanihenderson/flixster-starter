import "./MovieList.css";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ movies }) => {
  // const filteredMovies = movies.filter(movie =>
  //     movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
  //  );

  return (
    <section className="MovieList">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          Title={movie.original_title}
          PosterImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          VoteAverage={movie.vote_average}
        />
      ))}
    </section>
  );
};

export default MovieList;

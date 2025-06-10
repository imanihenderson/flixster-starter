import './MovieList.css'
import MovieCard from './MovieCard.jsx'

const MovieList = ({movies}) => {
    return (
        <div className="MovieList">
            {movies.map((movie) => (
                <MovieCard 
            Title={movie.original_title} 
            PosterImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            VoteAverage = {movie.vote_average}
            />
            ))}   
        </div>
       
    )
}

export default MovieList;


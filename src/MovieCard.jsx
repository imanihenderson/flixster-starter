import './MovieCard.css'

const MovieCard = ({Title, PosterImg, VoteAverage}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${PosterImg}`;
    return (
        <div className="MovieCard">
            <h2 className="MovieTitle">{Title}</h2>
            <img src={imgUrl} alt={Title} className="PosterImg"/>
            <div className="movie-info">
            <h3 className="VoteAverage">{VoteAverage}</h3>
            </div>
        </div>
    )
}


export default MovieCard;
import "./MovieCard.css";
import Modal from "./Modal.jsx";
import { useState } from "react";

const MovieCard = ({
  Title,
  PosterImg,
  VoteAverage,
  Overview,
  Release,
  Genre,
  trailerKey,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const imgUrl = `https://image.tmdb.org/t/p/w500${PosterImg}`;
  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleFavoriteToggle = () => setIsFavorite(!isFavorite);
  const handleWatchedToggle = () => setIsWatched(!isWatched);

  return (
    <section className="MovieCard">
      <img
        src={imgUrl}
        alt={Title}
        className="PosterImg"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />
      <section className="movie-info">
        <h2 className="MovieTitle">{Title}</h2>
        <h3 className="VoteAverage">Vote Average: {VoteAverage}</h3>
        <div className="button-container">
          <button
            className={`movie-button favorite-button ${
              isFavorite ? "active" : ""
            }`} // differentiate between active button and non active button
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? "Favorite" : "Favorite"}
          </button>
          <button
            className={`movie-button watched-button ${
              isWatched ? "active" : ""
            }`}
            onClick={handleWatchedToggle}
          >
            {isWatched ? "Watched" : "Watch"}
          </button>
        </div>
      </section>

      {isModalOpen && (
        <Modal
          PosterImg={imgUrl}
          Title={Title}
          VoteAverage={VoteAverage}
          onClose={handleClose}
          trailerKey={trailerKey}
          Overview={Overview}
          Release={Release}
          Genre={Genre}
        />
      )}
    </section>
  );
};

export default MovieCard;

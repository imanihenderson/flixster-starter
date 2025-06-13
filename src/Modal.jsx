import "./Modal.css";

const Modal = ({ Title, VoteAverage, onClose, PosterImg, Release, Genre, Overview, trailerKey}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${PosterImg}`;
  const trailerUrl= `https://www.youtube.com/embed/${trailerKey}`;
  return (
    <section className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <section className="modal-body">
        <img src={imgUrl} alt={Title} className="ModalImg" />
        <h2 className="movie-titles">{Title}</h2>
        <p className="movie-vote">Rating: {VoteAverage}</p>
        <p className="ReleaseDate">Release Date: {Release}</p>
        <p className="Genre">Genre: {Genre}</p>
        <p className="Overview"> Overview: {Overview}</p>
        {/* {trailerKey && ( */}
            <iframe src={trailerUrl} className="movie-videos"
        
        />

        {/* // )} */}
        
      </section>
    </section>
  );
};

export default Modal;

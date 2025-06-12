import "./Modal.css";

const Modal = ({ Title, VoteAverage, onClose, Videos }) => {
  return (
    <section className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <section className="modal-body">
        <video src={Videos} controls className="movie-videos"> </video>
        <h2 className="movie-titles">{Title}</h2>
        <p className="movie-vote">Rating: {VoteAverage}</p>
      </section>
    </section>
  );
};

export default Modal;

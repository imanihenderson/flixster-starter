import "./MovieList.css";
import MovieCard from "./MovieCard.jsx";
import { useEffect, useState } from "react";

const MovieList = ({ movies }) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      const newVideos = {}; // set each movie id to their videos
      await Promise.all(
        movies.map(async (movie) => {
          const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjQ5MTgzZThhZmM0N2VlYmJmOGM3NzFmMjEyNjU1MCIsIm5iZiI6MTc0OTUwNTUwNi4wNzAwMDAyLCJzdWIiOiI2ODQ3NTVlMmEwYzZlNTA0MWViYjM0YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8BRV9JsadnEMt_aqUXwBbrpKazNWHHGjKsU7G6eb9W0",
            },
          };
          try {
            const res = await fetch(url, options);
            const json = await res.json();
            const trailer = json.results.find(
              (vid) => vid.type === "Trailer" && vid.site === "YouTube"
            );
            newVideos[movie.id] = trailer?.key || null;
            console.log(json);
          } catch (err) {
            console.error(err);
          }
        })
      );

      setVideoData(newVideos);
    };
    getVideos();
  }, [movies]);

  return (
    <section className="MovieList">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          Title={movie.original_title}
          PosterImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          VoteAverage={movie.vote_average}
          Overview={movie.overview}
          Release={movie.release_date}
          Genre={movie.genre_ids}
          trailerKey={videoData[movie.id]}
        />
      ))}
    </section>
  );
};

export default MovieList;

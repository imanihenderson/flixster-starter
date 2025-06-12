import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myData, setMyData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      console.log("inside fetch Data");
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
        setMyData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // 1. create use search API fetch

  useEffect(() => {
    if (!searchTerm) return; // don't search if empty

    const handleSearch = async () => {
      // search api call
      console.log("Grabbing search data");
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchTerm
      )}&include_adult=false&language=en-US&primary_release_year=2025&page=1&year=2025';`;
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
        setMyData(json);
      } catch (err) {
        console.error(err);
      }
    };
    // calls function for handling search to change UI
    handleSearch();
  }, [searchTerm]);

  const handleClear = () => {
    window.location.reload();
  };


  

  const SortByAlpha = () => {
    // creating new dataset in brackets to avoid altering main data
    const AlphaSorted = [...myData.results].sort((a, b) =>
      a.original_title.localeCompare(b.original_title)
    );
    setMyData({ ...myData, results: AlphaSorted });
  };

  const SortByRelease = () => {
    const ReleaseSorted = [...myData.results].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    setMyData({ ...myData, results: ReleaseSorted });
  };

  const SortByVote = () => {
    const VoteSorted = [...myData.results].sort(
      (a, b) => b.vote_average - a.vote_average // descending ordder 
    );
    setMyData({ ...myData, results: VoteSorted });
  };

    return (
      <section className="App">
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onClear={handleClear}
          alphaSort={SortByAlpha}
          releaseSort={SortByRelease}
          voteSort={SortByVote}
        />
        <MovieList movies={myData ? myData.results : []} />
      </section>
    );
  };


export default App;

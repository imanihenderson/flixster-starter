import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import NavBar from "./NavBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myData, setMyData] = useState({ results: [] });
  const [customPage, setCustomPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      console.log("inside fetch Data");
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${customPage}`;
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
        console.log(json.results)

        if (customPage === 1) {
          // if first page, set the data as before
          setMyData(json);
        } else {
          // if prev page append the new results to the existing ones
          setMyData(prevData => ({
            ...json,
            results: [...prevData.results, ...json.results]
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData(customPage);
  }, [customPage]);

  // 1. create use search API fetch

  useEffect(() => {
    if (!searchTerm) return; // don't search if empty

    const handleSearch = async () => {
      // search api call
      console.log("Grabbing search data");
      // const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      //   searchTerm
      // )}&include_adult=false&language=en-US&primary_release_year=2025&page=1&year=2025';`;
      const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
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
    // creating new dataset in brackets to avoid altering
    const AlphaSorted = [...myData.results].sort((a, b) =>
      a.original_title.localeCompare(b.original_title)
    );
    // creates new object with updated results propert, and assigns to myData
    console.log('After sorting:', AlphaSorted)
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
      (a, b) => b.vote_average - a.vote_average // descending order
    );
    setMyData({ ...myData, results: VoteSorted });
  };

  //  updates page number 
  const loadMore =() => {
    if (customPage < myData.total_pages) {
      setCustomPage((prevPage => prevPage + 1));
    }





  }

    return (
      <section className="App">
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onClear={handleClear}
          SortByAlpha={() => SortByAlpha()}
          SortByRelease={() => SortByRelease()}
          SortByVote={() => SortByVote()}
          ResetPage={() => handleClear()}
        />
        
        <MovieList movies={myData ? myData.results : []} />
        <section className="Footer">
          <button onClick={loadMore} disabled={customPage >= myData.total_pages} className="LoadButton">
        Load More
          </button>

        </section>

      </section>
    );
  };


export default App;

import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './MovieList';
//import SearchBar from './SearchBar';
import NavBar from './NavBar'


const App = () => {
  const [myData, setMyData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log("inside fetch Data")
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjQ5MTgzZThhZmM0N2VlYmJmOGM3NzFmMjEyNjU1MCIsIm5iZiI6MTc0OTUwNTUwNi4wNzAwMDAyLCJzdWIiOiI2ODQ3NTVlMmEwYzZlNTA0MWViYjM0YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8BRV9JsadnEMt_aqUXwBbrpKazNWHHGjKsU7G6eb9W0'
    }
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

  if (!myData) return <div>Loading..</div>;

  // const firstMovie = myData.results[0];
  
  
  return (
    <section className="App">
      <NavBar></NavBar>
      {myData.results.map(movie => (
        <MovieList movies={myData.results}
      />
      ))}
      
      
    </section>
  )
}



export default App;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Row from '../Row';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRatedMovies);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="movies">
      <h2>Movies</h2>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} isLargeRow />
    </div>
  );
}

export default Movies;
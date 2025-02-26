import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Row from '../Row';

function TVShows() {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTVShows);
      setTVShows(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="tv-shows">
      <h2>TV Shows</h2>
      <Row title="TV Shows" fetchUrl={requests.fetchTVShows} isLargeRow />
    </div>
  );
}

export default TVShows;
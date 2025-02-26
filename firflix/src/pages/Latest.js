import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Row from '../Row';

function Latest() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setLatest(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="latest">
      {/* <h2>Latest</h2> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
    </div>
  );
}

export default Latest;
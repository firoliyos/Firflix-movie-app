import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Row from '../Row';

function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMyList(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="my-list">
      <h2>My List</h2>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    </div>
  );
}

export default MyList;
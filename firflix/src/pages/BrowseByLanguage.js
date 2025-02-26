import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import Row from '../Row';

function BrowseByLanguage() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchDocumentaries);
      setLanguages(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="browse-by-language">
      {/* <h2>Browse by Language</h2> */}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

export default BrowseByLanguage;
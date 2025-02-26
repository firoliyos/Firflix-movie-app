import React from 'react';
import Row from '../Row';
import requests from '../requests';

function Home() {
  return (
    <div className="home">
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

export default Home;
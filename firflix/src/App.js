import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import Footer from './components/Footer/Footer';
import Nav from './Nav';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Latest from './pages/Latest';
import MyList from './pages/MyList';
import BrowseByLanguage from './pages/BrowseByLanguage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/browse-by-language" element={<BrowseByLanguage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

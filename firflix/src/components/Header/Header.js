import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import NetflixLogo from '../../assets/images/Netflix_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header_outer_container ${show && 'nav_black'}`}>
      <div className="header_container">
        <div className="header_left">
          <NavLink to="/">
            <img
              className="header_logo"
              src={NetflixLogo}
              alt="Netflix Logo"
              width="100"
            />
          </NavLink>
          <ul className={`header_nav ${menuOpen && 'open'}`}>
            <li><NavLink to="/tv-shows" onClick={handleLinkClick} activeClassName="active">TV Shows</NavLink></li>
            <li><NavLink to="/movies" onClick={handleLinkClick} activeClassName="active">Movies</NavLink></li>
            <li><NavLink to="/latest" onClick={handleLinkClick} activeClassName="active">Latest</NavLink></li>
            <li><NavLink to="/my-list" onClick={handleLinkClick} activeClassName="active">My List</NavLink></li>
            <li><NavLink to="/browse-by-language" onClick={handleLinkClick} activeClassName="active">Browse by Language</NavLink></li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
        <div className="header_menu_icon" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <DehazeIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
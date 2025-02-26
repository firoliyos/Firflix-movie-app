import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className={`header_outer_container ${show && 'nav_black'}`}>
      <div className="header_container">
        <div className="header_left">
          <Link to="/">
            <img
              className="header_logo"
              src={NetflixLogo}
              alt="Netflix Logo"
              width="100"
            />
          </Link>
          <ul className={`header_nav ${menuOpen && 'open'}`}>
            <li><Link to="/tv-shows">TV Shows</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/latest">Latest</Link></li>
            <li><Link to="/my-list">My List</Link></li>
            <li><Link to="/browse-by-language">Browse by Language</Link></li>
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
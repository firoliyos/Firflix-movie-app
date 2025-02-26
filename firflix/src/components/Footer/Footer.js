import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_links">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
        <a href="#">Netflix Originals</a>
      </div>
      <div className="footer_social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="footer_copyright">
        <p>&copy; 2025 Firflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
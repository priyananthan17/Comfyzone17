import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>COMFYZONE</h2>
        <ul>
        <li><Link to='/new'>New</Link></li>
                    <li><Link to='/rain'>Rain</Link></li>
                    <li><Link to='/snow'>Snow</Link></li>
                    <li><Link to='/summer'>Summer</Link></li>
                    <li><Link to='/shopall'>Shop All</Link></li>
          <li><a href="/">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <ul>
          <li>📞 +91 9362861717</li>
          <li>📞 +91 7397523246</li>
          <li>📧 <a href="mailto:priyananthanms@gmail.com">priyananthanms@gmail.com</a></li>
          <li>
            <a href="/"><i className="fab fa-youtube"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Opening</h2>
        <ul>
          <li>Monday - Saturday</li>
          <li>09:00AM - 07:30PM</li>
          <li>Sunday</li>
          <li>09:00AM - 06:00PM</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© ComfyZone, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
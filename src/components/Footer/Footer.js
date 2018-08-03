import React from 'react';
import "./Footer.css";

const Footer = props => (
  <footer>
    <div className = "icons">
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-react fa-2x"></i>
      </a>
      <a href="https://github.com/keanamaral/HollywoodClickyGame" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
    <div className="spacer"></div>
    &copy; Kean Amaral 2018
  </footer>
)

export default Footer;
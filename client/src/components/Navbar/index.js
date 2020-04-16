import React from "react";
import { Link } from 'react-router-dom'
import './styles.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link 
        className="navbar-brand" 
        to="/">
          Google Books
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link 
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            to="/search">
              Search
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            to="/saved">
              Saved
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

function Navbar() {
  const location = useLocation();

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
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            to="/">
              Search
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            to="/saved">
              Saved
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;

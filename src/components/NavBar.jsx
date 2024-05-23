import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Your App Name</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UseState">UseState</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UseEffect">UseEffect</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pagination">Pagination</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UseRedux">UseRedux</Link>
          </li>

          
        </ul>
      </div>
    </div>
  </nav>
);
}

export default NavBar

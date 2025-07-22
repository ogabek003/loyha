// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container justify-content-center">
      <a className="navbar-brand" href="#">Company</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li className="nav-item px-3"><a className="nav-link" href="#">Features</a></li>
          <li className="nav-item px-3"><a className="nav-link" href="#">Enterprise</a></li>
          <li className="nav-item px-3"><a className="nav-link" href="#">Support</a></li>
          <li className="nav-item px-3"><a className="nav-link" href="#">Pricing</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

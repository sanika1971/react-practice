import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

 function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">{props.title}</Link>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
            {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
             Home
              </Link>
            </li>
          </ul>
             <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlfor="switchCheckDefault"> Enable Dark Mode</label>
</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

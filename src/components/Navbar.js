/* eslint-disable no-template-curly-in-string */
import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="textform">Home</a>
        </li>
          <a className="nav-link active" aria-current="page" href="/about">About</a>

      </ul>


      <div className={`form-check form-switch me-2 text-${props.mode === 'dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
    </div>
      
    </div>
  </div>
</nav>
        
    )
}

Navbar.prototype = {title: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title : "TextUtils" ,
    about : "About us"
};  
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navebar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
                <a className={`text-${props.mode==='light'?'dark':'light'} navbar-brand `} href="/" >{props.title }</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
              <li className={`nav-item text-${props.mode==='light'?'dark':'light'}`}>
                <Link to="/" className="nav-link active "  aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className={`nav-link text-${props.mode==='light'?'dark':'light'}`}>{props.about }</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-muted" href="/">Action</a></li>
                  <li><a className="dropdown-item text-muted" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider text-muted"/></li>
                  <li><a className="dropdown-item text-muted" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-muted">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navebar

Navebar.propTypes = {
    title: PropTypes.string
} 
Navebar.defaultProps = {
    title: 'Set title here'
}

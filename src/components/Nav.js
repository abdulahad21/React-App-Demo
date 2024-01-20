import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/StudentForm">{props.Title}</Link> */}
        <label className="navbar-brand">{props.Title}</label>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/StudentForm">{props.Second}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">{props.Third}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/News">{props.Forth}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.textcolor}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.txtmode} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  Title: 'Set Title',
  Second: 'Set Home',
  Third: 'Set About',
  Forth: 'Set News',
  toggleMode: 'toggleMode'
}
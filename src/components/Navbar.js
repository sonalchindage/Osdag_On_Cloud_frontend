import React from 'react'
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Osdag on cloud</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
        
         </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">Database</a>
        </li>
        
      </ul>

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Design
          </a>



          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Design Module</a></li>
            <li><a className="dropdown-item" href="/">Drawing Module</a></li>
            <li><a className="dropdown-item" href="/">3D viewer</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>

        </li>


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

        
        

      </form>
    </div>
  </div>
</nav>
  )
}

//import React from 'react'

/*function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        Osdag On Cloud
      </div>
      <ul className='navbar-menu'>
      <li><Link to="/connection">Connection</Link></li>
          <li><Link to="/tension">Tension Member</Link></li>
          <li><Link to="/compression">Compression Member</Link></li>
          <li><Link to="/flexural">Flexural Member</Link></li>
          <li><Link to="/beam">Beam-Column</Link></li>
          <li><Link to="/plate">Plate Girder</Link></li>
          <li><Link to="/truss">Truss</Link></li>
          <li><Link to="/twoD">2D Frame</Link></li>
          <li><Link to="/threeD">3D frame</Link></li>
          <li><Link to="/group">Group Design</Link></li>
      </ul>
      
    </div>
  )
}

export default Navbar*/



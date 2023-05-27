import React from 'react'
import Navbar from '../components/Navbar'
import imgo4 from '../imgo4.png'
import { Link } from "react-router-dom";

function Connection() {
  return (
    <div>
      <Navbar></Navbar>

      
      
      <div>Connection Page</div>
      <div>
      <button type="button" class="btn btn-info  mx-3">Shear Connection</button>
      <li><Link to="/shear">Shear Connection</Link></li>
      
      </div>

      <div>
      <button type="button" class="btn btn-success  mx-3">Moment Connection</button>
      <li><Link to="/moment">Moment Connection</Link></li>
      </div>

      <div>
      <button type="button" class="btn btn-warning  mx-3"> Truss Connection</button>
      <li><Link to="/trus">Trus Connection</Link></li>
      </div>
      
      <div>
       <div class="mx-3">
      <img src={imgo4} alt="imgo4" width="430" height="400px" />
      </div>
      
      </div>
      
      
      
      
    </div>
  )
}

export default Connection

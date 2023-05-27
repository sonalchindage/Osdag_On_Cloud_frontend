import React from 'react'
import { Link } from "react-router-dom";

export default function Layer() {
  return (
    <div >
       <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Connection</button>
  <li><Link to="/connection">Connection</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Tension Member</button>
  <li><Link to="/tension">Tension Member</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Compression Member</button>
  <li><Link to="/compression">Compression Member</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Flexural Member</button>
  <li><Link to="/flexural">Flexural Member</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Beam-column</button>
  <li><Link to="/beam">Beam-Column</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Plate Girder</button>
  <li><Link to="/plate">Plate Girder</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Truss</button>
  <li><Link to="/truss">Truss</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">2D frame</button>
  <li><Link to="/twoD">2D Frame</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">3D frame</button>
  <li><Link to="/threeD">3D frame</Link></li>
</div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary row mt-3" type="button">Group design</button>
  <li><Link to="/group">Group Design</Link></li>
</div>
    </div>
  )
}

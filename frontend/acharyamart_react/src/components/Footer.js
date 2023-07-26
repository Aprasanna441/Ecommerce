import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  
  
  return (
    <div class="row" >
      
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
  <div class="col-sm-6">
    <div class="card" >
      <div class="card-body" >
        <h5 class="card-title">Get To Know Us</h5>
        <ul style={{listStyle:'None','fontWeight':'bold',textDecoration:'None'}}>
          <li><NavLink to="">About Us</NavLink></li>
          <li><NavLink to="">Careers</NavLink></li>
          <li><NavLink to="">Press Release</NavLink></li>
          <li><NavLink to="">Amazon Science</NavLink></li>
        </ul>

      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Connect With Us</h5>
        <ul style={{listStyle:'None','fontWeight':'bold'}}>
          <li><NavLink to="">Instagram</NavLink></li>
          <li><NavLink to="">Facebook</NavLink></li>
          <li><NavLink to="">Twitter</NavLink></li>
        </ul>

      </div>
    </div>
  </div>
</div>
  )
}

export default Footer
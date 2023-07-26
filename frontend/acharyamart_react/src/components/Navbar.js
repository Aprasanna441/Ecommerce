import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { removeToken } from '../services/localStorage'
const Navbar = () => {

  const navigate=useNavigate()
    const nav_lik= {
        color: "white",
        textDecoration:"none"
    }

    const linkStyle=({isActive})=>{
     return {fontWeight: isActive? 'Bolder':'' }
    
    }

    const logoutHandler=()=>{
      removeToken()
      navigate('/account')
    }   

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger p-3">
    <NavLink className="navbar-brand" to="/"><span style={{color:'aqua'}}> AC</span>_HARYAMART</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <style>
      
    </style>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" style={linkStyle} to="/products">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={linkStyle} to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={linkStyle} to="/mycart">My Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={linkStyle} to="/account">Login/Signup</NavLink>
        </li>
      
        <li className="nav-item">
          <Button variant="contained"  onClick={logoutHandler} >Logout</Button>
        </li>
      

        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle"  to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About Us
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="#" style={linkStyle}>Contact Us</NavLink>
            <NavLink className="dropdown-item" to="#" style={linkStyle}>Seller Account</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="#" style={linkStyle}>Register Complain</NavLink>
          </div>
        </li>
     
      </ul>
 
    </div>
  </nav> 
  )
}

export default Navbar
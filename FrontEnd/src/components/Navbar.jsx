import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo-box">
          <div className="car-icon">🚗</div>
          <div className="logo-text">LuxeWash <span className="logo-sub">- Premium Car Care</span></div>
        </div>
      </div>

      <nav className="nav-center">
        <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <a className="nav-link" href="#service">Service</a>
        <a className="nav-link" href="#pricing">Pricing</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <div className="nav-right">
        <button className="avatar-btn" onClick={() => navigate('/profile')} aria-label="Open profile">
          <span className="avatar-circle">D</span>
        </button>
      </div>
    </header>
  )
}

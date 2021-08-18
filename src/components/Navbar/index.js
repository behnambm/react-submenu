import React from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-title'>
        <h2>BEHNAM</h2>
        <button className='modal-btn'>
          <FaBars />
        </button>
      </div>
      <ul className='navbar-links'>
        <li>
          <button className='link-btn'>Products</button>
        </li>
        <li>
          <button className='link-btn'>Developers</button>
        </li>
        <li>
          <button className='link-btn'>Company</button>
        </li>
      </ul>

      <div className='login'>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar

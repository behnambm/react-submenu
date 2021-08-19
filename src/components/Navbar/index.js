import React from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.css'
import { useGlobalContext } from '../../context'
import menuLinks from '../../data'

function Navbar() {
  const { openModal, openSubmenu, closeSubmenu } = useGlobalContext()

  const handleSubmenu = (e) => {
    const page = e.target.textContent
    const coords = e.target.getBoundingClientRect()
    const center = (coords.left + coords.right) / 2
    openSubmenu({ page, center })
  }

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='navbar' onMouseOver={hideSubmenu}>
      <div className='navbar-title'>
        <h2>BEHNAM</h2>
        <button className='modal-btn' onClick={openModal}>
          <FaBars />
        </button>
      </div>
      <ul className='navbar-links'>
        {menuLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <button className='link-btn' onMouseOver={handleSubmenu}>
                {link.page}
              </button>
            </li>
          )
        })}
      </ul>

      <div className='login'>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar

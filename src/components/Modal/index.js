import React from 'react'
import { FaTimes, FaHome, FaGithub } from 'react-icons/fa'
import './modal.css'
import { useGlobalContext } from '../../context'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={`modal-wrapper ${isModalOpen && 'show'}`}>
      <section className='modal'>
        <button className='close-modal' onClick={closeModal}>
          <FaTimes />
        </button>
        <article className='menu'>
          <h4>Products</h4>
          <div className='modal-submenu'>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaHome />
              item 1
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaHome />
              item 2
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaHome />
              item 3
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              item 3
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              item 3
            </a>
          </div>
        </article>

        <article className='menu'>
          <h4>Developers</h4>
          <div className='modal-submenu'>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaGithub />
              item 1
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaGithub />
              item 2
            </a>
            <a href='https://github.com' className='modal-submenu-link'>
              <FaGithub />
              item 3
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Modal

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './modal.css'
import { useGlobalContext } from '../../context'
import menuLinks from '../../data'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={`modal-wrapper ${isModalOpen && 'show'}`}>
      <section className='modal'>
        <button className='close-modal' onClick={closeModal}>
          <FaTimes />
        </button>
        {menuLinks.map((link, idx) => {
          return (
            <article className='menu' key={idx}>
              <h4>{link.page}</h4>
              <div className='modal-submenu'>
                {link.links.map((subLink, idx) => {
                  const { url, icon, label } = subLink
                  return (
                    <a href={url} className='modal-submenu-link' key={idx}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Modal

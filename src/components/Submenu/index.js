import React, { useRef, useEffect } from 'react'
import './submenu.css'
import { useGlobalContext } from '../../context'

function Submenu() {
  const { page, isSubmenuOpen, center } = useGlobalContext()
  const submenuRef = useRef(null)

  useEffect(() => {
    submenuRef.current.style.left = `${center}px`
  }, [center])

  return (
    <div className={`submenu ${isSubmenuOpen && 'show'}`} ref={submenuRef}>
      <div className={page.title}>
        {page.links.map((link, idx) => {
          const { url, icon, label, img } = link

          if (page.title === 'company') {
            return (
              <div className='item-wrapper'>
                <img src={img} alt='' />
                <a href={url} key={idx}>
                  {icon}
                  {label}
                </a>
              </div>
            )
          }
          return (
            <>
              <a href={url} key={idx}>
                {icon}
                {label}
              </a>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu

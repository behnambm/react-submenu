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
      {page.title}
    </div>
  )
}

export default Submenu

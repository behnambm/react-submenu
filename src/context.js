import React, { useState, useContext } from 'react'
import menuLinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [center, setCenter] = useState(null)
  const [page, setPage] = useState({ title: '', links: [] })

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSubmenu = ({ page, center }) => {
    setCenter(center)

    const menuItem = menuLinks.find((link) => link.page === page)
    setPage({ title: page, links: menuItem.links })

    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        center,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

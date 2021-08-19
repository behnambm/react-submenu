import React from 'react'
import './home.css'
import { useGlobalContext } from '../../context'

function Home() {
  const { closeSubmenu } = useGlobalContext()

  return (
    <main className='main' onMouseOver={closeSubmenu}>
      <section className='section-center'>
        <h1>My submenu project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          sunt sit porro mollitia iusto aut ab? Nulla quisquam dolorum
          laudantium adipisci, tempora officia eveniet reprehenderit error
          facilis odit labore quam.
        </p>
      </section>
    </main>
  )
}

export default Home

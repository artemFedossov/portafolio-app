import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'


// Componente funcional que representa la cabecera con el logo y la barra de navegación
export const HeaderNav = () => {
  return (
    <header className='header'>
        <Logo />
        <NavBar />
    </header>
  )
}

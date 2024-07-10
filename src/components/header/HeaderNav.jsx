import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <Logo />
        <NavBar />
    </header>
  )
}

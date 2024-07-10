import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <ul className='containerNav'>
            <li>
                <NavLink to="/inicio">inicio</NavLink>
            </li>
            <li>
                <NavLink to="/proyectos">proyectos</NavLink>
            </li>
            <li>
                <NavLink to="/contactos">contactos</NavLink>
            </li>
            <li>
                <NavLink to="/curriculum">curriculum</NavLink>
            </li>
        </ul>
    </nav>
  )
}

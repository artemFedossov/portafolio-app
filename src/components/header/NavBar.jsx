import React from 'react'
import { NavLink } from 'react-router-dom'


// Componente NavBar que muestra una barra de navegación con enlaces a diferentes secciones
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
                <NavLink to="/contacto">contacto</NavLink>
            </li>
            {/* <li>
                <NavLink to="/curriculum">curriculum</NavLink>
            </li> */}
        </ul>
    </nav>
  )
}

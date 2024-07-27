import React from 'react'

// Componente Logo que muestra el logo y la información de la marca
export const Logo = () => {
  return (
    <div className='containerLogo'>
      <img className="logo" src="/img/logo.png" alt="Artem Fedossov Logo" />
      <p className='titleLogo'>artem fedossov portafolio</p>
      <p className='subTitle'>web developer</p>
    </div>
  )
}

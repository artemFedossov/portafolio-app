import React from 'react'

export const Proyects = () => {
  return (
    <div className='cardProyects'>
      <img className='cardImg' src="/img/proyecto-rocketRiders.png" alt="" />
      <div className='cardDescription'>
        <p className='cardTitle'>RocketRiders</p>
        <p className='cardSubTitle'>proyecto final del curso en coderHouse</p>
        <div className='containerSkills' >
          <img className='cardLogo' src="/img/css.png" alt="" />
          <img className='cardLogo' src="/img/js.png" alt="" />
          <img className='cardLogo' src="/img/react.png" alt="" />
        </div>
        <button>web</button>
        <button>repo</button>
      </div>
    </div>
  )
}

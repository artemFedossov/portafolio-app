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
          <img className='cardLogo' src="/img/firebase.png" alt="" />
        </div>
      



        <button className='btnCards'>
          <a target="_blank" href="https://react-proyecto-nine.vercel.app/">
            <img className='btnLogo' src="/img/web.png" alt="" />
            <p className='btnDesc'>
              web
            </p>
          </a>
        </button>

        <button className='btnCards'>
          <a href="https://github.com/artemFedossov/react-proyecto">
            <img className='btnLogo' src="/img/gitHub.png" alt="" />
            <p className='btnDesc'>
              repo
            </p>
          </a>
        </button>
      </div>
    </div>
  )
}

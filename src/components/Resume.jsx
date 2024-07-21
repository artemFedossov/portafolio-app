import React, { useState } from 'react'

export const Resume = () => {

  const [showCertificate, setShowCertificate] = useState({
    react: false,
    javascript: false,
    desarrolloWeb: false,
  });

  const showImage = (certificate) => {
    setShowCertificate({ ...showCertificate, [certificate]: true });
  }

  const hideImage = (certificate) => {
    setShowCertificate({ ...showCertificate, [certificate]: false })
  }

  return (
    <div>
      <p className='titleContacts'>Curriculum</p>
      <div className='containerStudy'>
        <h2 className='titleStudy'>Educación</h2>
        <p className='sectionA'>CoderHouse - Desarrollo Full Stack - Cursado en 2024</p>
        <h2 className='titleStudy'>Certificaciones</h2>
        <a href=""></a>
        <p className='sectionA'
          onMouseEnter={() => showImage('react')}
          onMouseLeave={() => hideImage('react')}>
          React
        </p>
        {showCertificate.react && (
          <img className='certificate' src="/img/certificado-react.png" alt="" />
        )}
        <p className='sectionA'
          onMouseEnter={() => showImage('javascript')}
          onMouseLeave={() => hideImage('javascript')}>
          JavaScript
        </p>
        {showCertificate.javascript && (
          <img className='certificate' src="/img/certificado-js.png" alt="" />
        )}
        <p className='sectionA'
          onMouseEnter={() => showImage('desarrolloWeb')}
          onMouseLeave={() => hideImage('desarrolloWeb')}>
          Desarrollo Web
        </p>
        {showCertificate.desarrolloWeb && (
          <img className='certificate' src="/img/certificado-desarollo-web.png" alt="" />
        )}
        <h2 className='titleStudy'>Tecnologías aprendidas</h2>
        <div className='grillaStudy'>
          <p className='sectionA'>HTML</p>
          <p className='sectionA'>JavaScript</p>
          <p className='sectionA'>CSS</p>
          <p className='sectionA'>React</p>
          <p className='sectionA'>Bootstrap</p>
          <p className='sectionA'>Sass</p>
        </div>
      </div>
    </div>

  )

}

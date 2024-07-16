import React, { useState, } from 'react'

export const Contacts = () => {

  const [modal, setModal] = useState(false);

  const handleOpenFrom = () => {
    setModal(true);

  }

  const handleCloseForm = () => {
    setModal(false)
  }


  return (
    <div className='containerContacts'>
      <p className='titleContacts'>contactate conmigo</p>

      <a target='_blank' className={`divGit ${modal ? 'containerHidden' : ''}`} href="https://github.com/artemFedossov/">
        <img className='logoGit' src="/img/gitHub-black.png" alt="" />
        <p className='contactsDescription' >gitHub</p>
      </a>
      <button className={`divEmail ${modal ? 'containerHidden' : ''} `} onClick={handleOpenFrom}>
        <img className='logoGit' src="/img/email.png" alt="" />
        <p className='contactsDescription' >email</p>
      </button>
      <a target='_blank' className={`divlinkedin ${modal ? 'containerHidden' : ''} `} href='https://ar.linkedin.com/in/artemfedossov'>
        <img className='logoGit' src="/img/linkedin.png" alt="" />
        <p className='contactsDescription' >linkedin</p>
      </a>
      <a target='_blank' className={`divWhatsApp ${modal ? 'containerHidden' : ''} `}>
        <img className='logoGit' src="/img/whatsApp.png" alt="" />
        <p className='contactsDescription' >whatsapp</p>
      </a>

      {modal && (
        <div className='modal'>
          <p className='titleForm'>mensaje nuevo</p>
          <button onClick={handleCloseForm} className='btnClose'>
            <img className='btnCloseImg' src="/img/close.png" alt="" />
          </button>
          <form action="/enviar-correo" method='post'>
            <div className='fromA'>
              <label className='labelA' htmlFor="email">para: </label>
              <input className='inputA' type="email" value="a.fedossov90@gmail.com" readOnly />
            </div>
            <div>
              <label className='labelB' htmlFor="emael">de: </label>
              <input className='inputB' type="email" required />
            </div>
            <div className='fromC'>
              <textarea className='textC' name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Deje su Mensaje: ' required></textarea>
            </div>
            <button className="btnCards btnForm" type='submit'>enviar</button>
          </form>
        </div>

      )}

    </div>
  )
}

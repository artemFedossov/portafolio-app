import React, { useState, } from 'react'

export const Contacts = () => {
  // Estado para manejar la visibilidad del formulario modal
  const [modal, setModal] = useState(false);

  // Datos para el enlace de WhatsApp
  let phoneNumber = 1562160704;
  let message = "hola, buenos dias!"
  const url = `https://web.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  // Función para abrir el formulario modal
  const handleOpenFrom = () => {
    setModal(true);
  }
  // Función para cerrar el formulario modal
  const handleCloseForm = () => {
    setModal(false)
  }

  return (
    <div className='containerContacts'>
      <p className='titleContacts'>contactate conmigo</p>

      {/* Enlace a GitHub */}
      <a
        target='_blank'
        className={`divGit ${modal ? 'containerHidden' : ''}`}
        href="https://github.com/artemFedossov/"
        aria-label="Perfil de GitHub"
        rel="noopener noreferrer"
      >
        <img className='logoContacts' src="/img/gitHub-black.png" alt="GitHub Logo" />
        <p className='contactsDescription' >gitHub</p>
      </a>

      {/* boton que abre el formulario */}
      <button
        className={`divEmail ${modal ? 'containerHidden' : ''} `}
        onClick={handleOpenFrom}
        aria-label="Abrir formulario de contacto"
      >
        <img className='logoContacts' src="/img/email.png" alt="Email Logo" />
        <p className='contactsDescription' >email</p>
      </button>

      {/* Enlace a Linkedin */}
      <a
        target='_blank'
        className={`divlinkedin ${modal ? 'containerHidden' : ''} `}
        href='https://ar.linkedin.com/in/artemfedossov'
        aria-label="Perfil de LinkedIn"
        rel="noopener noreferrer"
      >
        <img className='logoContacts' src="/img/linkedin.png" alt="LinkedIn Logo" />
        <p className='contactsDescription' >linkedin</p>
      </a>

      {/* Enlace a WhatsApp */}
      <a
        target='_blank'
        href={url}
        className={`divWhatsApp ${modal ? 'containerHidden' : ''} `}
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp"
      >
        <img className='logoContacts' src="/img/whatsApp.png" alt="WhatsApp Logo" />
        <p className='contactsDescription' >whatsapp</p>
      </a>

      {/* Formulario modal que aparece cuando `modal` es true */}
      {modal && (
        <div className='modal' role="dialog" aria-labelledby="modalTitle" aria-hidden={!modal}>
          <p id="modalTitle" className='titleForm'>mensaje nuevo</p>
          <button onClick={handleCloseForm} className='btnClose' aria-label="Cerrar formulario">
            <img className='btnCloseImg' src="/img/close.png" alt="cerrar" />
          </button>
          <form action="/enviar-correo" method='post'>
            <div>
              <label className='labelA' htmlFor="emailTo">para: </label>
              <input className='inputA' type="email" value="a.fedossov90@gmail.com" readOnly id="emailTo" />
            </div>
            <div>
              <label className='labelB' htmlFor="emailFrom">de: </label>
              <input className='inputB' type="email" required id="emailFrom" />
            </div>
            <div className='fromText'>
              <textarea className='textC' name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Deje su Mensaje: ' required></textarea>
            </div>
            <button className="btnCards btnForm" type='submit'>enviar</button>
          </form>
        </div>
      )}
    </div>
  )
}

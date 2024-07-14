import React from 'react'

export const Contacts = () => {
  return (
    <div className='containerContacts'>
      <p className='titleContacts'>contactate conmigo</p>
      
        <div className='divGit'>
          <img className='logoGit' src="/img/gitHub-black.png" alt="" />
          <p className='contactsDescription' >gitHub</p>
        </div>
        <div className='divEmail'>
          <img className='logoGit' src="/img/email.png" alt="" />
          <p className='contactsDescription' >email</p>
        </div>
        <div className='divlinkedin'>
          <img className='logoGit' src="/img/linkedin.png" alt="" />
          <p className='contactsDescription' >linkedin</p>
        </div>
        <div className='divWhatsApp'>
          <img className='logoGit' src="/img/whatsApp.png" alt="" />
          <p className='contactsDescription' >whatsapp</p>
        </div>
      
    </div>
  )
}

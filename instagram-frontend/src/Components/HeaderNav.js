import React from 'react'
import { MdExitToApp } from 'react-icons/md'


import LogoInstagram from '../Assets/instagram-logo.png'


export default function HeaderNav({clearUserId}) {

  function logoutHandler(){
    clearUserId();
    localStorage.clear()

  }

  return (
    <header>
        <nav>
            <img src={LogoInstagram} alt='Logo do instagram'/>
                 <MdExitToApp size={25} onClick={logoutHandler}/>
        </nav>
    </header>
  )
}

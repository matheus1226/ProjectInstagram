import React from 'react'
import LogoInstagram from '../Assets/instagram-logo.png'


export default function HeaderNavLoggedOut() {
  return (
    <header>
        <nav className='nav-loggedout'>
            <img src={LogoInstagram} alt='Logo do Instagram'/>
        </nav>
    </header>
  )
}

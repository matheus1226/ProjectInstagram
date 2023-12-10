import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNavLoggedOut from '../Components/BottomNavLoggedOutLogin'
import LoginMainSection from '../Components/LoginMainSection'


export default function Login( {updateUserId}){

    return(
        <>
           <HeaderNav/>
           <LoginMainSection updateUserId={updateUserId}/>
           <BottomNavLoggedOut/>
        </> 
    )
}
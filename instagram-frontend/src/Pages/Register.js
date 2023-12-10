import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNavLoggedOutLogin from '../Components/BottomNavLoggedOutLogin'
import RegisterMainSection from '../Components/RegisterMainSection'

export default function Register({ updateUserId }){

    return(
        <>
            <HeaderNav/>
            <RegisterMainSection updateUserId={updateUserId}/>
            <BottomNavLoggedOutLogin/>
        </>
    )
}
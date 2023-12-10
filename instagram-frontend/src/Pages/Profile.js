import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'
import ProfileContainer from '../Components/ProfileContainer'

export default function Profile({clearUserId}){

    return(
        <>
            <HeaderNav clearUserId={clearUserId}/>
            <ProfileContainer/>
            <BottomNav/>
            
        </>
    )
}
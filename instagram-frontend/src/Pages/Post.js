import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'
import PostContainer from '../Components/PostContainer'

export default function Post({clearUserId}){

    return(
        <>
            <HeaderNav clearUserId={clearUserId}/>
            <PostContainer/>
            <BottomNav/>
            
        </>
    )
}
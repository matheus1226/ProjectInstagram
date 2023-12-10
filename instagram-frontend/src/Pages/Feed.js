import React from 'react'
import HeaderNav from '../Components/HeaderNav';
import BottomNav from '../Components/BottomNav'
import FeedContainer from '../Components/FeedContainer';


function Feed({clearUserId}){

    return(
        <>
        <HeaderNav clearUserId={clearUserId} />
        <FeedContainer/>
        <BottomNav/>
        </>
    )
}

export default Feed;
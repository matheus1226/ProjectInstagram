import React, {useState} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import Login from '../Pages/Login'
import Feed from '../Pages/Feed'
import Register from '../Pages/Register'
import Profile from '../Pages/Profile'
import Post from '../Pages/Post'

export default function Router() {
    const [userId, setUserId] = useState(localStorage.getItem('InstagramUserId'))

    function updateUserId(user){
        setUserId(user)
    }

    function clearUserId(){
        setUserId(null)
    }

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ userId ? <Navigate to='/feed'/> : <Login updateUserId={updateUserId}/> } />
                <Route path='/feed' element={ userId ? <Feed clearUserId={clearUserId}/> : <Navigate to='/' />}/>
                <Route path='/register' element={ userId ? <Navigate to='/feed'/> : <Register updateUserId={updateUserId} /> }/>
                <Route path='/profile' element={ userId ? <Profile clearUserId={clearUserId}/> : <Navigate to='/' />}/>
                <Route path='/post' element={ userId ? <Post clearUserId={clearUserId}/> : <Navigate to='/' />}/>
            </Routes>
        </BrowserRouter>
        </>
    )

}
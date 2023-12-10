import React,{ useEffect, useState }  from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileFeed from './ProfileFeed'
import api from '../Services/api'

export default function ProfileContainer() {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    const [userInformations, setUserInformations] = useState({})
    const [userPosts, setUserPosts] = useState([])  


    useEffect(() => {
        async function getProfileInfo() {
            try{
                const profileInfo = await api.get(`/users/${userId}`)
                const { data } = profileInfo
                
                const userInfo = data.userInfo
                setUserInformations(userInfo)

                const userPosts = data.userPosts
                setUserPosts(userPosts)

            } catch(err){
                alert('Erro ao carregar informações do perfil')
            }
        }

        getProfileInfo()
    })

    return (
        <main className='profile-container'>
            <ProfileHeader
                username={userInformations.username}
                name={userInformations.name}
                description={userInformations.description}
                avatar={userInformations.avatar}
                site={userInformations.site}
            />
            <ProfileFeed
                userposts={userPosts}
            />
        </main>
    )
}

import {React,useState} from 'react'
import api from '../Services/api'

import OutHeart from '../Assets/outline-heart.svg'
import FillHeart from '../Assets/filled-heart.svg'

export default function FeedCard({ picture, user, description, likes, avatar, id, makeUpdate }) {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    const [isValidAvatar, setIsValidAvatar] = useState(true);
    
    async function likeAPost() {
        try{
            await api.post(`/posts/${id}/like`, null,{
                headers: {
                    user_id: userId
                }
            })
            makeUpdate()
        }catch(err){
            alert('Impossível curtir postagem')
        }
    }
    
    async function unlikeAPost(){
        try{
            await api.post(`/posts/${id}/dislike`, null,{
                headers: {
                    user_id: userId
                }
            })
            makeUpdate()
        }catch(err){
            alert('Impossivel descurtir postagem')
        }   
    }

    const handleAvatarLoadError = () => {
        setIsValidAvatar(false);
    };
  return (
        <div className='card-container'>
            <div className='card-header'>
            {user.avatar && isValidAvatar ? (
                    <img
                        src={user.avatar}
                        alt='profile'
                        onError={handleAvatarLoadError}
                    />
                ) : (
                    <img
                        src="https://chatobjj.com.br/wp-content/uploads/2023/05/sem-imagem-avatar.png"
                        alt='profile'
                    />
                )}
                <h2>{user.username}</h2>
            </div>
            <div className='card-photo'>
                <img 
                    src={picture}
                    alt='imagem' 
                />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>   
                 { likes.flat().includes(userId) ? 
                        <img 
                            src={FillHeart} 
                            alt='Likes'
                            onClick={()=>{unlikeAPost()}} 
                        /> : 
                        <img 
                            src={OutHeart} 
                            alt='Likes' 
                            onClick={()=>{likeAPost()}}
                        /> 
                    }                   
                    {likes.length > 1 ? 
                        <h3>{likes.length} pessoas gostaram</h3> : likes.length === 1 ?
                        <h3>1 pessoa gostou</h3> :
                        null
                    }             
                </div>
                <div className='card-info'>
                    <p><a href='/feed'>{user.username}</a> {description}</p>
                </div>
            </div>                
        </div>
  )
}

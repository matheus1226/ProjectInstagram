import React, { useState } from 'react'
import InputStandart from '../Components/InputStandart'
import {useNavigate} from 'react-router-dom';
import api from '../Services/api'
import instagramDefault from '../Assets/default-image.png'


export default function PostContainer() {
    const [linkPhoto , setLinkPhoto] = useState('');
    const [DescriptionPhoto, setDescriptionPhoto] = useState('');
    const [user] = useState(localStorage.getItem('InstagramUserId'))
    const navigate = useNavigate();

    async function postHandler(e){
        e.preventDefault();
        const data = {
            picture: linkPhoto,
            description: DescriptionPhoto
        }
        try{
            await api.post('/post', data, {
                headers: {
                    user: user
                }
            })
            navigate('/profile')
        }catch(err){
            alert('Erro ao fazer login, tente novamente')
        }
    }

  return (
    <main className='post-container'>
        { linkPhoto ?  <img src={linkPhoto} alt={DescriptionPhoto}/> : <img src={instagramDefault} alt='Default'/> }
        <form>
            <h1>Postar nova foto</h1>
            <fieldset>
                <InputStandart
                    title='Link da foto'
                    type='text'
                    state={linkPhoto}
                    setState={(e)=>setLinkPhoto(e.target.value)}
                />
                <InputStandart
                    title='Descrição da foto'
                    type='text'
                    state={DescriptionPhoto}
                    setState={(e)=>setDescriptionPhoto(e.target.value)}
                />
            </fieldset>
            <button onClick={postHandler}>Postar Imagem</button>
        </form>
    </main>
  )
}

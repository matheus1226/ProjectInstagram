import React, { useEffect, useState } from 'react'
import api from '../Services/api'

import FeedCard from '../Components/FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState([]); 
    const [update, setUpdate] = useState(false);

    async function makeUpdate(){
        setUpdate(!update)
    }

    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadedPosts = await api.get('post');
                const { data } = loadedPosts;
                setAllPosts(data.body.reverse());

            } catch (err) {
                alert('Não foi possível carregar os posts');
            }
        }

        getAllPosts();
    }, [makeUpdate]);

    return (
        <div className='feed-container'>
            {allPosts === null && <h1 className='loading-message'>Carregando...</h1>}
            {allPosts && allPosts.map(post => (
                <FeedCard 
                    key={post._id} 
                    id={post._id}
                    picture={post.picture} 
                    user={post.user} 
                    description={post.description}
                    likes={post.likes}
                    avatar={post.avatar}
                    makeUpdate={makeUpdate}
                />
            ))}
        </div>
    );
}


export default FeedContainer
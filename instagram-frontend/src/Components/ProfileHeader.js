import React from 'react'

export default function ProfileHeader({username,name,description,avatar,site}) {
  return (
        <div className='profile-header'>
                <img className='avatar' src={avatar} alt='avatar'/>
                <div className='profile-user-info'>
                    <h1>{username}</h1>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <a href={site}>{site}</a>
                </div>
        </div>
  )
}

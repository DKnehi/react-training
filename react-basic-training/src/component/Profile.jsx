import React from 'react'

export default function Profile() {
    const user = {
        name: 'Dat Truong',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={'Photo of ' + user.name} style={{width: user.imageSize, height: user.imageSize}} />
    </div>
  )
}

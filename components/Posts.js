import React from 'react'
import Post from './Post'

const posts = [
    {
        id: "123",
        username: "foxc121",
        userImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img: "https://images.pexels.com/photos/17706289/pexels-photo-17706289/free-photo-of-city-people-street-building.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        caption: "This is dope"

    },
    {
        id: "123",
        username: "foxc121",
        userImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img: "https://images.pexels.com/photos/17733296/pexels-photo-17733296/free-photo-of-nature-photography.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        caption: "This is dope"

    },
    {
        id: "123",
        username: "foxc121",
        userImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img: "https://images.pexels.com/photos/17809448/pexels-photo-17809448/free-photo-of-people-woman-art-festival.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        caption: "This is dope"

    }
]

function Posts() {
  return (
    <div>
        {posts.map((post) => (
        <Post 
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
       ))}
    </div>
  )
}

export default Posts
import React from 'react'
import { 
    BookmarkIcon, 
    ChatIcon, 
    DotsHorizontalIcon, 
    EmojiHappyIcon, 
    HeartIcon, 
    PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled,  } from "@heroicons/react/solid"



function Post({ username, userImg, img, caption, id }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
       {/* Header */}
       <div className="flex items-center p-5">
        <img className='rounded-full h-11 w-12 border p-1 mr-3 object-contain' src={img} alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
       </div>
       {/* img */}
       <img className="object-cover w-full" src={img} alt="" />
       {/* buttons */}
       <div className="flex items-center justify-between px-4 pt-4">
        <div className='flex space-x-4'>
        <HeartIcon className='btn' />
        <ChatIcon className='btn' />
        <PaperAirplaneIcon className='btn' />
       </div>
       <BookmarkIcon className='btn'/>
       </div>
       
       {/* caption */}
       <p className="p-5 truncate">
            <span className='font-bold mr-1'>{username}: </span>  
            {caption}   
       </p>
       {/* comments */}
       <form className="flex items-center p-4">
        <EmojiHappyIcon className='h-7' />
        <input className='border-none flex-1 focus:ring-0 outline-0' type="text" placeholder='Add a comment...' />
        <button className='font-semibold text-blue-400'>Post</button>
       </form>
       {/* input box */}
    </div>
  )
}

export default Post
import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='rounded-full border p-[2px] h-16 w-16' src="https://images.pexels.com/photos/17742455/pexels-photo-17742455/free-photo-of-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <div className="">
            <h2>Foxc121</h2>
            <h3>Welcome to Instagram</h3>
        </div>
        <button className="">Sign out</button>
    </div>
  )
}

export default MiniProfile
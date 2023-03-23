import React from 'react'
import Video from '../assets/video.mp4'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';


function Main() {
  return (
<main class="relative flex flex-col h-screen overflow-hidden">
  <video autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src={Video} type="video/mp4" />
  </video>
  <div className='absolute bg-black/50 w-full h-full top-0 left-0 z-20'></div>

  <div class="relative z-30 p-5 text-2xl text-white">
    <AiOutlineMenu className=' cursor-pointer hover:scale-125 duration-300' size={40}/>
  </div>
</main>

  )
}

export default Main

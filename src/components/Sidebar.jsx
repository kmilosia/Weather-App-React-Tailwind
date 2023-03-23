import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Sidebar({fetchWeather, setCity}) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleSearch = (e) => {
    fetchWeather(e);
    handleNav();
  }
  return (
    <div className="relative z-30 p-5 text-2xl text-white">
      {nav ?
      <AiOutlineClose onClick={handleNav} className='relative z-40 cursor-pointer hover:scale-125 duration-300' size={40}/>
      : <AiOutlineMenu onClick={handleNav} className='relative z-40 cursor-pointer hover:scale-125 duration-300' size={40}/>
      }
    <div className={`flex flex-col p-8 items-center left-0 w-full h-auto absolute z-30 bg-black duration-300 ${nav ? "top-0" : "top-[-120vh]"}`}>
      <form className='flex justify-between rounded-xl bg-gray-50/20 w-1/2 px-6 py-5'>
        <input onChange={(e) => setCity(e.target.value)} className='bg-transparent outline-none' type="text" placeholder='Search for a city...'/>
        <button onClick={handleSearch} className='hover:scale-125 duration-300'><BsSearch size={20}/></button>
      </form>
    </div>
    </div>
  )
}

export default Sidebar

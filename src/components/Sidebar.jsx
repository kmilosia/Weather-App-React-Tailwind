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
    <div className="relative z-30 pt-5 pl-5 text-2xl text-white">
      {nav ?
      <AiOutlineClose onClick={handleNav} className='relative z-40 cursor-pointer mb-6 hover:scale-125 duration-300' size={30}/>
      : <AiOutlineMenu onClick={handleNav} className='relative z-40 cursor-pointer mb-6 hover:scale-125 duration-300' size={30}/>
      }
    <div className={`flex flex-col py-8 px-6 items-center left-0 w-full h-auto absolute z-30 bg-black/90 duration-300 ${nav ? "top-0" : "top-[-120vh]"}`}>
      <form className='flex justify-between rounded-xl mt-8 bg-gray-50/20 w-full px-4 py-5 lg:mt-0 lg:px-6 md:w-2/3'>
        <input onChange={(e) => setCity(e.target.value)} className='bg-transparent outline-none w-10/12 text-[1.2rem] lg:text-2xl lg:w-full' type="text" placeholder='Search for a city...'/>
        <button onClick={handleSearch} className='hover:scale-125 duration-300'><BsSearch size={20}/></button>
      </form>
    </div>
    </div>
  )
}

export default Sidebar

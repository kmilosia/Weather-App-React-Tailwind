import React from 'react'
import {GiGroupedDrops} from 'react-icons/gi';
import {BsWind, BsCloudsFill, BsFillSunFill} from 'react-icons/bs';

const Weather =({data}) => {
  let uv = data.current.uv;
  return (
    <div className='relative z-20 text-white w-full font-light flex flex-col items-center justify-center py-4 px-2'>
      <div className='flex justify-center items-center flex-col mb-4 w-full rounded-md bg-black/70 lg:flex-row p-6 lg:w-3/4'>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='text-3xl my-2 lg:text-5xl'>{data.location.name}</h3>
        <h1 className='text-6xl lg:text-8xl'>{data.current.temp_c}&deg;C</h1>
        <h4 className='m-2 text-lg lg:text-2xl'>{data.current.condition.text}</h4>
        </div>
        <div>
        <img className='h-auto w-20 lg:w-56' src={data.current.condition.icon} alt="Weather Condition" />
        </div>
      </div>


        <div className='w-full grid grid-cols-2 text-light gap-2 md:gap-4 md:w-3/4'>
        <div className='flex flex-col justify-center items-center rounded-md bg-black/70 px-4 py-10'>
          <GiGroupedDrops size={30}/>
          <h5 className='m-2 font-bold lg:text-xl'>Humidity</h5>
          <p className='text-md'>{data.current.humidity}%</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-black/70 px-4 py-10'>
          <BsWind size={30}/>
          <h5 className='m-2 font-bold lg:text-xl'>Wind</h5>
          <p className='text-md'>{data.current.wind_kph} km/h</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-black/70 px-4 py-10'>
          <BsCloudsFill size={30}/>
          <h5 className='m-2 font-bold lg:text-xl'>Clouds</h5>
          <p className='text-md'>{data.current.wind_kph}%</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-black/70 px-4 py-10'>
          <BsFillSunFill size={30}/>
          <h5 className='m-2 font-bold lg:text-xl'>UV</h5>
          <p className='text-md'>
            {uv >= 0 && uv < 3 ? "Low" : uv >= 3 && uv <= 5 ? "Moderate" : uv > 5 && uv <= 7 ? "High" : uv > 7 && uv < 11 ? "Very High" : "Extreme"}
          </p>
        </div>
        </div>
      </div>
  )
}

export default Weather

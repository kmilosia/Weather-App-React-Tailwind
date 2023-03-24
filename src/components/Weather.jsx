import React, { useEffect } from 'react'
import {GiGroupedDrops} from 'react-icons/gi';
import {BsWind, BsCloudsFill, BsFillSunFill} from 'react-icons/bs';
import Video from '../assets/video.mp4'
import Rain from '../assets/rain.mp4'
import Clouds from '../assets/clouds.mp4'
import Snow from '../assets/snow.mp4'
import Sun from '../assets/sun.mp4'
import Thunder from '../assets/thunder.mp4'
import Wind from '../assets/wind.mp4'

const Weather =({data, setBg}) => {
  let uv = data.current.uv;
  const handleBg = () => {
    let weatherCondition = data.current.condition.text;
    if (weatherCondition.toLowerCase().indexOf('sun') !== -1 || weatherCondition.toLowerCase() === "clear") {
      setBg(Sun);
    }else if(weatherCondition.toLowerCase().indexOf('cloud') !== -1 || weatherCondition.toLowerCase() === "overcast"){
      setBg(Clouds);
    }else if(weatherCondition.toLowerCase().indexOf('rain') !== -1){
      setBg(Rain);
    }else if(weatherCondition.toLowerCase().indexOf('thunder') !== -1){
      setBg(Thunder);
    }else if(weatherCondition.toLowerCase().indexOf('snow') !== -1){
      setBg(Snow)
    }else if(weatherCondition.toLowerCase().indexOf('wind') !== -1){
      setBg(Wind);
    }else{
      setBg(Video)
    }
  }
  useEffect(() => {
    if(data){
      handleBg()
    } 
  })
  return (
    <div className='text-white flex flex-col items-center mt-10 mb-4'>
        <div className='flex flex-col justify-center items-center font-light py-4 mx-10 text-center'>
          <h3 className='text-6xl my-4 lg:text-7xl xl:text-8xl'>{data.location.name}</h3>
          <h1 className='text-7xl my-2 lg:text-8xl xl:text-9xl'>{data.current.temp_c}&deg;C</h1>
          <h4 className='text-2xl my-2 lg:text-3xl xl:text-4xl'>{data.current.condition.text}</h4>
        </div>
        <div className='w-full px-2 mt-2 xl:w-10/12'>
          <div className='transparent-bg-box p-6 my-2 md:text-center'>
            <h3 className='text-xl p-2 lg:text-2xl'>Feels like {data.current.feelslike_c}&deg;C</h3>
          </div>
        <div className='w-100 grid grid-cols-2 text-light gap-2'>
        <div className='transparent-bg-box flex flex-col justify-center items-center py-8 md:py-12'>
          <GiGroupedDrops size={30} className="my-2 md:my-6 lg:scale-150"/>
          <h5 className='my-2 font-bold text-xl lg:text-2xl'>Humidity</h5>
          <p className='text-lg my-2 md:my-4 lg:text-xl'>{data.current.humidity}%</p>
        </div>
        <div className='transparent-bg-box flex flex-col justify-center items-center py-8 md:py-12'>
          <BsWind size={30} className="my-2 md:my-6 lg:scale-150"/>
          <h5 className='my-2 font-bold text-xl lg:text-2xl'>Wind</h5>
          <p className='text-lg my-2 md:my-4 lg:text-xl'>{data.current.wind_kph} km/h</p>
        </div>
        <div className='transparent-bg-box flex flex-col justify-center items-center py-8 md:py-12'>
          <BsCloudsFill size={30} className="my-2 md:my-6 lg:scale-150"/>
          <h5 className='my-2 font-bold text-xl lg:text-2xl'>Clouds</h5>
          <p className='text-lg my-2 md:my-4 lg:text-xl'>{data.current.wind_kph}%</p>
        </div>
        <div className='transparent-bg-box flex flex-col justify-center items-center py-8 md:py-12'>
          <BsFillSunFill size={30} className="my-2 md:my-6 lg:scale-150"/>
          <h5 className='my-2 font-bold text-xl lg:text-2xl'>UV</h5>
          <p className='text-lg my-2 md:my-4 lg:text-xl'>
            {uv >= 0 && uv < 3 ? "Low" : uv >= 3 && uv <= 5 ? "Moderate" : uv > 5 && uv <= 7 ? "High" : uv > 7 && uv < 11 ? "Very High" : "Extreme"}
          </p>
        </div>
        </div>
        <div className='transparent-bg-box flex flex-col w-100 py-6 px-6 my-2'>
            <div className='flex flex-row justify-between my-1'>
              <h4 className='text-lg font-semibold'>Pressure</h4>
              <h5 className='text-lg text-gray-300'>{data.current.pressure_mb} hPa</h5>
            </div>
            <div className='flex flex-row justify-between my-1'>
              <h4 className='text-lg font-semibold'>Precipitation</h4>
              <h5 className='text-lg text-gray-300'>{data.current.precip_mm} mm</h5>
            </div>
            <div className='flex flex-row justify-between my-1'>
              <h4 className='text-lg font-semibold'>Visibility</h4>
              <h5 className='text-lg text-gray-300'>{data.current.vis_km} km</h5>
            </div>
        </div>
        <footer className='mt-4 mx-1'>
          <h6 className='inline md:text-lg'>Forecast by</h6>
          <a className='inline text-green-600 font-semibold md:text-lg hover:text-green-700' href="https://www.weatherapi.com/"> WeatherAPI.com</a>
        </footer>
        </div>
      </div>
  )
}

export default Weather

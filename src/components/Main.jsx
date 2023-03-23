import React,{useState} from 'react'
import Video from '../assets/video.mp4'
import Sidebar from './Sidebar';
import Weather from './Weather';
import axios from 'axios';


function Main() {
    const [data, setData] = useState(null);
    const [city, setCity] = useState('');
    const url = `http://api.weatherapi.com/v1/current.json?key=8bce3ea3263944a8b10175644230803&q=${city}&aqi=no`;
    const fetchWeather = (e) => {
          e.preventDefault();
          axios.get(url).then((response) => {
            setData(response.data);
          });
          setCity('');
        };
  return (
  <div>
    <div className="w-full">
      <video autoPlay muted loop className='w-screen h-screen fixed object-cover top-0 left-0 z-[-1]'>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
    <div className='relative h-100'>
    <Sidebar fetchWeather={fetchWeather} setCity={setCity}/>
    {!data ? "" : <Weather data={data}/>}
    </div>
  </div>
  )
}

export default Main

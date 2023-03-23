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
<main className="relative flex flex-col h-screen overflow-hidden">
  <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src={Video} type="video/mp4" />
  </video>
  <div className='absolute bg-black/50 w-full h-full top-0 left-0 z-20'></div>
    <Sidebar fetchWeather={fetchWeather} setCity={setCity}/>
    {!data ? "" : <Weather data={data}/>}
</main>

  )
}

export default Main

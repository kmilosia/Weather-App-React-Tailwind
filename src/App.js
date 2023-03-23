// import axios from 'axios';
// import { useState } from 'react';
// import {BsSearch} from 'react-icons/bs';
// import Weather from './components/Weather';


// function App() {
//   const [nav, setNav] = useState(false);
//     const toggleNav = () => {
//         setNav(!nav);
//         if(!nav){
//             document.body.style.overflow = 'hidden'
//         }else{
//             document.body.style.overflow = 'scroll'
//         }
//     }
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const url = `http://api.weatherapi.com/v1/current.json?key=8bce3ea3263944a8b10175644230803&q=${city}&aqi=no`;
//   const fetchWeather = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     axios.get(url).then((response) => {
//       setWeather(response.data);
//     });
//     setCity('');
//     setLoading(false);
//   };
//   return (   
//     <div className='w-full min-h-screen py-4 px-2 bg-[url(https://source.unsplash.com/random/?landscape)] bg-cover bg-center'>
//      <header className='flex justify-center mb-2 px-2 w-full'>
//       <form className='flex justify-center w-full rounded-md py-3 px-4 bg-black/70 md:w-3/4'>
//         <input onChange={(e) => setCity(e.target.value)} className='text-white px-4 py-2 w-full bg-transparent border-none outline-none' type="text" placeholder='Search for the city..' />
//         <button onClick={fetchWeather} className='m-2 hover:scale-125 duration-300'><BsSearch className='text-white' size={20}/></button>
//       </form>
//      </header>

//      <main className='flex justify-center w-100'>
//       {!weather ? '' : <Weather weather={weather} /> }
//      </main>
//     </div>
//   );
// }

// export default App;

import Main from './components/Main';

function App() {    
  return (   
    <div>
      <Main />
    </div>
  );
}

export default App;


import React, { useContext } from 'react'
import Search from '../Search';
import "./style.css";
import { weatherContext } from '../../Context/WeatherContext';
import WeatherDetails from '../WeatherDetails';

function Home() {
  const {fetchWeatherData} = useContext(weatherContext);

  function getCurrPosWeather(pos){
    fetchWeatherData(pos.coords.latitude,pos.coords.longitude);
  }

  function handleErr(err){
    console.log(err);
  }

  function getCurrentLoc(){
    navigator.geolocation.getCurrentPosition(getCurrPosWeather, handleErr);
  }

  return (
    <div id='home-container'>
        <div id='nav-container'>
            <div className='nav-info-container weather-item'>
              <i className="fa-solid fa-cloud"></i>
              <h4>Weather</h4>
            </div>
            <Search/>
            <div className='curr-loc-container weather-item' onClick={() => getCurrentLoc()}>
                <i className="fa-solid fa-location-crosshairs"></i>
            </div>
        </div>
        <WeatherDetails/>
    </div>
  )
}

export default Home;

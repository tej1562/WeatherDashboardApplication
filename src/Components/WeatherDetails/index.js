import React, { useContext } from 'react';
import sun from '../../Assets/sun.svg';
import wind from "../../Assets/wind.svg";
import sunrise from "../../Assets/sunrise.svg";
import sunset from "../../Assets/sunset.svg";
import humidity from "../../Assets/humidity.svg";
import pressure from "../../Assets/pressure.svg";
import visibility from "../../Assets/visibility.svg";
import WeatherDetailsItem from '../WeatherDetailsItem';
import { weatherContext } from '../../Context/WeatherContext';
import "./style.css";

function WeatherDetails() {
  const {weather} = useContext(weatherContext);

  function getTime(unixTime){
      const date = new Date(unixTime * 1000);

      const hours = date.getHours();
      let minutes = date.getMinutes();

      if(minutes < 10)
      {
        minutes = '0' + minutes;
      }

      const time = hours + ":" + minutes;

      return time;
  }

  function getCurrentDate(){
    const date = new Date();
    return date.toDateString();
  }

  return (
    <div id='weather-container'>
       <h3>Current Weather</h3>

       {weather ? 
       
        <div id='weather-info-container'>
          <div id="main-info-container" className='temp-info weather-item'>
              <img src={sun}/>
              <div id="main-top-container">
                <h2>{`${weather.temp}\u00B0C`}</h2>
                <p style={{marginTop:"1rem"}}>{weather.desc}</p>
              </div>
              <div className='sep'></div>
              <div id="main-bottom-container">
                <p>
                  <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{weather.city}
                </p>
                <p style={{marginTop:"1rem"}}>
                <i className="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;{getCurrentDate()}
                </p>
              </div>
            </div>
          <div id='rem-info-container'>
              <WeatherDetailsItem icon={wind} title="Wind Speed" detail={`${weather.wind} m/s`}/>
              <WeatherDetailsItem icon={humidity} title="Humidity" detail={`${weather.humidity}%`}/>
              <WeatherDetailsItem icon={pressure} title="Pressure" detail={`${weather.pressure} hPa`}/>
              <WeatherDetailsItem icon={visibility} title="Visibility" detail={`${weather.visibility} m`}/>
              <WeatherDetailsItem icon={sunrise} title="Sunrise" detail={getTime(weather.sunrise)}/>
              <WeatherDetailsItem icon={sunset} title="Sunset" detail={getTime(weather.sunset)}/>
          </div>
        </div>
      
        : 
        
        <div id='action-item-container'>
            <i className="fa-solid fa-compass"></i>
            <p>Select a city to get weather details</p>
        </div>
       
      }

      
    </div>
  )
}

export default WeatherDetails

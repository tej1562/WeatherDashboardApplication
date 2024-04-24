import React, { useContext, useEffect, useState } from 'react';
import "./style.css";
import { weatherContext } from '../../Context/WeatherContext';

function CityList({citiesArr,setListHidden}) {
  const {fetchWeatherData} = useContext(weatherContext);

  function viewData(city){
    setListHidden(true);
    fetchWeatherData(city.lat,city.lon);
  } 

  useEffect(() => {
    console.log("loaded");
  },[]);

  return (
    <div id='citylist-container'>
       {
          citiesArr.map((city) => 
           <p className='citylist-item' key={city.lat} onClick={() => viewData(city)}>
                {city.name}, {city.state}, {city.country}
           </p>
        )
       }
    </div>
  )
}

export default CityList

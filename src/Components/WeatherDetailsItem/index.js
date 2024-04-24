import React from 'react';
import "./style.css";

function WeatherDetailsItem({icon,title,detail}) {
  return (
    <div className='weather-item'>
        <img src={icon} className='weather-icon'/>
        <div>
            <p className='weather-item-title'>{title}</p>
            <h2 className='weather-item-detail'>{detail}</h2>
        </div>
    </div>
  )
}

export default WeatherDetailsItem

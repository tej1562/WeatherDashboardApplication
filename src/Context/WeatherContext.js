import React, { useState } from 'react';

export const weatherContext = React.createContext("");

function WeatherContext({children}) {
  const [weather,setWeather] = useState(null);

  function fetchWeatherData(lat,lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bbec3ac59163c91b75b359d0c3878c7a&lang=en&units=metric`;
    
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(weatherData => {
       setWeather({
          temp: weatherData.main.temp,
          desc: weatherData.weather[0].main,
          city: weatherData.name,
          wind: weatherData.wind.speed,
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          visibility: weatherData.visibility,
          sunrise: weatherData.sys.sunrise,
          sunset: weatherData.sys.sunset
       });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } 

  const store = {
    weather,
    fetchWeatherData
  };

  return (
    <weatherContext.Provider value={store}>
        {children}
    </weatherContext.Provider>
  )
}

export default WeatherContext

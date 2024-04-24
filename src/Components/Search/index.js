import React, { useState } from 'react'
import CityList from '../CityList';
import "./style.css";

function Search() {
  const [citiesArr,setCitiesArr] = useState([]);
  const [listHidden,setListHidden] = useState(true);

  function fetchCities(cityName){
    if(cityName === "")
    {
      setListHidden(true);
      return;
    }

    setListHidden(false);

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=bbec3ac59163c91b75b359d0c3878c7a&lang=en`;

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
       setCitiesArr(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } 

  return (
    <div id='search-container'>
        <div className='input-container weather-item'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input id='city-input' type='text' placeholder='Search location here' onChange={(e) => {fetchCities(e.target.value)}}/>
        </div>
        {!listHidden && <CityList setListHidden={setListHidden} citiesArr={citiesArr}/>}
    </div>
  )
}

export default Search;

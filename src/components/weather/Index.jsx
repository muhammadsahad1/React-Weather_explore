import React, { useState } from "react";
import Search from "../search/Index";
import API from "../../weatherApi/WeatherApi";

const Weather = () => {

  const [search,setSearch] = useState('')
  const [loading,setLoad] = useState(false)
  const [weatherData,setWeatherData] = useState([])

  const fetchWeatherData = async (params) => {

    try {

      const response = await fetch(`${API.baseURL}q=${params}&appid=${API.API_KEY}`)
      const data = await response.json()
      console.log(data)
      setWeatherData(...data)
    } catch (error) {
      
    }
    console.log("weatherData",weatherData)  
  }
  
  const handleSearch = () => {
    fetchWeatherData(search)
  }

  return (
    <div className="weatherDiv">
      <h2>Weather</h2>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
    </div>
  );
};

export default Weather;

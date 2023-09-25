import React, { useState, useEffect, useRef } from 'react';
import "../Styles/Weather.css";
import {AiOutlineSearch} from "react-icons/ai";

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("");
  const [location, setLocation] = useState("Gharuan");
  const [newLocation, setNewLocation] = useState("");
  const searchButtonRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a672a08e3cf56946c57d6f477cd6d47a`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
        console.log(weatherData.weather[0].main);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    const getWeatherBackgroundClass = () => {
      if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
        const weatherCondition = weatherData.weather[0].main.toLowerCase();
        switch (weatherCondition) {
          case 'haze':
            return 'haze';
          case 'clear':
            console.log("ok");
            return 'sunny';
          case 'clouds':
            return 'cloudy';
          default:
            return ''; 
        }
      }
      return ''; 
    };

    const newBackgroundClass = getWeatherBackgroundClass();
    setBackgroundClass(newBackgroundClass);
  }, [weatherData]);

  const formatTemp = (temp) => {
    return temp.toFixed(2);
  }
  const handleChange = (e) => {
    setNewLocation(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchButtonRef.current.click();
    }
  };
  const handleClick = () => {
    console.log(newLocation);
    setLocation(newLocation);
  };


  return (
    <div className={`weather-container ${backgroundClass}`} >
      <div className="weather-flex">
        <div className="first-box">
          <div className="inputholder">
          <input type="text" name='location' value={newLocation} onKeyUp={handleInputKeyPress} onChange={handleChange} placeholder="Change Location" />
          <button onClick={handleClick} ref={searchButtonRef}  className="search-icon">
            <AiOutlineSearch />
          </button>
          </div>
        </div>
        <div className="second-box">
        {weatherData ? (
          
          <div className='info-container' >
            <h1 className='weather-heading'>{formatTemp(weatherData.main.temp-273)}°C</h1>
            <h1 className='weather-heading2'>Weather in {weatherData.name}, {weatherData.sys.country}</h1>
          </div>
        ) : (
          <div className="loading-screen">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

          </div>
        )}
        </div>

        </div>
      
    </div>
  );
}

export default WeatherComponent;


// eac5c89303da4094b448050f2c7fce92


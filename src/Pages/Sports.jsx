import React, { useState } from 'react'
import SideBar from '../Components/LandingPage/SideBar'
import Navbar from '../Components/LandingPage/Navbar'
import WeatherComponent from '../Components/LandingPage/WeatherComponent';
import Greetings from '../Components/LandingPage/Greetings';
import SportsNews from '../Components/LandingPage/SportsNews';

export default function Sports() {
  const [status, setStatus] = useState(false);
  return (
    <>
    
    <Navbar status={status} setStatus={setStatus}/>
    <div className='landing-container'>
        <SideBar status={status}/>
      <div className="right-container">
        <div className="top-section">
          <Greetings />
          <WeatherComponent />

        </div>
        <SportsNews />
      </div>
    </div>
    </>
  )
}

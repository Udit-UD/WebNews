import React, { useState } from 'react'
import SideBar from '../Components/LandingPage/SideBar'
import Navbar from '../Components/LandingPage/Navbar'
import WeatherComponent from '../Components/LandingPage/WeatherComponent';
import Greetings from '../Components/LandingPage/Greetings';
import ScienceNews from '../Components/LandingPage/ScienceNews';

export default function Science() {
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
        <ScienceNews />
      </div>
    </div>
    </>
  )
}

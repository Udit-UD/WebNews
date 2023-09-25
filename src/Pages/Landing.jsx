import React, { useState } from 'react'
import SideBar from '../Components/LandingPage/SideBar'
import Navbar from '../Components/LandingPage/Navbar'
import WeatherComponent from '../Components/LandingPage/WeatherComponent';
import NewsComponent from '../Components/LandingPage/NewsComponent';
import Greetings from '../Components/LandingPage/Greetings';

export default function Landing({authenticated}) {
  const [status, setStatus] = useState(false);
  return (
    <>
    
    <Navbar status={status} authenticated={authenticated} setStatus={setStatus} />

    <div className='landing-container'>
        <SideBar status={status}/>
      <div className="right-container">
        <div className="top-section">
          <Greetings />
          <WeatherComponent />

        </div>
        <NewsComponent />
      </div>
    </div>
    </>
  )
}

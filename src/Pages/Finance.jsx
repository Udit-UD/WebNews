import React, { useState } from 'react'
import SideBar from '../Components/LandingPage/SideBar'
import Navbar from '../Components/LandingPage/Navbar'
import WeatherComponent from '../Components/LandingPage/WeatherComponent';
import Greetings from '../Components/LandingPage/Greetings';
import FinanceNews from '../Components/LandingPage/FinanceNews';

export default function Finance() {
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
        <FinanceNews />
      </div>
    </div>
    </>
  )
}

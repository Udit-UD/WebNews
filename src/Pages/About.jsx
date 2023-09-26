import React, { useState } from 'react'
import SideBar from '../Components/LandingPage/SideBar'
import Navbar from '../Components/LandingPage/Navbar'
import AboutComponent from '../Components/LandingPage/AboutComponent';
import "./Styles/About.css";

export default function About({authenticated}) {
  const [status, setStatus] = useState(false);
  return (
    <>
    
    <Navbar status={status} authenticated={authenticated} setStatus={setStatus} />

    <div className='landing-container'>
        <SideBar status={status}/>
      <div className="right-container">
        <AboutComponent />
      </div>
    </div>
    </>
  )
}

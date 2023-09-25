import React from 'react'
import "../Styles/navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';
import Logo from "../../assets/Images/Logo.png";
import {auth} from "../../firebase"; 

export default function Navbar({status, setStatus, authenticated}) {
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('User has been logged out.');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };
  return (
    <div className='navbar-container'>
      <div className="hamburger">
        <GiHamburgerMenu onClick={() => setStatus(!status)} />
      </div>
      <div className="logo">
        <img src={Logo} style={{width: "40%"}} alt="" />
      </div>
      <div className="flex-grow">

      </div>

      <div className="nav-buttons">
  {authenticated ? (
    <button className="nav-btn" onClick={handleLogout} style={{width: "30%"}}>
      Logout
    </button>
  ) : (
    <>
      <Link to="/login" className="nav-links">
        <button className="nav-btn">Login</button>
      </Link>
      <Link to="/signup" className="nav-links">
        <button className="nav-btn">Signup</button>
      </Link>
    </>
  )}
</div>



    </div>
  )
}

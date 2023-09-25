import React from 'react'
import "../Styles/sidebar.css";
import { GiPopcorn, GiPayMoney} from "react-icons/gi";
import {MdSportsCricket, MdScience} from "react-icons/md";
import {AiFillHome, AiFillInfoCircle} from "react-icons/ai";
import {RiGovernmentFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function SideBar({status}) {


  return (
    <div className='sidebar-container' style={{minWidth: status ? "16%":"6%"}}>
      <div className="icon-container">

        <div className="icon">
          <Link className="sidebar-link" to="/">
            <AiFillHome className='iconn'/>
            <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>Home</p>

          </Link>
        </div>
        <div className="icon">
          <Link className="sidebar-link" to="/cinema">
            <GiPopcorn className='iconn'/>
            <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>Cinema</p>
          </Link>

        </div>
        <div className="icon">
          <Link className="sidebar-link" to="/finance">
            <GiPayMoney className='iconn'/>
            <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>Finance</p>
          </Link>

        </div>
        
        <div className="icon">
          <Link className="sidebar-link" to="/sports">
            <MdSportsCricket className='iconn'/>
            <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>Sports</p>
          </Link>

        </div>
        
        <div className="icon">
          <Link className="sidebar-link" to="/science">
            <MdScience className='iconn'/>
            <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>Science</p>
          </Link>

        </div>

        <div className="icon" style={{marginTop: "25vh"}} >
          <Link className="sidebar-link" to="/about">
          
          <AiFillInfoCircle className='iconn'/>
          <p style={{display: status ? 'block': 'none', paddingLeft: "0.5em"}} className='p-sidebar'>About us</p>
          </Link>

        </div>

      </div>
    </div>
  )
}

import React, { useState } from 'react'
import "./Nav.css"
import img from "../../assets/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Nav() {
  let [visible ,setvisible]=useState(false)
  return (
   
    <div id="nav">
      {visible?<div className="hamburger">
        <Link to={"/Login"}><div className="ham1">Login</div></Link>
        <Link to={"/Signup"}><div className="ham1">SignUp</div></Link>
        <Link to={"/listing"}><div className="ham1">List Your Home</div></Link>
        <Link to={"/Contact"}><div className="ham1">Help Center</div></Link>
      </div>:<div></div>}
      <div className="nav1">
        <Link to={""}><div className="logo">
          <img src={img} alt='' width="50px"/>
          <h1>Private Property Rental</h1>
        </div></Link>
       <div className="search">
        <input type='text' placeholder='Search Destination'/>
        <button><span>Search</span><CiSearch /></button>
       </div>
       <div className="ham">
        <Link to={"/listing"}><button id='btn1'>List Your Home</button></Link>
        <button id='btn2' onClick={()=>{
          setvisible(prev=>!prev)
        }}><GiHamburgerMenu id='svg1' /><CgProfile  id='svg2'/></button>
       </div>
      </div>
      <div className="nav2">
        <NavLink to={""}><div className="svg1"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
        <NavLink to={"/Houses"}><div className="svg1"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
        <div className="svg1"><MdBedroomParent /><h3>Rooms</h3></div>
        <div className="svg1"><PiFarm /><h3>Farm Houses</h3></div>
        <div className="svg1"><MdOutlinePool /><h3>Pool Houses</h3></div>
        <div className="svg1"><LuTentTree /><h3>Tent Houses</h3></div>
        <div className="svg1"><GiWoodCabin /><h3>Cabins</h3></div>
        <div className="svg1"><SiHomeassistantcommunitystore /><h3>Shops</h3></div>
        <div className="svg1"><FaTreeCity /><h3>Forest Houses</h3></div>

        </div>
      </div>
    
  )
}

export default Nav
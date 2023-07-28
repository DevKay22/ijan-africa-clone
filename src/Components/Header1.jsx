import React from 'react';
import "../Styles/Header1.css";
import "../Styles/Fonts.css";
import logo from "../Images/ijan-logo.png"

const Header1 = () => {
  return (
    <div classname="head">
        <div className='logo1'>
            <img src={logo} alt="ijan-logo" />

        </div>

        <div className='nav'>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
            <p>Students Verification</p>
            <h2>Bobo</h2>

        </div>
    </div>
  )
}

export default Header1
import React from 'react';
import "../Styles/Header.css";
import "../Styles/Fonts.css";
import {BiLogIn} from "react-icons/bi";
import {BiLogInCircle } from "react-icons/bi";
import insta from "../Images/insta2.jpg";
import lkln from "../Images/lkdln.png";

const Header = () => {
  return (
  <div className='header'>
    <div className='contact'>
        <h3>Call: 08165038801, 09071283244 </h3>

    </div>

    <div className='header2'>
        <div className='follow'>
            <h3> Follow us: </h3>
            <img src={insta} alt="instagram-logo" className='insta'/>
            <img src={lkln} alt="instagram-logo" className='lkdln'/>

        </div>

        <div className='reg'>
            <BiLogIn/>
            <h3> Login</h3>

            <BiLogInCircle />
            <h3>Register</h3>
        </div>

    </div>
   </div>
  )
}

export default Header
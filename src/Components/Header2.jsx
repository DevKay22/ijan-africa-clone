import React from 'react';
import "../Styles/Header2.css";
import "../Styles/Fonts.css";
import logo from "../Images/ijaan.png"
// import { Link } from 'react-router-dom';
import {BiSearch} from "react-icons/bi";

const Header2 = () => {
  return (
    <div className='hd2'>
        <div className='logo'>
            <img src={logo} alt="ijan-image" className='logo1'/>

        </div>

        <div className='navigation'>

            <ul >
              <li className='home'>
                <a>
                Home

                </a>
               
                 
              </li>

              <li>
                <a>
                Courses
                </a>
                  

            

              </li>

                <li>
                  <a>
                  Contact
                  </a>

              
                </li>

                <li>
                  <a>
                  Students Verification
                  </a>
               
                 

            
                </li>

                <li className='bisearch'>
           
                  <BiSearch />

             
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Header2
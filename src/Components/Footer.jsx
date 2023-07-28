import React from 'react';
import "../Styles/Footer.css";
import "../Styles/Fonts.css";
import insta from "../Images/ig.png";
import indn from "../Images/in.png";
import {BiCurrentLocation} from "react-icons/bi";
import {BiSolidPhoneCall} from "react-icons/bi";
import {BiLogoGmail} from "react-icons/bi";


const Footer = () => {
  return (
    <div className='foot'>
        <div className='ctc'>
            <h2 className='ctc_us'>Contact Us</h2>


            
                <p className='texxt'><span className='bi-icons'><BiCurrentLocation  /></span> Nigeria, Africa</p>


            
                <p className='texxt'> <span className='bi-icons'><BiSolidPhoneCall/></span> 07066961342, 09071283244</p>
           

          
                <p className='texxt'> <span className='bi-icons'> <BiLogoGmail/></span> info@ijanafrica.com</p>
          

          
                <img src={insta} alt="instagram-logo"  className='instag'/>
                <img src={indn} alt="linkedn-logo"  className='linkd'/>
           

        </div>

    {/* Support */}

        <div className='sspt'>

        <h2 className='ctc_us'>Support</h2>
        <ul>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>

        </div>
        <div className='sspt'>
        <h2 className='ctc_us'>Useful Link</h2>
        <ul>
            <li>Frontend/ Backend Fullstack Web dDvelopment</li>
            <li>Digital Marketing</li>
            <li>Human Resources</li>
            <li>Copyrighting</li>
            <li>Graphic Designs</li>
            <li>UI/UX Product Design</li>
            <li>Language (French, German and Spanish)</li>
        </ul>

        </div>
        <div className='news'>
        <h2 className='ctc_us'>Newsletter</h2>
        <p className='too'>
        To get the latest news and latest updates from us.
        </p>

        <form action="#"> 
            <label for="email" className='your'>Your e-mail address:</label>
            <input type="email" email="text" placeholder='Enter your email' style={{color: "green"}}/>
            <br />
            <button className='sub'>SUBSCRIBE</button>
        </form>

        </div>
    </div>
  )
}

export default Footer
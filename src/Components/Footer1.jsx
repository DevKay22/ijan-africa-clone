import React from 'react';
import "../Styles/Footer1.css";
import "../Styles/Fonts.css"

const Footer1 = () => {
  const today = new Date();
  return (
    <div className='footer1'>
        <h1>IJAN AFRICA</h1>

        <p>Copyright &copy; {today.getFullYear()} Ijanafrica. Designed by DrKay | All rights reserved. </p>
    </div>
  )
}

export default Footer1
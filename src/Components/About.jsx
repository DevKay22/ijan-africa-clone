import React from 'react';
import "../Styles/About.css";
import "../Styles/Fonts.css";
import img from "../Images/who-are we.jpg"

const About = () => {
  return (
    <div className='aboutUs'>
        <div>
            <h2 className='whoWe'>WHO ARE WE?</h2>
            <p className='abtText'>IJAN is a dynamic community of lifelong learners who are passionate about providing accessible and affordable learning solutions to empower you achieve your career goals.</p>
        </div>
        <div className='brain'>
        <img src={img} alt="ijan-logo" className='brainstorm'/>
        </div>
    </div>
  )
}

export default About
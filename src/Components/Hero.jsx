import React from 'react';
import "../Styles/Hero.css";
import "../Styles/Fonts.css";
import computer from "../Images/laptop.jpg";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='contents'>
            <div className='enjoy'>
                <h2>ENJOY SMOOTH LEARNING</h2>
            </div>
            <div className='learn'> 
                <h1>LEARN A HIGH-INCOME SKILL IN 6-12 MONTHS!</h1>
            </div>
            <div>
                <p>Don't slack in lack. Position yourself for global opportunities with new-age skills that differentiate you from the rest of the labour force.</p>
            </div>
            <div className='btns'>
                <button className='btn1'>View Courses</button>
                <h2 className='get'>Get Started</h2>
            </div>
        </div>
        <div>
        <img src={computer} alt="laptop-image" className='computer'/>
        </div>
    </div>
  )
}

export default Hero
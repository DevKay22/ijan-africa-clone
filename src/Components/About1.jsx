import React from 'react'
import "../Styles/About1.css";
import "../Styles/Fonts.css";
import what from "../Images/do-we-do.png"

const About1 = () => {
  return (
    <div className='abt1'>
        <div>
          <img src={what} alt='what-do-we-do' />
            
        </div>
        <div className='what'>
            <h2 className='whatDo'>
                WHAT DO WE DO?
            </h2>
            <p className='provide'>
            We provide accessible and affordable learning solutions to equip you with the skills needed to succeed in the workforce.
            </p>

        </div>
    </div>
  )
}

export default About1
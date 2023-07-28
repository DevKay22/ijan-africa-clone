import React from 'react';
import "../Styles/Testimonials.css";
import "../Styles/Fonts.css"

const Testimonials = () => {
  return (
    <div className='testi'>
        <p className='tesText'>TESTIMONIALS FROM IJAN</p>
        <h1 className='whatStudents'>What Students Say</h1>
        <div className='story'>
            <div className='testimo'>
                <p className='testii'>
                    IJAN changed my mind and my life. I am beginning to speak a foreign language alongside copywriting.

                </p>
                <br />
                <br />
                <br />
                <h2 className='name'>Natasha</h2>
                <p className='place'>Cuba</p>
            </div>
            <div className='testimo'>
                <p className='testii'>
                    The IJAN intensive was impressive and intensive with every knwoledgeable tutors.
                    I was able to learn the practical tools, and techniques on how to access, analyze and 
                    present datasets using Microsoft Excel. I also learned basic knowledge of python language. For 
                    me, it was a great platform to kickstart my learning experience in Data analysis and also develop employability skillss such as teamwork, communication, analytical and 
                    research skills among others. I appreciate the cordinators for ther efforts in creating this platform for learning. I highly recommend IJAN 
                    to amyone interested in learning and personal development.

                </p>

                <br />
                <br />
                <br />
                <h2 className='name'> Dave</h2>
                <p className='place'>Wales</p>
            </div>
            <div className='testimo'> 
                <p className='testii'>
                    I'm excited to begin this new chapter with IJAN. Getting into HR has always been a dream 
                    but it's not something taught in universities.
                   

                </p>
                <br />
                <br />
                <br />
                <h2 className='name'>Bash</h2>
                <p className='place'>Ire-Land</p>
            </div>

           
        </div>
    </div>
  )
}

export default Testimonials
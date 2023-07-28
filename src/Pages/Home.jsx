import React from 'react';
import Header from '../Components/Header';
import Header2 from '../Components/Header2';
import Header1 from '../Components/Header1';
import Hero from '../Components/Hero';
import About from '../Components/About';
import About1 from '../Components/About1';
import Testimonials from '../Components/Testimonials';
import Refund from '../Components/Refund';
import Footer from '../Components/Footer';
import Footer1 from '../Components/Footer1';

const Home = () => {
  return (
    <div>
        <Header />
        {/* <Header1 /> */}
        <Header2 />
        <Hero />
        <About /> 
        <About1 />
        <Testimonials />
        <Refund />
        <Footer />
        <Footer1 /> 
        
    </div>
  )
}

export default Home
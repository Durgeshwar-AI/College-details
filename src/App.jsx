import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import TItle from "./components/Title/TItle";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";


const App = () => {

  const [playState, setPlayState]=useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <TItle subtitle="our program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <TItle subtitle="grallery" title="Campus Photos" />
        <Campus />
        <TItle subtitle="testimonials" title="What A Student Says" />
        <Testimonials/>
        <TItle subtitle="contact us" title="Get In Touch" />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;

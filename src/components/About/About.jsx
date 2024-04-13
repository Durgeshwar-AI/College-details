import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpeg";
import play_icon from "../../assets/play.png";

const About = ({ setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" height="300px" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            
            setPlayState(true);

          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERISITY</h3>
        <h2>Nuturing Tomorrow's Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim
          cupiditate, ab autem nulla commodi dicta tempora eum? Sequi eum nemo
          ipsum quis natus enim quibusdam distinctio dignissimos numquam illum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti
          hic unde eos nemo velit eum odit sequi asperiores soluta ratione
          possimus, voluptates vero repellendus, repudiandae necessitatibus sit
          ullam non!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          quisquam voluptatem hic distinctio ratione ea maiores fugit
          exercitationem. Obcaecati unde amet vel atque non ex excepturi sunt
          placeat ipsa quas!
        </p>
      </div>
    </div>
  );
};

export default About;

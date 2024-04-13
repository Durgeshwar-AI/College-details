import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          illo, fugiat atque similique culpa quos reiciendis molestias quia
          maiores voluptatem eveniet corrupti earum, omnis hic voluptas nam
          perspiciatis veniam quo.
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="" width="20px" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

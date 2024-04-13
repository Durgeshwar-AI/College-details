import React from "react";
import "./Campus.css";
import campus from "../../assets/campus.jpeg";
import campus_1 from "../../assets/campus_1.jpeg";
import campus_2 from "../../assets/campus_2.jpeg";
import campus_3 from "../../assets/campus_3.jpeg";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={campus} alt="" />
        <img src={campus_1} alt="" />
        <img src={campus_2} alt="" />
        <img src={campus_3} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;

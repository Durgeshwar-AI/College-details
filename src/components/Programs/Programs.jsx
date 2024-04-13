import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program_1.jpeg";
import program_2 from "../../assets/program_2.png";
import program_3 from "../../assets/program_3.jpeg";
import program_icon_1 from "../../assets/program_icon_1.jpeg";
import program_icon_2 from "../../assets/program_icon_2.jpeg";
import program_icon_3 from "../../assets/program_icon_3.jpeg";

const Programs = () => {
  return (
    <div className="programs" id="program">
      <div className="program">
        <img src={program_1} alt="" height="300px" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" height="300px" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" height="300px" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

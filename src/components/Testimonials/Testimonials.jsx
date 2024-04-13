import React, { useRef } from "react";
import "./Testimonials.css";
import next_arrow from "../../assets/next-arrow.png";
import back_arrow from "../../assets/back-arrow.png";
import User1 from "../../assets/User1.jpeg";
import User2 from "../../assets/User2.jpeg";
import User3 from "../../assets/User3.jpeg";
import User4 from "../../assets/User4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_arrow}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_arrow}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                accusantium deleniti qui ducimus, facilis voluptate fuga animi
                eos, magni a sit consectetur odio nam harum, modi excepturi quos
                iste amet?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                accusantium deleniti qui ducimus, facilis voluptate fuga animi
                eos, magni a sit consectetur odio nam harum, modi excepturi quos
                iste amet?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                accusantium deleniti qui ducimus, facilis voluptate fuga animi
                eos, magni a sit consectetur odio nam harum, modi excepturi quos
                iste amet?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                accusantium deleniti qui ducimus, facilis voluptate fuga animi
                eos, magni a sit consectetur odio nam harum, modi excepturi quos
                iste amet?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import "./Contact.css";
import message_icon from "../../assets/message.png";
import email from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message
          <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit consequuntur autem atque dolorum omnis molestiae
          incidunt illo aliquam, nostrum obcaecati doloribus, eaque iusto
          quibusdam architecto soluta voluptate fuga, debitis doloremque?
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            conpro34@project.com
          </li>
          <li>
            <img src={phone} alt="" />
            +1000-1616516165
          </li>
          <li>
            <img src={location} alt="" />
            East Bengal Football groud <br />
            Football Ground
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Enter your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

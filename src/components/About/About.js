import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="aboutTitle">About</h1>
        <div className="aboutMeContainer">
          <img
            className="aboutMeImage"
            src={require("../../Media/michael.jpg").default}
            alt="me"
          ></img>
          <div className="aboutMeTextContainer">
            <p>
              My name is Michael Tan, and I am a recent graduate from the Mobile
              Application Development and Design program at Algonqin College.
            </p>

            <p>I was born and raised in Ottawa, Ontario, Canada.</p>

            <p>
              I am always learning new things to develop my skills as a
              developer. I learn new things quickly and dedicate all my skills
              and talents to develop high quality products.
            </p>

            <div>
              <p>phone: 613 700 9836</p>
              <p>email: tanm.kaming@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

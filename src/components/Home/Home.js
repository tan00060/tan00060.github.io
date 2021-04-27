import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Home.css";
import TextLoop from "react-text-loop";

export default function Home() {
  return (
    <div className="polarisBackgroundImage">
      <div className="homepageContainer">
        <div className="contentHomepageCenter">
          <h1 className="homeName">Michael Tan</h1>
          <h2 className="imText">
            I'm a{" "}
            <TextLoop>
              <span className="homeTitles">Mobile Developer.</span>
              <span className="homeTitles">Keyboard Enthusiast.</span>
              <span className="homeTitles">Photographer.</span>
            </TextLoop>
          </h2>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
}

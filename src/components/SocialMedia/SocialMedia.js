import React from "react";
import "./SocialMedia.css";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function SocialMedia() {
  return (
    <div className="socialMediaContainer">
      <a href="https://github.com/tan00060">
        <Github></Github>
      </a>
      <a href="https://www.linkedin.com/in/michael-tan-b49907193/">
        <Linkedin></Linkedin>
      </a>
    </div>
  );
}

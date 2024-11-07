import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile1_pic from "../assets/profile_pic1.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile1_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an Web Developer with a focus on creating engaging,
              high-performance applications. With a strong foundation in
              React.js, Node.js, and MongoDB, I build intuitive, responsive web
              solutions that enhance user experience and drive efficiency.{" "}
            </p>
            <p>
              My passion for Web Development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React.JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node.JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>10+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>1+</h1>
              <p>YEARS OF WORKING KNOWLEDGE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

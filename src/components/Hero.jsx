import React from "react";
import "./Hero.css";
import profile from "../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Krithik Raj, </span>software developer based in Mangalore,
        India.
      </h1>
      <p>
        With a strong foundation in web technologies, I specialize in building
        responsive, user-friendly applications.I love tackling complex problems
        and finding efficient solutions that enhance the user experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

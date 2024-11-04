import React from "react";
import "./Hero.css";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Krithik Raj, </span>a passionate and detail-oriented software
        developer based in Mangalore, India.
      </h1>
      <p>
        With a strong foundation in web technologies, I specialize in building
        responsive, user-friendly applications.I love tackling complex problems
        and finding efficient solutions that enhance the user experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

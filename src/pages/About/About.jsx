import React from "react";
import "./About.css";
import Profile from "../../assets/img/profile.jpg";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Profile} alt="Profile_Pic" />
          </div>
          <Slide top cascade>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I embarked on my journey as a MERN Stack Developer just over a
                year ago, and I've been passionate about creating innovative web
                and mobile solutions ever since. My career in IT has been a
                progression of learning, hands-on experience, and a commitment
                to excellence. Possess experience with 3+ programming languages.
                partially skilled in JavaScript. Seeking to use my Web
                Development experience in an entry-level position.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default About;

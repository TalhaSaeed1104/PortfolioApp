import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/CV-Final.pdf";
import { useTheme } from "../../contest/ContextTheme";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={25} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["MERN Stack Developer  !", "Full Stack Developer  !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="http://api.whatsapp.com/send?phone=03338975949"
              rel="noreferrer"
              target="_black"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="Talha-CV">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

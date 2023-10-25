import { React, useState } from "react";
import Header from "../components/Header";
import SvgComponent from "../components/SvgComponent";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const pdpStyle = {
    marginTop: "7.5%",
    width: "75%",
    transition: "all ease-in-out 0.2s",
    filter: isHover ? "grayscale(1)" : "grayscale(0)",
  };

  const scotchStyle = {
    width: "50%",
    top: "5%",
    right: "0%",
    rotate: "45deg",
  };

  const titleStyle = {
    fontSize: "3rem",
    marginTop: "-50px",
  };

  return (
    <div>
      <Header />
      <section className="container-fluid d-flex justify-content-around align-items-center">
        <div className="col-4 position-relative d-flex align-items-center justify-content-center">
          <img
            src="./img/scotch.png"
            alt="scotch"
            className="position-absolute scotch z-index-10"
            style={scotchStyle}
          />
          <img
            src="./img/cadre.png"
            alt="cadre"
            className="position-absolute img-fluid"
          />
          <img
            src="./img/photo-vic.jpg"
            alt="victoria"
            style={pdpStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-around position-relative">
          <SvgComponent />
          <h1 className="text-center text-white" style={titleStyle}>
            Bienvenue sur mon portfolio !
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;

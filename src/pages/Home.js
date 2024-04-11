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
    right: "-5%",
    rotate: "45deg",
  };

  const titleStyle = {
    fontSize: "2.5rem",
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
            src="./img/pdp.jpg"
            alt="me"
            style={pdpStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        
        <div className="h-100 col-6 d-flex flex-column justify-content-evenly position-relative">
          <SvgComponent />
          <h2 className="text-center text-white" style={titleStyle}>
            Welcome to my awesome website !
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;

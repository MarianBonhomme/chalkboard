import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const postitStyle = {
  position: "absolute",
  width: "90%",
};

const imgStyle = {
  width: "40%",
  zIndex: "1",
};

const textStyle = {
  position: "absolute",
  color: "white",
  fontFamily: "chalk",
  fontSize: "1.5rem",
  bottom: "0",
  zIndex: "1",
};

const Hobbie = () => {
  return (
    <div>
      <Header />
      <section className="hobbie container-fluid d-flex align-items-center">
        <NavLink
          to={"#"}
          className="col-4 d-flex flex-column justify-content-center align-items-center position-relative h-100 postit-left"
        >
          <img
            src="./img/postit-green.png"
            alt="postit"
            style={postitStyle}
            data-aos="zoom-out"
          />
          <img
            src="./img/street.jpg"
            alt=""
            className="street"
            style={imgStyle}
            data-aos="zoom-out"
          />
          <p style={textStyle}>Street Workout</p>
        </NavLink>
        <NavLink
          to={"#"}
          className="col-4 d-flex flex-column justify-content-center align-items-center position-relative h-100 postit-right"
        >
          <img
            src="./img/postit-yellow-2.png"
            alt="postit"
            style={postitStyle}
            data-aos="zoom-out"
          />

          <img
            src="./img/voyage.jpg"
            alt=""
            className="voyage"
            style={imgStyle}
            data-aos="zoom-out"
          />
          <p style={textStyle}>Voyages</p>
        </NavLink>
        <NavLink
          to={"#"}
          className="col-4 d-flex flex-column justify-content-center align-items-center position-relative h-100 postit-left"
        >
          <img
            src="./img/postit-purple.png"
            alt="postit"
            style={postitStyle}
            data-aos="zoom-out"
          />

          <img
            src="./img/randonnees.jpg"
            alt=""
            className="randonnees"
            style={imgStyle}
            data-aos="zoom-out"
          />
          <p style={textStyle}>Randonnées</p>
        </NavLink>
      </section>
    </div>
  );
};

export default Hobbie;

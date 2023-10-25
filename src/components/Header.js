import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <div className="logo d-flex align-items-center">
          <img src="./img/sun.svg" alt="logo sun" />
          <h3 className="text-white">Victoria Carobbi</h3>
        </div>
      </NavLink>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Qui suis-je ?</li>
        </NavLink>
        <NavLink
          to="/school"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Diplômes</li>
        </NavLink>
        <NavLink
          to="/pro"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Professions</li>
        </NavLink>
        <NavLink
          to="/hobbie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Passions</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Coordonnées</li>
        </NavLink>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className="header d-flex justify-content-between align-items-center position-relative z-index-10">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;

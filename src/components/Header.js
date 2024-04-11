import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <div className="logo d-flex align-items-center">
          <img src="./img/sun.svg" alt="logo sun" />
          <h1 className="text-white">John Doe</h1>
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
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/service"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Service</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
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

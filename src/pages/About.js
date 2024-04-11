import React from "react";
import Header from "../components/Header";
import AboutList from "../components/AboutList";

const spanStyle = {
  fontSize: "5rem"
}

const h3Style = {
  fontSize: "3rem",
}

const pStyle = {
  fontSize: "1.2rem",
};

const ulStyle = {
  margin: "0",
  padding: "0",
};

const About = () => {
  return (
    <div>
      <Header />
      <section className="about container-fluid d-flex justify-content-evenly align-items-center">
        <div className="col-6 position-relative d-flex flex-column justify-content-center text-white" data-aos="fade-right">
          <h3 style={h3Style}>About Me <span className="text-yellow" style={spanStyle}>...</span></h3>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab a, delectus aspernatur ex nulla, illum sint, ullam maxime nam provident. 
            Dolore commodi distinctio odio exercitationem culpa adipisci deleniti impedit!
          </p>
        </div>

        <div
          className="col-5 position-relative d-flex align-items-center justify-content-center"
        >
          <img
            src="./img/notes-2.png"
            alt="notes"
            className="position-absolute img-fluid"
          />
          <div className="z-index-1 d-flex justify-content-center">
            <ul className="col-12" style={ulStyle}>
              <AboutList id="2" content="Web Developer" />
              <AboutList id="3" content="UI/UX Designer" />
              <AboutList id="5" content="Freelancer" />
              <AboutList id="4" content="Full Remote" />
              <AboutList id="1" content="Born the 18th of June 1992" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

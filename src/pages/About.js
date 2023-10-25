import React from "react";
import Header from "../components/Header";
import AboutList from "../components/AboutList";

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
      <section className="about container-fluid d-flex justify-content-around align-items-center">
        <div className="col-6 position-relative d-flex align-items-center justify-content-center">
          <p className="text-white" style={pStyle}>
            Hello,<br></br>Je m'appelle Victoria et je suis actuellement
            étudiante en deuxième année de Master Management du Sport au sein de
            l'école de WIN Sport School de Montpellier. Je réalise cette
            formation en alternance dans le club de golf Gardiole de Fabrègues.
            <br></br>Titulaire d'un Bac ES, d'un BTS Négociation et
            Digitalisation de la Relation Client ainsi que d'une Licence dans le
            Management du Sport, j'ai acquis de nombreuses compétences dans
            divers domaines<br></br>
            <br></br>Je suis passionnée par le sport. Je pratique du Street
            Workout en compétition ainsi que de la Boxe en club. J'envisage par
            la suite, de travailler dans le domaine de l'évènement sportif afin
            d'organiser des manifestations sportives.
          </p>
        </div>

        <div
          className="col-5 position-relative d-flex align-items-center justify-content-center"
          data-aos="fade-left"
        >
          <img
            src="./img/notes-2.png"
            alt="notes"
            className="position-absolute img-fluid"
          />
          <div className="z-index-1 d-flex justify-content-center">
            <ul className="col-12" style={ulStyle}>
              <AboutList id="1" content="Née le 20 octobre 2001" />
              <AboutList id="2" content="Etudiante en M2 Management du Sport" />
              <AboutList id="3" content="En Alternance au Golf Gardiole" />
              <AboutList id="5" content="Titulaire d'un Bac +3" />
              <AboutList id="4" content="Pratique de Street Workout & Boxe" />
              <AboutList id="6" content="Titulaire du permis B" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

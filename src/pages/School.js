import React from "react";
import Header from "../components/Header";
import Diploma from "../components/Diploma";

const School = () => {
  return (
    <div>
      <Header />
      <section className="school container-fluid d-flex flex-column justify-content-around align-items-center py-5">
        <img
          src="./img/dotted-line.png"
          alt="dotted line"
          className="w-75 position-absolute"
          data-aos="zoom-in-right"
        />
        <div className="col-10 d-flex justify-content-around text-center text-white">
          <Diploma title="BAC ES" date="2019" color="purple" />
          <Diploma
            title="Bachelor Management du Sport"
            date="2022"
            color="blue"
          />
          <Diploma title="M2 Management du Sport" date="2024" color="green" />
        </div>
        <div className="col-10 d-flex justify-content-around text-center text-white">
          <Diploma title="BTS NDRC" date="2021" color="orange" />
          <Diploma title="M1 Management du Sport" date="2023" color="purple" />
        </div>
      </section>
    </div>
  );
};

export default School;

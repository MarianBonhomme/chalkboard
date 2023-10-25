import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contact container-fluid d-flex justify-content-around align-items-center">
        <div
          className="col-4 position-relative d-flex justify-content-center align-items-center"
          data-aos="fade-right"
        >
          <img
            src="./img/postit-yellow-1.png"
            alt=""
            className="position-absolute col-10"
          />
          <ul className="coord-list z-index-1 mty-5">
            <li>
              <img src="./img/phone-rounded.png" alt="phone" />
              06 30 56 78 76
            </li>
            <li>
              <img src="./img/mail-rounded.png" alt="mail" />
              victoriacarobbi@gmail.com
            </li>
            <li>
              <img src="./img/gps-rounded.png" alt="gps" />
              Montpellier
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="rs-list d-flex justify-content-between">
            <a
              href="https://www.linkedin.com/in/victoria-carobbi-772a261b1/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="d-flex align-items-center justify-content-center position-relative py-5">
                <img src="./img/linkedin-rounded.png" alt="linkedin" />
                <p className="position-absolute text-white pt-5">
                  Victoria Carobbi
                </p>
              </li>
            </a>
            <a
              href="https://www.instagram.com/victoria.crb/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="d-flex align-items-center justify-content-center position-relative py-5">
                <img src="./img/insta-rounded.png" alt="instagram" />
                <p className="position-absolute text-white">victoria.crb</p>
              </li>
            </a>
            <a
              href="https://www.tiktok.com/@victoria.crbb"
              target="_blank"
              rel="noreferrer"
            >
              <li className="d-flex align-items-center justify-content-center position-relative py-5">
                <img src="./img/tiktok-rounded.png" alt="tiktok" />
                <p className="position-absolute text-white">victoria.crbb</p>
              </li>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;

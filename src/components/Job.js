import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

const Job = (props) => {
  const { title, description, date, lieu, chalkId, highlightId } = props;

  const urlImg = "./img/chalk-circle-" + chalkId + ".png";
  const highlightImg = "./img/highlight-" + highlightId + ".png";

  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const jobStyle = {
    transform: isHovered ? "scale(1.1)" : "",
    transition: "all 0.2s",
    cursor: "pointer",
  };

  const titleStyle = {
    color: "white",
    fontSize: "1rem",
    textAlign: "center",
    marginTop: "25px",
  };

  const bgStyle = {
    background: "url(./img/notes-4.jpg)",
    backgroundSize: "cover",
  };

  const liStyle = {
    margin: "10px 0px",
    fontSize: "1.1rem",
  };

  const descriptionArray = [];

  for (let i = 0; i < description.length; i++) {
    descriptionArray.push(
      <li style={liStyle}>
        <img
          src="./img/check.png"
          alt="check"
          style={{ width: "20px", marginRight: "10px" }}
        />
        {description[i]}
      </li>
    );
  }

  return (
    <>
      <div
        className="col-6 d-flex justify-content-center align-items-center position-relative"
        onClick={() => setShow(true)}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={jobStyle}
      >
        <img src={urlImg} alt="" className="w-100" />
        <div className="col-10 d-flex justify-content-center align-items-center position-absolute h-100">
          <p style={titleStyle}>{title}</p>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <div className="test" style={bgStyle}>
          <div
            className="d-flex flex-column"
            style={{ minHeight: "90dvh", marginLeft: "18dvh" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <img src={highlightImg} alt="highlight" />
                <h3>{title}</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex align-items-center">
              <ul>{descriptionArray}</ul>
            </Modal.Body>
            <Modal.Footer>
              <div className="col-12 d-flex justify-content-between">
                <span>{lieu}</span>
                <span>{date}</span>
              </div>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Job;

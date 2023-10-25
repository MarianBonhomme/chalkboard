import React from "react";

const liStyle = {
  marginBottom: "20px",
};
const imgStyle = {
  width: "20px",
  marginRight: "20px",
};

const AboutList = (props) => {
  const url = "./img/circle-" + props.id + ".svg";

  return (
    <li style={liStyle}>
      <img src={url} alt="circle" style={imgStyle} />
      {props.content}
    </li>
  );
};

export default AboutList;

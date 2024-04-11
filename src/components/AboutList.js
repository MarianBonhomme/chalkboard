import React from "react";

const liStyle = {
  marginBottom: "25px",
};
const imgStyle = {
  width: "30px",
  marginRight: "30px",
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

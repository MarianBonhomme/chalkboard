import React, { useState } from "react";

const Diploma = (props) => {
  const { title, date, color } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColorStyle = {
    color: isHovered ? color : "white",
    transition: "all 0.2s",
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="diploma col-3 z-index-1"
      style={textColorStyle}
    >
      <h5>{title}</h5>
      <span>{date}</span>
    </div>
  );
};

export default Diploma;

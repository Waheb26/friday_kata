import React from "react";
import "./Rating.css";

const Rating = ({ skillName, points }) => {
  const maxPoints = 5;

  const renderPoints = () => {
    const pointElements = [];
    for (let i = 0; i < maxPoints; i++) {
      pointElements.push(
        <span key={i} className={i < points ? "filled" : "empty"}></span>
      );
    }
    return pointElements;
  };

  return <div className="rating-points">{renderPoints()}</div>;
};

export default Rating;

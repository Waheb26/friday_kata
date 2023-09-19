import React from "react";
import Rating from "./Rating";
import "./Skills.css";

const Skills = ({ character }) => {
  return (
    <div className="characteristics">
      {character && (
        <>
          <h2>Strength:</h2>
          <Rating skillName="Strength" points={character.strength} />
          <h2>Endurance:</h2>
          <Rating skillName="Endurance" points={character.endurance} />
          <h2>Charism:</h2>
          <Rating skillName="Charism" points={character.charism} />
        </>
      )}
    </div>
  );
};

export default Skills;

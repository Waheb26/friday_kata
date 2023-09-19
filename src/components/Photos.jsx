import React from "react";
import perso1 from "../assets/perso1.png";
import perso2 from "../assets/perso2.png";
import perso3 from "../assets/perso3.png";
import "./Photos.css";

const Photos = ({ onCharacterSelect }) => {
  const characters = [
    { name: "Riri", strength: 3, endurance: 5, charism: 1 },
    { name: "Fifi", strength: 4, endurance: 3, charism: 2 },
    { name: "Loulou", strength: 2, endurance: 1, charism: 5 },
  ];
  const characterImages = [perso1, perso2, perso3];

  return (
    <div className="photo-gallery">
      {characters.map((character, index) => (
        <img
          key={index}
          src={characterImages[index]}
          alt={character.name}
          onClick={() => onCharacterSelect(character)}
        />
      ))}
    </div>
  );
};

export default Photos;

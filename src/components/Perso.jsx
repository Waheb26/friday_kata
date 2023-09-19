import Rating from "./Rating";
import "./Perso.css";

const Perso = ({ character }) => {
  return (
    <div className="character-card">
      {character && (
        <>
          <h3>{character.name}</h3>
          <Rating skillName="Strength" points={character.strength} />
          <Rating skillName="Endurance" points={character.endurance} />
          <Rating skillName="Charism" points={character.charism} />
        </>
      )}
    </div>
  );
};

export default Perso;

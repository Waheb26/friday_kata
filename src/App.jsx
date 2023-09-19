import { useState } from "react";
import Skills from "./components/Skills";
import Photos from "./components/Photos";
import "./App.css";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [pointsAdded, setPointsAdded] = useState(false);

  const handleCharacterSelect = (characterData) => {
    setSelectedCharacter(characterData);
  };

  const handleAddPoint = () => {
    if (!pointsAdded && selectedCharacter) {
      const randomSkill = Math.floor(Math.random() * 3); // 0: Strength, 1: Endurance, 2: Charism
      switch (randomSkill) {
        case 0:
          setSelectedCharacter((prevCharacter) => ({
            ...prevCharacter,
            strength: prevCharacter.strength + 1,
          }));
          break;
        case 1:
          setSelectedCharacter((prevCharacter) => ({
            ...prevCharacter,
            endurance: prevCharacter.endurance + 1,
          }));
          break;
        case 2:
          setSelectedCharacter((prevCharacter) => ({
            ...prevCharacter,
            charism: prevCharacter.charism + 1,
          }));
          break;
        default:
          break;
      }
      setPointsAdded(true);
    }
  };

  const handleStartClick = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    setSelectedCharacter(randomCharacter);
  };

  return (
    <div className="App">
      <h1>You are {selectedCharacter ? selectedCharacter.name : "_____"}</h1>
      <Photos onCharacterSelect={handleCharacterSelect} />
      {selectedCharacter && (
        <>
          <Skills character={selectedCharacter} />
          <button
            className="Bonus"
            onClick={handleAddPoint}
            disabled={pointsAdded}
          >
            Bonus +1
          </button>
        </>
      )}
    </div>
  );
}

export default App;

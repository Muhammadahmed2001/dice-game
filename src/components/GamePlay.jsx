import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Totalscore from "./TotalScore";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState("1");
  const [score, setScore] = useState("0");
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false)

  const generateRendomnumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomnumber = generateRendomnumber();
    setCurrentDice(randomnumber);
    console.log(selectedNumber, randomnumber);
    if (selectedNumber === randomnumber) {
      setScore(score + randomnumber);
    } else {
      setScore(score - 2);
    }
    setSelectedNumber("");
  };
  return (
    <MainContainer>
      <div className="top-section">
        <Totalscore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
        />
      </div>
      <RoleDice showRule={showRule} setShowRule={setShowRule} setScore={setScore} currentDice={currentDice} roleDice={roleDice} />
      {showRule && <Rules />}
      

    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;

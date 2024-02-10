import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice, setScore, setShowRule, showRule }) => {
  const resetScore = () => {
    setScore("0")
  }
  const ruleShow = () => {
    setShowRule((prev)=> !(prev))
    console.log(showRule)
  }
  return (
    <DiceContainer>
      <div className="dice" onClick={() => roleDice()}>
        <img
          src={`../../src/assets/img/dice/dice_${currentDice}.png`}
          alt="dice 1"
        />
      </div>
      <p>Click on Dice to roll</p>
      <div className="dice-btn">
        <Button onClick={() => resetScore()} className="reset-btn">Reset Score</Button>
        <Button onClick={()=> ruleShow()}>{showRule ? "Hide" : "Show"} Rules</Button>
      </div>

    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice-btn{
    .reset-btn{
      background: white !important;
      color: #000;
      border: 2px solid #000;
  &:hover{
      color: white;
      background: #505050 !important;
  }
}
    display:flex;
    flex-direction:column;
  }
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;

const Button = styled.button`

color: white;
background: #000;
padding: 10px 18px;
border-radius: 5px;
min-width:220px;
border: none;
margin-top:20px;
cursor: pointer;

&:hover{
    border: 1px solid black;
    background:#9bd83a;
    color:#000;
    border: none;
}`

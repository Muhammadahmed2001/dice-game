import styled from "styled-components";

const RoleDice = () => {

const generateRendomnumber = ()=>{
    return Math.ceil(Math.random() * 6) 
}
console.log(generateRendomnumber())
    return (
        <DiceContainer>
            <div className="dice">
                <img src="../../src/assets/img/dice/dice_1.png" alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice{
      cursor: pointer;
  }
p{
    font-size:24px;
}


`;

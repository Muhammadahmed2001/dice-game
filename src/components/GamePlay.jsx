import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Totalscore from "./TotalScore";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <Totalscore />
        <NumberSelector />
      </div>
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

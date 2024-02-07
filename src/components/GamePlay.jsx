import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Totalscore from "./TotalScore";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <Totalscore />
        <NumberSelector />
      </div>
        <RoleDice />
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

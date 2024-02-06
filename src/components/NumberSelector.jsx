import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const numberArr = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {numberArr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <div>
        <p className="row-text">Select Number</p>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 1000;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 30px;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

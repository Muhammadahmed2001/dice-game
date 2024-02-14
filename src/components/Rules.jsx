import styled from "styled-components";


const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="rules-text">
                <p>Select any number.</p>
                <p>Click on dice image.</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice. </p>
                <p>if you get wrong guess then 1 point will be dedcuted. </p>
            </div>
        </RulesContainer>
    )
}


export default Rules;


const RulesContainer = styled.div`
max-width:800px;
margin:0 auto;
background-color:#8bd69b;   
padding:20px;
margin-top:40px;
border-radius:10px;
h2{
    font-size:24px;
}
.rules-text{
    margin-top:24px;
}



`
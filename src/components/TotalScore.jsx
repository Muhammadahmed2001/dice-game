
import styled from "styled-components"

const Totalscore = () => {
    return (


        <ScoreContainer>
            <h1>0</h1>
            <p>Total Score</p>
        </ScoreContainer>




    )
}


export default Totalscore




const ScoreContainer = styled.div`
max-width:100px;
margin:30px;
text-align: center;
    h1 {
        font-size:100px;
        line-height:80px;
    }
    p {
        font-size:24px;
        font-weight:500px;
        white-space: nowrap;
    }


    
`
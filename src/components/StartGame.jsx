

import styled from "styled-components"
import dices from "../assets/img/dices.png"


const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>

                <img src={dices} alt="" />
            </div>
            <div>
                <h1 className="content">
                    Dice Game
                </h1>
                <Button onClick={toggle}>
                    Play Now
                </Button>
            </div>
        </Container>
    )
}
export default StartGame

const Container = styled.div`
max-width:1180px;
display:flex;
align-items: center;
height:100vh;
margin: 0 auto;
h1{
    font-size : 96px;
    white-space: nowrap;

}

`


const Button = styled.button`
color: white;
background: #000;
padding: 10px 18px;
border-radius: 5px;
min-width:220px;
border: none;
cursor: pointer;

&:hover{
    border: 1px solid black;
    background:#9bd83a;
    color:#000;
    border: none;
}
`
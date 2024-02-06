

import styled from "styled-components"
import dices from "../assets/img/dices.png"


const StartGame = () => {
    return (
        <Container>
            <img src={dices} alt="" />
            <div>
                
            </div>
        </Container>
    )
}
export default StartGame

const Container = styled.div`
max-width:1180px;

`
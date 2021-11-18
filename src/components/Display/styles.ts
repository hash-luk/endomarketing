import styled from "styled-components"

export const Container = styled.div`
    width: 912px;
    height: 622px;

    .head {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    #form {
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }


    #select {
        width: 100px;
        height: 20px;
    }
    #create {
        width: 103px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        #add{
            width: 20px;
            height: 20px;
        }
    }

    @media(max-width: 768px) {
        width: 90%;
        height: 650px;

        .cardsDisplay {
            width: 100%;
            height: 100%;
        }

    }

    @media(max-width:480px) {
        width: 100vw;
        height: 900px;        
        
        .head {
            height: 100px;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
`

export const Title = styled.p`
    font-weight: light;
    font-size: 35px;
    color: #707070;
`
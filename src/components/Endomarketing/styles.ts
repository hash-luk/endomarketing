import styled from "styled-components";

export const Container = styled.div`
    width: 279px;
    height: 300px;
    background-color: #FFF2DE;
    border: 1px solid #DCD1C0;
    align-items: left;
    padding: 0px 21px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
        font-weight: bold;
        font-size: 16px;
        color: #707070;
    }

    p {
        font-weight: light;
        font-size: 14px;
        color: #707070
    }

    #button {
        width: 113px;
        height: 38px;
        color: #707070;
        background-color: #FFF2DE;
        border: 1px solid #707070;
    }
`
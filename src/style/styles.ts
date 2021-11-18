import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    background-color: #F2F3F5;

    #main {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #extra_content {
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        transform: translateY(25px);
    }
`
import styled from "styled-components"

export const AdContainer = styled.div`
    width: 279px;
    height: 333px;
    background-color: #FDFDFD;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    padding: 11px 3px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    margin-top: 17px;

    h3{
        font-weight: bold;
        font-size: 16px;
        color: #707070;
    }

    @media(max-width: 1024px) {
        width: 912px;
        align-items: center;
    }

    @media(max-width: 768px) {
        height: 300px;
        margin-top: 0;
    }

    @media(max-width: 480px) {
        display: block;
    }
`
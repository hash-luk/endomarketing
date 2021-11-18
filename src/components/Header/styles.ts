import styled from "styled-components"

export const HeadBar = styled.div`
    width: 100%;
    height: 55px;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.1);

    .logo {
        width: 100%;
        height: 100%;
        padding: 9px 40px;

        img {
            :hover {
                cursor: pointer;
            }
        }
    }

    @media(max-width: 768px) {
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width: 480px) {
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
` 
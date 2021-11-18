import styled from "styled-components";

export const Container = styled.div`
    width: 263px;
    height: 86,39;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(52,137,177,0.1);

    #header {
        width: 100%;
        height: 18px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 3px;

        p {
        color: #707070;
        font-weight: light;
        font-size: 13px;
        line-height: 17px;
     }

    }

    #icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 40px;
        height: 100%;

        #circle {
            width: 16px;
            height: 16px;
            background-color: #FFF;
            border-radius: 100px;
        }
    }

    #images {
        width: 255px;
        height: 59px;
        

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
            width: 59px;
            height: 59px;
            box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
        }
    }
    
    @media(max-width: 1024px) {
        width: 90%;

        #header {
            justify-content: space-between;
            padding: 0px 20px;
        }

        #images {
            width: 95%;
            justify-content: space-evenly;

            img {
                box-shadow: none;
            }
        }
    }
`
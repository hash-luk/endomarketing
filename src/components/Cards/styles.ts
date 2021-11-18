import styled from "styled-components"

export const CardContainer = styled.div`
    width: 912px;
    height: 622px;
    position: absolute;

    .Card {
        width: 894px;
        height: 93px;
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 7px 14px;
        background-color: #FFF;
        box-shadow: 0px 3px 6px rgba(0,0,0,0.5);
    }

    #cardContent {
        width: 557px;
        height: 77px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #content {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-left: 14px;

        .event {
            width: 29px;
            background-color: #EE8686;
            color: #FFF;
        }

        .publication {
            background-color: #707070;
            color: #FFF;
        }
    }

    #additionalInformation {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

    #cardImage {
        width: 73px;
        height: 73px;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
    
    p {
        color: #707070;
    }

    #event {
        font-weight: light;
        font-size: 9px;
        text-decoration: underline;
        color: #3489B1;
        margin-left: 6px;
    }

    .title {
        font-weight: bold;
        font-size: 16px;
    }

    .date {
        font-weight: light;
        font-size: 9px;
    }

    .description {
        font-weight: ligh;
        font-size: 13px;
    }



    @media(max-width: 768px) {
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        .Card {
            width: 700px;
        }

        #cardImage {
            width: 50px;
            height: 50px;
        }

        #cardContent {
            width: 500px;
        }

        #content {
            margin-left: 7px;
        }
    }

    @media(max-width:480px) {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    
        .Card {
            width: 100%;
            height: 300px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 5px;
        }

        #cardContent {
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }

        #cardImage {
            width: 50%;
            height: 100%;
        }

        #content {
            width: 100%;
            height: 100%;
            margin: 0;
            text-align: center;
            align-items: center;
            justify-content: space-evenly;

            p:last-child {
                font-size: 10px;
            }
        }

        #fabicon {
            display: none
        }
    }
`
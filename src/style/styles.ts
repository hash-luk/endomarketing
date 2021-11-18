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

    @media(max-width: 1176px) {
        max-height: 900px;

        #main {
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 20px 0px;
        }

        #extra_content {
            width: 912px;
            height: 400px;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
        }
    }

    @media(max-width: 1024px) {
        max-height: 900px;

        #main {
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 20px 0px;
        }

        #extra_content {
            width: 100%;
            height: 700px;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width: 768px) {
        max-height: 1100px;
        
        #main {
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 20px 0px;
        }

        #extra_content {
            width: 100%;
            height: 400px;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    @media(max-width: 480px) {
        height: 100vh;

        #main {
            height: 100vh;
            display: block;
        }

        #extra_content {
            width: 100%;
            height: 500px;
            transform: 0;
        }
    }


`
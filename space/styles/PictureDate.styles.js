import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: url('/images/stary-night.jpg');
    background-position: center;
    background-attachment:fixed;
    /* background-repeat: none; */
    overflow: hidden;
    min-height: 100vh;
    object-fit: fill;
`;

export const Content = styled.div`
    backdrop-filter: blur(2px);
    width: 1400px;
    margin: 0 auto;
    padding-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .title {
        color: #fff;
        font-size: 3rem;
        letter-spacing: 1.8px;
        text-transform: capitalize;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, .45);
        margin-bottom: 40px;
    }

    .picture-container {
        height: 608.38px;
        width: 1080px;
        object-fit: fill;
        border: 1px solid white;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, .25);
        position: relative;
        margin-bottom: 50px;
        background: rgba(0, 0, 0, .8);
    }

    .picture {
        object-fit: contain;
        object-position: bottom;
    }

    .camera-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 3;
        cursor: pointer;
    }

    .explanation {
        font-size: 1.5rem;
        text-align: center;
        line-height: 1.8;
        width: 1100px;
        margin-bottom: 30px;
    }

    .back-btn {
        background: transparent;
        border: none;
        margin-bottom: 30px;
        position: absolute;
        top: 100px;
        left: 0;
        cursor: pointer;
    }

    .back-icon {
        height: 36px;
        width: 36px;
    }

    @media screen and (max-width: 1400px) {
        width: 100%;
        text-align: center;

        .back-btn {
            padding: 0px 50px;
            top: 85px;
        }

        .title {
            width: 100%;
        }

        .picture-container {
        width: 78%;
        height: 100%;
        }

        .explanation {
        font-size: 1.5rem;
        text-align: center;
        line-height: 1.8;
        width: 80%;
    }
    }

    @media screen and (max-width: 1000px) {
        .title {
            font-size: 2.2rem;
            width: 88%;
        }

        .picture-container {
        margin-bottom: 40px;
        }

        .explanation {
        font-size: 1.5rem;
        text-align: center;
        line-height: 2;
        width: 80%;
    }
    }
`;
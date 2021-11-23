import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: url('/images/stary-night.jpg');
    background-position: center;
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
        margin-bottom: 70px;
    }

    .picture {
        object-fit: cover;
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
        margin-bottom: 70px;
    }

    @media screen and (max-width: 1400px) {
        width: 100%;
        text-align: center;

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
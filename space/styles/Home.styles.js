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

    .heading {
        font-size: 3rem;
        letter-spacing: 2px;
        margin-bottom: .7rem;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, .45);
    }

    .sub-heading {
        font-size: 1.5rem;
        margin-bottom: 4rem;
        text-align: center;
        line-height: 2;
        letter-spacing: 1.2px;
        width: 1050px;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, .35);
    }

    .picture-container {
        height: 608.38px;
        width: 1080px;
        object-fit: fill;
        border: 1px solid white;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, .25);
        position: relative;
        background: rgba(0, 0, 0, .8);
    }

    .picture {
        object-fit: contain;
    }

    .camera-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 3;
        cursor: pointer;
    }

    .picture-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .picture-title {
        color: #fff;
        margin: 1.8rem 0 0 0;
        font-size: 2rem;
    }

    .copyright {
        margin: .5rem 0 2rem 0;
        font-weight: 600;
        letter-spacing: .7px;
    }

    .explanation-heading {
        color: #fff;
        margin: 2rem 0 0 0;
        font-size: 1.7rem;
        letter-spacing: 1.3px;
    }

    .explanation {
        font-size: 1.5rem;
        text-align: center;
        line-height: 1.8;
        width: 1100px;
    }

    @media screen and (max-width: 1400px) {
        width: 100%;
        text-align: center;

        .heading {
            width: 100%;
        }

        .sub-heading {
            width: 80%;
            text-align: center;
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

    @media screen and (max-width: 740px) {
        .heading {
            font-size: 2.5rem;
            width: 88%;
        }

        .sub-heading {
            font-size: 1.3rem;
        }

        .picture-title {
            font-size: 1.7rem;
        }

        .copyright {
            font-size: .8rem;
        }

        .explanation-heading {
            font-size: 1.5rem;
        }

        .explanation {
        font-size: 1.2rem;
        text-align: center;
        line-height: 2;
        width: 80%;
    }
    }
`;
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

    .heading {
        font-size: 3rem;
        letter-spacing: 2px;
        margin-bottom: .7rem;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, .45);
        text-transform: capitalize;
        margin: 40px 0 80px 0;
    }

    .gallery {
        min-height: 100vh;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-bottom: 150px;

        .thumbnail {
            height: 98%;
            width: 100%;
            border: 1px solid white;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, .25);
            cursor: pointer;
            background-color: rgba(0, 0, 0, .25);
            transition: all 1s ease-in-out;            
        }

        .image {
            object-fit: cover;
            transition: all 1s ease-in-out;
        }

        .thumbnail:hover {
            box-shadow: 0px 0px 25px rgba(255, 255, 255, .25);
            .image {
                transform: scale(1.1);
            }
        }

        
    }
`;
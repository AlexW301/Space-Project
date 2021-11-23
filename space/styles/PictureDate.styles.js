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
    h1 {
        color: #fff;
    }
`;
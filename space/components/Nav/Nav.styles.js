import styled from "styled-components";

export const Wrapper = styled.div`
    height: 80px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    width: 100%;
    padding: 0 30px;
    position: absolute;
    top: 0;
    z-index: 2;
`;

export const Content = styled.div`
    font-size: 1.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    .logo {
        cursor: pointer;
    }

    .menu-btn {
        background-color: transparent;
        border: none;
        height: 40px;
        width: 40px;
        cursor: pointer;
    }

    .open-menu {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        position: absolute;
        height: 100vh;
        width: 100%;
        background-color: rgba(0,0,0,.9);
        top: -2000px;
        left: 0;
        transition: all .7s ease-in-out;
        z-index: -30;

        padding: 7rem 0 0 0;
        align-items: center;
    }

    /* .show-menu {
        display: block;
    } */

    .nav-link:link,
    .nav-link:visited {
        color: white;
        text-decoration: none;
        font-size: 3rem;
    }

    .nav-link:hover,
    .nav-link:active {
        
    }

    @media screen and (max-width: 600px) {
        .nav-link:link,
        .nav-link:visited {
        font-size: 2rem;
    }
    }
`;
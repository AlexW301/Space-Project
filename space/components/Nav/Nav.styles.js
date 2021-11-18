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

    .menu-btn {
        background-color: transparent;
        border: none;
        height: 40px;
        width: 40px;
        cursor: pointer;
    }

    .open-menu {
        display: none;
        position: absolute;
        height: 100vh;
        width: 100%;
        background-color: #fff;
        top: 80px;
        left: 0;
    }

    .show-menu {
        display: block;
    }
`;
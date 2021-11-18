import styled from "styled-components";

export const Wrapper = styled.div`
    height: 80px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    width: 100%;
    padding: 0 30px;
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
    }
`;
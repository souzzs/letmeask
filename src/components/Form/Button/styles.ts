import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 0 2rem;

    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    background-color: #835AFD;
    color: #fff;

    border: none;
    border-radius: 0.5rem;

    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

    cursor: pointer;
    transition: filter .2s;

    &:not(:disabled):hover{
        filter: brightness(.9);
    }

    &:disabled{
        opacity: .6;
        cursor: not-allowed;
    }
`;
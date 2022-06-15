import styled from "styled-components";

export const Button = styled.button`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background-color: #fff;
    border: 1px solid #835afd;
    cursor: pointer;

    display: flex;
`;

export const ContainerImage = styled.div`
    height: 100%;
    background-color: #835afd;
    padding: 0 .75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.span`
    width: 240px;
    font-size: .875rem;
    padding: .75rem;
    font-weight: 500;
    display: block;
    align-self: center;
    flex: 1;
    font-family: 'Roboto', sans-serif;
`;
import styled from "styled-components";

export const Input = styled.input`
    height: 50px;
    border-radius: .5rem;
    padding: 0 1rem;
    background-color: #fff;
    border: 1px solid #A8A8B3;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.125;
    
    outline: none;

    &:hover,
    &:focus{
        box-shadow: 0 0 0 1px #835AFD;
    }
`;
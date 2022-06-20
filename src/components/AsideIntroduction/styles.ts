import styled from "styled-components";

export const Aside = styled.aside`
    background-color: #835AFD;

    padding: 3.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1020px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3.75rem;
        padding: 1.875rem;
    }

`;

export const AsideImage = styled.img`
    max-width: 320px;

    @media only screen and (max-width: 1020px){
        height: 200px;
    }
`;

export const AsideTitle = styled.h2`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 2.25rem;
    line-height: 1.16;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: .5rem;

    @media only screen and (max-width: 1020px){
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }
`;

export const AsideDescription = styled.p`
    color: #F8F8F8;
    font-size: 1.5rem;
    line-height: 1.33;
    font-weight: 400;
    opacity: .7;

    @media only screen and (max-width: 1020px){
        max-width: 400px;
        font-size: 1.125rem;
    }
`;

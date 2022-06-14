import styled from 'styled-components';

export const Home = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 7fr 8fr;
`;

export const Main = styled.main`
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonGoogle = styled.button`
    width: 320px;
    height: 50px;
    background-color: #EA4335;

    margin-top: 3.5rem;
    border: none;
    border-radius: .5rem;

    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;

    cursor: pointer;
    transform:  filter .2s;

    &:hover{
        filter: brightness(.9);
    }
`;

export const Separator = styled.span`
    width: 100%;

    color: #A8A8B3;
    font-size: .875rem;
    margin: 2rem 0;

    display: flex;
    align-items: center;


    &::after{
        margin-left: 1rem;
    }

    &::before{
        margin-right: 1rem;
    }

    &::after,
    &::before{
        flex: 1;
        height: 1px;
        content: '';
        background-color: #A8A8B3;
    }
`;

export const MainForm = styled.form`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;


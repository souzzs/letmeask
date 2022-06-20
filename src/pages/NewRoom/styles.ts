import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewRoom = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 7fr 8fr;

    @media only screen and (max-width: 1020px){
        display: block;
    }
`;

export const Main = styled.main`
    display: grid;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1020px){
        padding: 1.875rem;
    }

    @media only screen and (max-width: 620px){
        height: 100vh;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
`;

export const MainForm = styled.form`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

export const RoomExisting = styled.p`
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #737380;;
`;

export const CustomLink = styled(Link)`
    color: #E559F9;
`;
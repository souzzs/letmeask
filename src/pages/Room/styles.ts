import styled from "styled-components";

export const Room = styled.section`

`;

export const Header = styled.header`
    padding: 1.25rem;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 4rem;
`;

export const HeaderContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    max-height: 45px;
`;

export const MainContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const InformationRoom = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center; 
    margin-bottom: 1.5rem;
`;

export const NameRoom = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #29292e;
`;

export const AmountQuestion = styled.span`
    background-color: #E559F9;
    font-weight: 500;
    font-size: .875rem;
    color: #fff;
    padding: .5rem 1rem;
    border-radius: 25px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 130px;
    max-height: 200px;
    resize: vertical;
    padding: .625rem 1rem;
    font-size: 1rem;
    font-family: 'Roboto';
    line-height: 1.5;
    border-radius: .5rem;
    border: 0;
    background-color: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    outline: none;

    &:hover,
    &:focus{
        box-shadow: 0 0 0 1px #835AFD;
    }
`;

export const FormFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const FormFoterP = styled.p`
    font-weight: 500;
    font-size: .875rem;
    color: #737380;
`;

export const SpanContrast = styled.span`
    color: #835AFD;
    cursor: pointer;
`;
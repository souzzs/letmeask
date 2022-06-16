import styled from "styled-components";

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

export const UserInfo = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;

    color: #29292e;
    font-weight: 500;
    font-size: .875rem;
`;

export const UserPhoto = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const SpanContrast = styled.span`
    color: #835AFD;
    cursor: pointer;
`;
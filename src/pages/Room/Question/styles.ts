import styled from "styled-components";

export const Question = styled.div`
    padding: 1.5rem;
    border-radius: .5rem;
    border: 1px solid #29292E;
    margin-bottom: 1rem;
`;

export const QuestionText = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #29292e;
    line-height: 1.5;
`;

export const QuestionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const QuestionAuthor = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;

    font-size: .875rem;
    font-weight: 400;
    color: #737380;
    line-height: 1.14;
`;

export const QuestionAuthorImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const QuestionsLike = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #737380;
`;

export const QuestionLikeImage = styled.img`
    cursor: pointer;
`;

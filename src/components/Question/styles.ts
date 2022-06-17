import styled from "styled-components";

type PropsQuestionDiv = {
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

type PropsButtonLiked = {
    liked: string | undefined;
}

export const Question = styled.div<PropsQuestionDiv>`
    padding: 1.5rem;
    border-radius: .5rem;
    border: 1px solid #29292E;
    margin-bottom: 1rem;

    background-color: ${p => p.isHighlighted ? '#F4F0FF' : ''};
    border-color: ${p => p.isHighlighted ? '#835AFD' : ''};
    background-color: ${p => p.isAnswered ? '#DBDCDD' : ''};
    border-color: ${p => p.isAnswered ? '#54ED63' : ''};
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

export const QuestionsLike = styled.button<PropsButtonLiked>`
    display: flex;
    gap: .5rem;
    align-items: flex-end;

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: ${p => p.liked ? '#835afd' : '#737380'};

    border: 0;
    background-color: transparent;

    cursor: pointer;
    transition: filter .2s;

    &:hover{
        filter: brightness(.7);
    }

    & svg path {
      stroke: ${p => p.liked ? '#835afd' : '#737380'};
    }
`;

export const ContainerButtonsActions = styled.div`
    
`;
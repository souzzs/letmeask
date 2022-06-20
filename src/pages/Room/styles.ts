import styled from "styled-components";

type PropsButtonLiked = {
    liked: string | undefined;
}


type HeaderContainerProps = {
    matchMedia: boolean;
}

export const Room = styled.section`

`;

export const Header = styled.header`
    padding: 1.25rem;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 4rem;
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: ${p => p.matchMedia ? 'column' : 'row'};
    gap:  ${p => p.matchMedia ? '1rem' : '0'};
    justify-content: space-between;
    align-items: center;
`;

export const ContainerButtonsHeader = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Logo = styled.img`
    max-height: 45px;
`;

export const MainContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 2rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

export const InformationRoom = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center; 
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
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

export const ContainerQuestions = styled.div`
    margin-top: 2rem;
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
import * as C from "./styles";
import { ReactNode } from "react";


type PropsQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

const Question = ({author, content, children, isAnswered, isHighlighted}: PropsQuestion) => {

  return (
    <C.Question isAnswered={isAnswered} isHighlighted={isHighlighted}>
        <C.QuestionText>{content}</C.QuestionText>
            <C.QuestionInfo>
                <C.QuestionAuthor>
                    <C.QuestionAuthorImage src={author.avatar} alt={author.name}/>
                    <p>{author.name}</p>
                </C.QuestionAuthor>
                <C.ContainerButtonsActions>
                  {children}
                </C.ContainerButtonsActions>
        </C.QuestionInfo>
    </C.Question>
  )
}

export default Question
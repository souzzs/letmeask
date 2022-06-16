import * as C from "./styles";
import like from '../../../assets/like.svg';

type QuestionProps = {
    content: string;
    author: {
        avatar: string,
        name: string
    };
    likeCount: number;
}

const Question = ({author, content, likeCount}: QuestionProps) => {
  return (
    <C.Question>
        <C.QuestionText>{content}</C.QuestionText>
            <C.QuestionInfo>
                <C.QuestionAuthor>
                    <C.QuestionAuthorImage src={author.avatar} alt={author.name}/>
                    <p>{author.name}</p>
                </C.QuestionAuthor>
                <C.QuestionsLike>
                    <p>{likeCount}</p>
                    <C.QuestionLikeImage src={like} alt='Ícone de um joinha com o dedão'/>
                </C.QuestionsLike>
        </C.QuestionInfo>
    </C.Question>
  )
}

export default Question
import * as C from "./styles";
import { ReactComponent as Like } from '../../../assets/like.svg';
import { database } from "../../../services/firebase";
import React from "react";
import { UserAuthContext } from "../../../store/UserAtuh";


type QuestionProps = {
    content: string;
    author: {
        avatar: string,
        name: string
    };
    likeCount: number;
    likeId: string | undefined;
    roomId: string | undefined;
    questionId: string;
}

type ButtonLikedProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    liked: string | undefined;
}

const Question = ({author, content, likeCount, likeId, roomId, questionId}: QuestionProps) => {
  const {user} = React.useContext(UserAuthContext);

  const handleSendLike = async () => {
    if (likeId) {
        await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
      } else {
        await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
          authorId: user?.id,
        })
    }
  }

//   const ButtonLike: React.FC<ButtonLikedProps> = ({liked}) => {
//     return (
//         <C.QuestionsLike onClick={handleSendLike} liked={likeId}>
//             {likeCount > 0 && <p>{likeCount}</p>}
//             <Like />
//         </C.QuestionsLike>
//     )
//   }

  return (
    <C.Question>
        <C.QuestionText>{content}</C.QuestionText>
            <C.QuestionInfo>
                <C.QuestionAuthor>
                    <C.QuestionAuthorImage src={author.avatar} alt={author.name}/>
                    <p>{author.name}</p>
                </C.QuestionAuthor>
                <C.QuestionsLike onClick={handleSendLike} liked={likeId}>
                    {likeCount > 0 && <p>{likeCount}</p>}
                    <Like />
                </C.QuestionsLike>
        </C.QuestionInfo>
    </C.Question>
  )
}

export default Question
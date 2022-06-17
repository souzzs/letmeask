import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useRoom from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import CopyCode from '../../components/CopyCode';
import Question from '../../components/Question';
import EmptyQuestions from '../../components/EmptyQuestions';
import FormQuestion from './FormQuestion';

import logo from '../../assets/logo.svg';
import { ReactComponent as Like } from '../../assets/like.svg';

import * as C from "./styles";

type RoomParams = {
  id: string
}

const Room = () => {
  const params = useParams<RoomParams>();
  const navigate = useNavigate();
  const {user} = useAuth();
  const [question, setQuestion] = React.useState('');
  const {questions, titleRoom, typeUser} = useRoom(params.id!, user?.id!);
  

  React.useEffect(() => {
    if(typeUser === 'adm'){
      navigate(`/admin/rooms/${params.id}`)
    }
    
  }, [typeUser, params.id, navigate]);

  const handleSendLike = async (questionId: string, likeId: string | undefined) => {
    if (likeId) {
        await database.ref(`rooms/${params.id}/questions/${questionId}/likes/${likeId}`).remove()
      } else {
        await database.ref(`rooms/${params.id}/questions/${questionId}/likes`).push({
          authorId: user?.id,
        })
    }
  }
  
  return (
    <C.Room>
      <C.Header>
        <C.HeaderContainer>
          <Link to='/'>
            <C.Logo src={logo} alt='Logo do site'/>
          </Link>
          <CopyCode code={params.id!} />
        </C.HeaderContainer>
      </C.Header>
      <main>
        <C.MainContainer>
          <C.InformationRoom>
            <C.NameRoom>Sala {titleRoom}</C.NameRoom>
            {questions.length !== 0 ? <C.AmountQuestion>{questions.length} pergunta(s)</C.AmountQuestion> : undefined}
          </C.InformationRoom>
          <FormQuestion id={params.id} question={question} setQuestion={setQuestion}/>
          <C.ContainerQuestions>
            {questions.length ? (
              questions.map(({content, author, likeCount, id, isAnswered, isHighlighted, likeId}) => {
                return (
                  <Question 
                    key={id} 
                    content={content} 
                    author={author}
                    isAnswered={isAnswered}
                    isHighlighted={isHighlighted}
                    >
                    {!isAnswered && (
                      <C.QuestionsLike 
                        onClick={() => handleSendLike(id, likeId)}
                        liked={likeId}
                      >
                        {likeCount > 0 && <p>{likeCount}</p>}
                        <Like />
                      </C.QuestionsLike>
                    )}
                  </Question>
                )
              })
            ) : ( <EmptyQuestions /> )}
          </C.ContainerQuestions>
        </C.MainContainer>
      </main>
    </C.Room>
  )
}

export default Room
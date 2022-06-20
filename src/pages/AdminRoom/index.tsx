import React from 'react'
import { database } from '../../services/firebase';
import useRoom from '../../hooks/useRoom';
import { useAuth } from '../../hooks/useAuth';

import * as C from "./styles";

import Button from '../../components/Form/Button';
import EmptyQuestions from '../../components/EmptyQuestions';
import Question from '../../components/Question';
import CopyCode from '../../components/CopyCode';

import logo from '../../assets/logo.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Answer } from '../../assets/answer.svg';
import useMedia from '../../hooks/useMedia';

type RoomParams = {
  id: string
}

const AdminRoom = () => {
  const params = useParams<RoomParams>();
  const navigate = useNavigate();
  const {user} = useAuth();
  const {questions, titleRoom, typeUser} = useRoom(params.id!, user?.id!);
  const matchMedia = useMedia('(max-width: 620px)');

  React.useEffect(() => {
    if(typeUser === 'adm'){
      navigate(`/admin/rooms/${params.id}`)
    }
    console.log('typeUser');
    
  }, [typeUser, params.id, navigate]);

  const handleQuestionDelete = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${params.id}/questions/${questionId}`).remove();
    }
  }

  const handleQuestionAnswered = async (questionId: string) => {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  const handleQuestionHighlight = async (questionId: string) => {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  const handleCloseRoom = async () => {
    await database.ref(`rooms/${params.id}`).update({
      endedAt: new Date(),
    });

    navigate('/');
  }

  return (
    <C.Room>
      <C.Header>
        <C.HeaderContainer matchMedia={matchMedia}>
          <Link to='/'>
            <C.Logo src={logo} alt='Logo do site'/>
          </Link> 
          <C.ContainerButtonsHeader>
            <CopyCode code={params.id!} />
            <Button style={{height: '40px'}} onClick={handleCloseRoom} text='Encerrar sala'/>
          </C.ContainerButtonsHeader> 
        </C.HeaderContainer>
      </C.Header>
      <main>
        <C.MainContainer>
          <C.InformationRoom>
            <C.NameRoom>Sala {titleRoom}</C.NameRoom>
            {questions.length !== 0 ? <C.AmountQuestion>{questions.length} pergunta(s)</C.AmountQuestion> : undefined}
          </C.InformationRoom>
          <C.ContainerQuestions>
            {questions.length ? (
              questions.map((q) => {
                return (
                  <Question 
                    key={q.id} 
                    content={q.content} 
                    author={q.author}
                    isAnswered={q.isAnswered}
                    isHighlighted={q.isHighlighted}
                  >
                    {!q.isAnswered && (
                      <C.ContainerButtonsAction>
                        <C.ButtonAction onClick={() => handleQuestionDelete(q.id)}>
                          <Delete />
                        </C.ButtonAction>
                        <C.ButtonAction onClick={() => handleQuestionAnswered(q.id)}>
                          <Check />
                        </C.ButtonAction>
                        <C.ButtonAction onClick={() => handleQuestionHighlight(q.id)}>
                          <Answer />
                        </C.ButtonAction>
                      </C.ContainerButtonsAction>
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

export default AdminRoom
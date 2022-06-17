import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserAuthContext } from '../../store/UserAtuh';

import * as C from "./styles";
import logo from '../../assets/logo.svg';
import CopyCode from '../../components/CopyCode';
import Question from './Question';
import EmptyQuestions from './EmptyQuestions';
import FormQuestion from './FormQuestion';
import useRoom from '../../hooks/useRoom';


type RoomParams = {
  id: string
}

const Room = () => {
  const params = useParams<RoomParams>();
  const {user} = React.useContext(UserAuthContext);
  const [question, setQuestion] = React.useState('');
  const {questions, titleRoom} = useRoom(params.id!, user?.id!);

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
              questions.map(({content, author, likeCount, id, likeId}) => <Question key={id} content={content} author={author} likeCount={likeCount} likeId={likeId} roomId={params.id} questionId={id}/>)
            ) : ( <EmptyQuestions /> )}
          </C.ContainerQuestions>
        </C.MainContainer>
      </main>
    </C.Room>
  )
}

export default Room
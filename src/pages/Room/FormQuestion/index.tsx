import React, { FormEvent } from 'react'
import { database } from '../../../services/firebase';
import { UserAuthContext } from '../../../store/UserAtuh';

import Button from '../../../components/Form/Button';
import * as C from "./styles";

type FormQuestionProps = {
    question: string;
    setQuestion:  React.Dispatch<React.SetStateAction<string>>;
    id: string | undefined;
}

const FormQuestion = ({question, setQuestion, id}: FormQuestionProps) => {
  const {user, signInWithGoogle} = React.useContext(UserAuthContext);

  const handleSendQuestion = async (e: FormEvent) => {
    e.preventDefault();

    if(question.trim() === '') return;

    const questionData = {
      content: question,
      author: {
        name: user?.name,
        avatar: user?.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${id}/questions`).push(questionData);
    setQuestion('');
  }

  return (
    <form onSubmit={handleSendQuestion}>
        <C.TextArea placeholder='O que você quer perguntar?' value={question} onChange={e => setQuestion(e.target.value)}/>
        <C.FormFooter>
            {user ? undefined : <C.FormFoterP>Para enviar uma pergunta, <C.SpanContrast onClick={signInWithGoogle}>faça seu login</C.SpanContrast></C.FormFoterP>}
            {user ? (
                <C.UserInfo>
                  <C.UserPhoto src={user.avatar} alt={user.name}/>
                  <span>{user.name}</span>
                </C.UserInfo>
            ) : undefined}
            <Button text='Enviar pergunta' disabled={!user}/>
        </C.FormFooter>
    </form>
  )
}

export default FormQuestion
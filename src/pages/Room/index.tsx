import React from 'react'
import * as C from "./styles";
import logo from '../../assets/logo.svg';
import Button from '../../components/Form/Button';
import { Link, useParams } from 'react-router-dom';
import CopyCode from '../../components/CopyCode';
import { UserAuthContext } from '../../store/UserAtuh';

type RoomParams = {
  id: string
}

const Room = () => {
  const params = useParams<RoomParams>();
  const {user, signInWithGoogle} = React.useContext(UserAuthContext);
  
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
            <C.NameRoom>Sala de react</C.NameRoom>
            <C.AmountQuestion>4 perguntas</C.AmountQuestion>
          </C.InformationRoom>
          <form>
            <C.TextArea placeholder='O que você quer perguntar?'/>
            <C.FormFooter>
              {user ? undefined : <C.FormFoterP>Para enviar uma pergunta, <C.SpanContrast onClick={signInWithGoogle}>faça seu login</C.SpanContrast></C.FormFoterP>}
              <Button text='Enviar pergunta' disabled={user ? true : false}/>
            </C.FormFooter>
          </form>
        </C.MainContainer>
      </main>
    </C.Room>
  )
}

export default Room
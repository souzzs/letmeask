import AsideIntroduction from '../../components/AsideIntroduction';

import logo from '../../assets/logo.svg';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

import * as C from "./styles";
import React from 'react';
import { UserAuthContext } from '../../store/UserAtuh';
import { useNavigate } from 'react-router-dom';

const NewRoom = () => {
  const {user} = React.useContext(UserAuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, []);

  return (
    <C.NewRoom>
        <AsideIntroduction />
        <C.Main>
            <C.MainContainer>
                <img src={logo} alt='System logo'/>
                <C.MainTitle>Crie uma nova sala - {user?.name}.</C.MainTitle>
                <C.MainForm>
                    <Input placeholder='Nome da sala'/>
                    <Button text='Criar sala' />
                </C.MainForm>
                <C.RoomExisting>Quer entrar em uma sala já existente? <C.CustomLink to='/'>Clique aqui</C.CustomLink></C.RoomExisting>
            </C.MainContainer>
        </C.Main>
    </C.NewRoom>
  )
}

export default NewRoom
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import AsideIntroduction from '../../components/AsideIntroduction';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

import logo from '../../assets/logo.svg';

import * as C from "./styles";
import useMedia from '../../hooks/useMedia';

const NewRoom = () => {
  const {user} = useAuth();
  const [nameRoom, setNameRoom] = React.useState('');
  const navigate = useNavigate();
  const matchMedia = useMedia('(max-width: 620px)');

  React.useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, [user, navigate]);

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault();
    
    if(nameRoom.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: nameRoom,
      authorId: user?.id
    });

    navigate(`/rooms/${firebaseRoom.key}`); 
  }

  return (
    <C.NewRoom>
        {!matchMedia && <AsideIntroduction />}
        <C.Main>
            <C.MainContainer>
                <img src={logo} alt='System logo'/>
                <C.MainTitle>Crie uma nova sala.</C.MainTitle>
                <C.MainForm onSubmit={handleCreateRoom}>
                    <Input placeholder='Nome da sala' value={nameRoom} onChange={e => setNameRoom(e.target.value)}/>
                    <Button text='Criar sala' />
                </C.MainForm>
                <C.RoomExisting>Quer entrar em uma sala já existente? <C.CustomLink to='/'>Clique aqui</C.CustomLink></C.RoomExisting>
            </C.MainContainer>
        </C.Main>
    </C.NewRoom>
  )
}

export default NewRoom
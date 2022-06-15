import AsideIntroduction from '../../components/AsideIntroduction';

import logo from '../../assets/logo.svg';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

import * as C from "./styles";
import React, { FormEvent } from 'react';
import { UserAuthContext } from '../../store/UserAtuh';
import { useNavigate } from 'react-router-dom';
import { database } from '../../services/firebase';

const NewRoom = () => {
  const {user} = React.useContext(UserAuthContext);
  const [nameRoom, setNameRoom] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, []);

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
        <AsideIntroduction />
        <C.Main>
            <C.MainContainer>
                <img src={logo} alt='System logo'/>
                <C.MainTitle>Crie uma nova sala - {user?.name}.</C.MainTitle>
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
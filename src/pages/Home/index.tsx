import AsideIntroduction from '../../components/AsideIntroduction';

import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/google-icon.svg';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import loginIconButton from '../../assets/login.svg';

import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { UserAuthContext } from '../../store/UserAtuh';
import React, { FormEvent } from 'react';
import { database } from '../../services/firebase';

const Home = () => {
  const navigate = useNavigate();
  const {user, signInWithGoogle} = React.useContext(UserAuthContext);
  const [roomCode, setRoomCode] = React.useState('');
  const handleCreateRoom = async () => {
    if(!user){
        await signInWithGoogle();
    }

    navigate('/rooms/new');
  }

  const handleJoinRoom = async (e: FormEvent) => {
    e.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      alert('Sala não existente !!!');
      setRoomCode('');
      return;
    }

    navigate(`/rooms/${roomCode}`);
  }

  return (
    <C.Home>
        <AsideIntroduction />
        <C.Main>
            <C.MainContainer>
                <img src={logo} alt='System logo'/>
                <C.ButtonGoogle onClick={handleCreateRoom}>
                    <img src={googleIcon} alt='Logo google'/>
                    Crie sua sala com o google
                </C.ButtonGoogle> 
                <C.Separator>ou entre em uma sala</C.Separator>
                <C.MainForm onSubmit={handleJoinRoom}>
                    <Input placeholder='Digite o código da sala' value={roomCode} onChange={e => setRoomCode(e.target.value)}/>
                    <Button icon={loginIconButton} iconAlt="Indica a entrada no site" text='Entrar na sala' />
                </C.MainForm>
            </C.MainContainer>
        </C.Main>
    </C.Home>
  )
}

export default Home
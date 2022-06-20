import React, { FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import useMedia from '../../hooks/useMedia';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import AsideIntroduction from '../../components/AsideIntroduction';

import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/google-icon.svg';
import loginIconButton from '../../assets/login.svg';

import * as C from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const {user, signInWithGoogle} = useAuth();
  const [roomCode, setRoomCode] = React.useState('');
  const matchMedia = useMedia('(max-width: 620px)');

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

    if (roomRef.val().endedAt) {
      alert('Sala encerrada.');
      setRoomCode('');
      return;
    }

    setRoomCode('');
    navigate(`/rooms/${roomCode}`);
  }

  return (
    <C.Home>
        {!matchMedia && <AsideIntroduction />}
        <C.Main>
            <C.MainContainer>
                <C.Logo src={logo} alt='System logo'/>
                {!user && (
                  <>
                    <C.ButtonGoogle onClick={handleCreateRoom}>
                      <img src={googleIcon} alt='Logo google'/>
                      Crie sua sala com o google
                    </C.ButtonGoogle> 
                    <C.Separator>ou entre em uma sala</C.Separator>
                  </>
                )}
                <C.MainForm onSubmit={handleJoinRoom}>
                    <Input placeholder='Digite o código da sala' value={roomCode} onChange={e => setRoomCode(e.target.value)}/>
                    <Button icon={loginIconButton} iconAlt="Indica a entrada no site" text='Entrar na sala' />
                </C.MainForm>
                {user && (
                  <>
                    <C.Separator>ou crie sua própria sala</C.Separator>
                    <Button text='Criar salar' style={{width: '320px'}} onClick={() => navigate('/rooms/new')}/>
                  </>
                )}
            </C.MainContainer>
        </C.Main>
    </C.Home>
  )
}

export default Home
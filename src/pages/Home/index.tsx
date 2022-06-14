import AsideIntroduction from '../../components/AsideIntroduction';

import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/google-icon.svg';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import loginIconButton from '../../assets/login.svg';

import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { UserAuthContext } from '../../store/UserAtuh';
import React from 'react';

const Home = () => {
  const navigate = useNavigate();
  const {user, signInWithGoogle} = React.useContext(UserAuthContext);

  const handleCreateRoom = async () => {
    if(!user){
        await signInWithGoogle();
    }

    navigate('/rooms/new');
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
                <C.MainForm>
                    <Input placeholder='Digite o código da sala'/>
                    <Button icon={loginIconButton} iconAlt="Indica a entrada no site" text='Entrar na sala' />
                </C.MainForm>
            </C.MainContainer>
        </C.Main>
    </C.Home>
  )
}

export default Home
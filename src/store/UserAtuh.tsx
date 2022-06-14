import React from 'react'
import { useNavigate } from 'react-router-dom';
import {firebase, auth} from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const UserAuthContext = React.createContext({} as AuthContextType);

interface UserAuthProps {
  children: React.ReactNode;
}

const UserAtuh = ({children}: UserAuthProps) => {
  const [user, setUser] = React.useState<User>();
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const {displayName, photoURL, uid} = user;

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        navigate('/rooms/new');
      }
    })
    console.log('Buscou dados');
    
    // Sempre é uma boa pratica remover eventos no retorno
    return () => {
      unsubscribe();
    }
  }, []);


  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider);

    if(response.user){
      const {displayName, photoURL, uid} = response.user;

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <UserAuthContext.Provider value={{user, signInWithGoogle}}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default UserAtuh
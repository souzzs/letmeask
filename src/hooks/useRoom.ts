import React from 'react'
import { database } from '../services/firebase';

type QuestionType = {
    id: string;
    author: {
      name: string;
      avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId: string | undefined;
}

type FirebaseQuestions = Record<string, {
    author: {
      name: string;
      avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<string, {
      authorId: string;
    }>
}>

const useRoom = (roomId: string, userId: string) => {
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);
  const [titleRoom, setTitleRoom] = React.useState('');

  React.useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      //Formata o retorno do arquivo do firebase, de objeto para array
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === userId)?.[0],
        }
      });

      setTitleRoom(databaseRoom.title);
      setQuestions(parsedQuestions);
    });

  }, [roomId, userId]);

  return {titleRoom, questions}
}

export default useRoom
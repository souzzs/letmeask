import * as C from "./styles";
import emptyQuestions from '../../assets/empty-questions.svg';

const EmptyQuestions = () => {
  return (
    <C.EmptyQuestions>
        <img src={emptyQuestions} alt="Sem perguntas no momento" />
        <C.Title>Nenhuma pergunta por aqui....</C.Title>
        <p>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</p>
    </C.EmptyQuestions>
  )
}

export default EmptyQuestions
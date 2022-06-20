import illustration from '../../assets/illustration.svg';

import * as C from "./styles";

const AsideIntroduction = () => {
  return (
    <C.Aside>
          <C.AsideImage src={illustration} alt='Illustration symbolizing questions and answers'/>
          <div>
            <C.AsideTitle> Crie salas de Q&A. </C.AsideTitle>
            <C.AsideDescription> Aprenda e compartilhe conhecimento com outras pessoas. </C.AsideDescription>
          </div>
    </C.Aside>
  )
}

export default AsideIntroduction
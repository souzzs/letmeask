import React from 'react';
import * as C from "./styles";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    iconAlt?: string;
    text: string;
}

const Button = ({icon, iconAlt, text, ...rest}: PropsButton) => {
  return (
    <C.Button {...rest}>
        {icon ? <img src={icon} alt={iconAlt}/> : undefined}
        {text}
    </C.Button>
  )
}

export default Button
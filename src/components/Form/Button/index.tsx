import React from 'react';
import * as C from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    iconAlt?: string;
    text: string;
}

const Button = ({icon, iconAlt, text, ...rest}: ButtonProps) => {
  return (
    <C.Button>
        {icon ? <img src={icon} alt={iconAlt}/> : undefined}
        {text}
    </C.Button>
  )
}

export default Button